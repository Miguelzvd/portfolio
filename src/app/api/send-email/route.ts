import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting simples em memória (para produção, use Redis ou banco de dados)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutos
const MAX_REQUESTS = 3; // Máximo 3 emails por IP a cada 15 minutos

// Função para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeText(text: string): string {
  return text.trim().replace(/<script[^>]*>.*?<\/script>/gi, '').substring(0, 1000);
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     request.headers.get('cf-connecting-ip') || 
                     'unknown';
    const now = Date.now();
    const userLimit = rateLimitMap.get(clientIP);

    if (userLimit) {
      if (now < userLimit.resetTime) {
        if (userLimit.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Muitas tentativas. Tente novamente em 15 minutos.' },
            { status: 429 }
          );
        }
        userLimit.count++;
      } else {
        // Reset do contador após o tempo limite
        rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeText(name);
    const sanitizedMessage = sanitizeText(message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'miguelzvd.dev@gmail.com',
      subject: `Novo contato do portfólio - ${sanitizedName}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>IP: ${clientIP} | Data: ${new Date().toLocaleString('pt-BR')}</small></p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}