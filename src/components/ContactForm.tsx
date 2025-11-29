"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Send, Mail, Calendar } from "lucide-react";
import { toast } from "sonner";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createContactSchema = (t: (key: string) => string) =>
  z.object({
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
      .max(1000, t("messageMaxError")),
  });

export const ContactForm: React.FC = () => {
  const t = useTranslations("ContactForm");
  const contactSchema = createContactSchema(t);
  type ContactFormData = z.infer<typeof contactSchema>;

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao enviar email");
      }

      toast.success(t("successMessage"), {
        description: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      reset();
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error(t("errorMessage"), {
        description: t("errorDescription"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const messageLength = watchedFields.message?.length || 0;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="w-fit relative rounded-sm text-white p-[0.15rem] cursor-pointer gradient-rotate overflow-hidden">
          <span className="flex h-full w-full bg-dark rounded-sm py-2 px-4 text-2xl items-center justify-center">
            {t("buttonText")}
          </span>
        </button>
      </DrawerTrigger>

      <DrawerContent className="bg-black/30 backdrop-blur-sm border-gray-700 pb-6  sm:max-w-[40rem] sm:max-h-[[20rem] sm:min-h-[20rem] px-4 mx-auto">
        <DrawerTitle className="mt-6">Contact Options</DrawerTitle>
        <DrawerDescription>
          Choose how you would like to get in touch - quick connect or fill out
          a form
        </DrawerDescription>
        <div className="mx-auto w-full max-w-xl">
          <Tabs defaultValue="quick" className="w-full p-4">
            <TabsList className="w-full grid grid-cols-2 my-6 gap-2 bg-dark">
              <TabsTrigger
                value="quick"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-white bg-transparent text-gray-400 hover:text-white rounded-sm"
              >
                Quick connect
              </TabsTrigger>
              <TabsTrigger
                value="form"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-white bg-transparent text-gray-400 hover:text-white rounded-sm"
              >
                Fill a form
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quick">
              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href="mailto:miguelzvd.dev@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-sm text-gray-300 mb-1">
                      miguelzvd.dev@gmail.com
                    </p>
                    <p className="text-xs text-gray-500">
                      Send me an email directly
                    </p>
                  </div>
                </a>

                {/* Calendar Card */}
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 bg-gray-yellow/50 hover:bg-yellow-900/20 hover:border-yellow-500/50 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">
                      Book a Call
                    </h3>
                    <p className="text-sm text-gray-300 mb-1">
                      Schedule a time slot
                    </p>
                    <p className="text-xs text-gray-500">
                      Book a call on my calendar
                    </p>
                  </div>
                </a>

                {/* Status */}
                <div className="flex items-center justify-center gap-2 p-2 rounded-sm text-sm text-green-500 bg-green-500/5 border-green-500/40 border-1">
                  <div className="flex flex-row relative">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping " />
                    <div className="w-2 h-2 rounded-full bg-green-500 absolute" />
                  </div>
                  Currently available for new opportunities
                </div>
              </div>
            </TabsContent>

            <TabsContent value="form">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-300"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      className={`border rounded-lg text-white placeholder-gray-500  transition-colors ${
                        errors.name && "border-red-500"
                      }`}
                      placeholder="Your name"
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-300"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`border rounded-lg text-white placeholder-gray-500  transition-colors ${
                        errors.email && "border-red-500"
                      }`}
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-300"
                    >
                      Message
                    </label>
                    <span className="text-xs text-gray-500">
                      {messageLength}/1000
                    </span>
                  </div>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`rounded-lg text-white placeholder-gray-500  transition-colors resize-none ${
                      errors.message && "border-red-500"
                    }`}
                    placeholder="What would you like to discuss?"
                    disabled={isLoading}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isLoading ? t("sendingButton") : "Send message"}
                </button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
