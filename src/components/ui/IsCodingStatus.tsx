"use client";

export const IsCodingStatus = () => {
  const getNowInSaoPaulo = () =>
    new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
    );

  const now = getNowInSaoPaulo();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const totalMinutes = hour * 60 + minute;

  const isCoding = totalMinutes >= 8 * 60 && totalMinutes <= 18 * 60;

  const getStatusMessage = () => {
    if (isCoding) return "💻 Coding right now";

    if (hour >= 6 && hour < 8) return "☕ Warming up...";
    if (hour >= 18 && hour < 22) return "🌙 Wrapping things up";
    if (hour > 22 || hour < 6) return "💤 Probably sleeping...";

    return "⏳ Taking a short break";
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center mt-1 text-sm">
      <span className="text-sm">{getStatusMessage()}</span>
      <div
        className={`gap-2 w-fit rounded-full ${
          isCoding ? "bg-emerald-200/10" : "bg-red-200/10"
        } p-[0.25rem] flex flex-row items-center justify-center`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isCoding ? "bg-emerald-400 animate-pulse" : "bg-red-400"
          }`}
        />
      </div>
    </div>
  );
};
