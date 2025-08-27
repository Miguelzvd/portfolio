"use client";

import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const menuItems = [
    { href: "#my-journey", label: t('journey') },
    { href: "#my-stack", label: t('stack') },
    { href: "#my-projects", label: t('projects') },
    { href: "#contact", label: t('contact') },
  ];
  
  const handleLanguageChange = () => {
    const newLocale = currentLocale === 'en' ? 'pt' : 'en';
    router.push(pathname, { locale: newLocale });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="flex flex-row w-full justify-end items-center gap-4 sm:gap-10 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-5 sm:hidden p-2 rounded-md hover:bg-gray-700 transition-colors z-50 bg-amber-50/10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden sm:flex gap-6 font-bold">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={handleLanguageChange}
          aria-label="Change language"
          className="flex items-center gap-2 bg-blue-500/20 rounded-md p-2 hover:bg-blue-500/30 transition-colors z-50 relative"
        >
          <Languages size={16} />
          <span className="text-sm">{currentLocale.toUpperCase()}</span>
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 h-full w-72 bg-dark-gray z-50 p-6 sm:hidden 
                   transform transition-transform duration-300 ease-out ${
                     isOpen ? "translate-x-0" : "-translate-x-full"
                   }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-600 rounded-lg transition-colors"
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
                className={`block py-4 px-4 rounded-lg hover:bg-gray-600 hover:text-primary 
                           transition-all duration-300 transform ${
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
