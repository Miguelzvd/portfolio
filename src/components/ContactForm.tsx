"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";

const createContactSchema = (t: (key: string) => string) => z.object({
  name: z
    .string()
    .min(2, t("nameMinError"))
    .max(100, t("nameMaxError"))
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, t("nameRegexError")),
  email: z
    .string()
    .email(t("emailInvalidError"))
    .min(1, t("emailRequiredError")),
  message: z
    .string()
    .min(3, t("messageMinError"))
    .max(1000, t("messageMaxError"))
});

export const ContactForm: React.FC = () => {
  const t = useTranslations("ContactForm");
  const contactSchema = createContactSchema(t);
  type ContactFormData = z.infer<typeof contactSchema>;
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  });

  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Falha ao enviar email');
      }

      setStatus("success");
      reset();

      setTimeout(() => {
        setIsExpanded(false);
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const disabled = isLoading || !isValid || !watchedFields.name || !watchedFields.email || !watchedFields.message;

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
          {t("buttonText")}
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
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[24rem] w-full sm:w-[24rem] m p-6 rounded-lg bg-dark-gray flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-sm font-medium">
                {t("nameLabel")} <span className="text-red-500">{t("required")}</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={`px-3 py-2 bg-gray-800 border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-gray-600"
                }`}
                placeholder={t("namePlaceholder")}
                disabled={isLoading}
              />
              {errors.name && (
                <span className="text-red-400 text-xs">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                {t("emailLabel")} <span className="text-red-500">{t("required")}</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`px-3 py-2 bg-gray-800 border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
                placeholder={t("emailPlaceholder")}
                disabled={isLoading}
              />
              {errors.email && (
                <span className="text-red-400 text-xs">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-white text-sm font-medium"
              >
                {t("messageLabel")} <span className="text-red-500">{t("required")}</span>
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className={`px-3 py-2 bg-gray-800 border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-gray-600"
                }`}
                placeholder={t("messagePlaceholder")}
                disabled={isLoading}
              />
              {errors.message && (
                <span className="text-red-400 text-xs">{errors.message.message}</span>
              )}
            </div>

            {status === "success" && (
              <div className="text-green-400 text-sm text-center">
                {t("successMessage")}
              </div>
            )}

            {status === "error" && (
              <div className="text-red-400 text-sm text-center">
                {t("errorMessage")}
              </div>
            )}

            <button
              type="submit"
              disabled={disabled}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
            >
              {isLoading ? t("sendingButton") : t("sendButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
