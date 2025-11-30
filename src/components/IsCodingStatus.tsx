"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export const IsCodingStatus = () => {
  const t = useTranslations("IsCodingStatus");
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
      );
      setCurrentTime(now);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000); 
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !currentTime) {
    return (
      <div className="flex flex-row gap-2 items-center justify-center mt-1 text-sm transition-all duration-300 animate-fade-in">
        <span className="text-sm">{t("loading")}</span>
        <div className="gap-2 w-fit rounded-full bg-gray-200/10 p-[0.25rem] flex flex-row items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>
      </div>
    );
  }

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const totalMinutes = hour * 60 + minute;

  const isCoding = totalMinutes >= 8 * 60 && totalMinutes <= 18 * 60;

  const getStatusMessage = () => {
    if (isCoding) return t("codingNow");

    if (hour >= 6 && hour < 8) return t("warmingUp");
    if (hour >= 18 && hour < 22) return t("wrappingUp");
    if (hour > 22 || hour < 6) return t("sleeping");

    return t("shortBreak");
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center mt-1 text-sm transition-all duration-300 animate-fade-in">
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
