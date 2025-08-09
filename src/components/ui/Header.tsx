import { Languages } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex flex-row w-full justify-end items-center gap-10">
      <ol className="flex flex-row gap-6 font-bold">
        <li>
          <a href="#my-journey">Journey</a>
        </li>
        <li>
          <a href="#my-stack">Stack</a>
        </li>
        <li>
          <a href="#my-projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
