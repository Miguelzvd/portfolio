"use client";

const INTRO_STATE_SCRIPT = `try{var d=document.documentElement;var played=sessionStorage.getItem("intro-played");var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;d.dataset.intro=played||reduce?"done":"active"}catch(e){}`;

// Server-only on purpose: it must run inline before first paint so the intro
// never flashes, and React 19 skips unmatched <head> nodes while hydrating,
// so the client never re-creates the <script> (which React would warn about).
export const IntroStateScript = () =>
  typeof window === "undefined" ? (
    <script dangerouslySetInnerHTML={{ __html: INTRO_STATE_SCRIPT }} />
  ) : null;
