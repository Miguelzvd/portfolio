"use client";

import { useState } from "react";

export const ContactButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Enviando email:", formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Fechar formulário após sucesso
      setTimeout(() => {
        setIsExpanded(false);
        setStatus("idle");
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const disabled =
    isLoading || !formData.name || !formData.email || !formData.message;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <button
        className="w-fit relative rounded-sm text-white py-[0.6rem] px-[0.1rem] cursor-pointer gradient-rotate"
        aria-expanded={isExpanded}
        onClick={() => {
          setIsExpanded((pre) => !pre);
        }}
      >
        <span className="h-full w-full bg-dark rounded-sm py-2 px-4 text-2xl">
          Contact me
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all ease-in-out duration-700 ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <form
            onSubmit={handleSubmit}
            className="max-w-[24rem] w-full sm:w-[24rem] m p-6 rounded-lg bg-dark-gray flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-sm font-medium">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Seu nome completo"
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="seu.email@exemplo.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-white text-sm font-medium"
              >
                Mensagem <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Escreva sua mensagem aqui..."
                required
                disabled={isLoading}
              />
            </div>

            {status === "success" && (
              <div className="text-green-400 text-sm text-center">
                ✅ Mensagem enviada com sucesso!
              </div>
            )}

            {status === "error" && (
              <div className="text-red-400 text-sm text-center">
                ❌ Erro ao enviar mensagem. Tente novamente.
              </div>
            )}

            <button
              type="submit"
              disabled={disabled}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
