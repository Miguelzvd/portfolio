"use client";

import { useTranslations } from "next-intl";

export const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="row-start-3 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap items-center justify-center sm:justify-around w-full text-center sm:text-left">
      <div className="flex flex-col">
        <span className="text-sm sm:text-base">{t('designedBy')}</span>
        <span className="font-semibold">{t('name')}</span>
      </div>
      <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-lg justify-center">
        <a
          className="hover:underline text-primary"
          href="mailto:your-email@example.com"
        >
          Email
        </a>
        <a
          className="hover:underline text-secondary"
          href="https://www.linkedin.com/in/miguel-azevedo-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="hover:underline text-primary"
          href="https://github.com/Miguelzvd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="hover:underline text-secondary"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </nav>
    </footer>
  );
};
