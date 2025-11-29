"use client";

import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const menuItems = [
    { href: "#about-me", label: t("about") },
    { href: "#my-stack", label: t("stack") },
    { href: "#my-journey", label: t("journey") },
    { href: "#my-projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  const handleLanguageChange = () => {
    const newLocale = currentLocale === "en" ? "pt" : "en";
    router.push(pathname, { locale: newLocale });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-white/10 shadow-lg">
        <div className="flex flex-row w-full justify-between items-center gap-4 sm:gap-10 px-8 py-4 max-w-[1400px] mx-auto md:px-20 lg:px-40 xl:px-60">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition-all hover:scale-110 bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden sm:block text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Miguel.dev
          </div>

          <nav className="hidden sm:flex gap-8 font-medium">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative hover:text-primary transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={handleLanguageChange}
            aria-label="Change language"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition-all hover:scale-105 border border-white/10 cursor-pointer"
          >
            <Languages size={18} />
            <span className="text-sm font-semibold">
              {currentLocale.toUpperCase()}
            </span>
          </button>
        </div>
      </header>

      {/* Spacer para compensar o header fixo */}
      <div className="h-[72px]" />

      <div
        className={`fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 h-full w-72 backdrop-blur-xl bg-dark/95 z-50 p-6 sm:hidden 
                   border-r border-white/10 shadow-2xl
                   transform transition-transform duration-300 ease-out ${
                     isOpen ? "translate-x-0" : "-translate-x-full"
                   }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Navigation
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-110"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className={`block py-4 px-4 rounded-lg hover:bg-white/10 hover:text-primary 
                           transition-all duration-300 transform border border-transparent hover:border-primary/30
                           ${
                             isOpen
                               ? "translate-x-0 opacity-100"
                               : "translate-x-4 opacity-0"
                           }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100 + 100}ms` : "0ms",
                }}
              >
                <span className="text-lg font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`absolute bottom-6 left-6 right-6 pt-4 border-t border-white/10 
                        transition-all duration-300 ${
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
          style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
        >
          <p className="text-sm text-gray-400 text-center">
            Portfolio • Miguel Azevedo
          </p>
        </div>
      </nav>
    </>
  );
};
