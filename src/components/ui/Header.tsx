import { Languages } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row w-full justify-end items-center gap-10">
      <ol className="flex flex-row gap-6 font-bold">
        <li>
          <Link href="journey">Journey</Link>
        </li>
        <li>
          <Link href="stack">Stack</Link>
        </li>
        <li>
          <Link href="projects">Projects</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ol>

      <button
        aria-label="Change language"
        className="flex flex-row gap-2 items-center bg-blue-500/20 rounded-md p-2 cursor-pointer hover:bg-blue-500/30 transition-all duration-300"
      >
        <Languages aria-hidden="true" />
        <span className="text-sm">EN</span>
      </button>
    </header>
  );
};
