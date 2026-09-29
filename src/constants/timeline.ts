export type TimelineEvent = {
  year: string;
  title: string;
  subtitle: string;
  isCurrent?: boolean;
};

export const getTimelineEvents = (
  t: (key: string) => string
): TimelineEvent[] => [
  {
    year: "2019 – 2023",
    title: t("computerEngineering"),
    subtitle: t("unp"),
  },
  {
    year: "2022",
    title: t("androidApp"),
    subtitle: t("universityProject"),
  },
  {
    year: "2023",
    title: t("sine"),
    subtitle: t("internship"),
  },
  {
    year: "2024 – 2026",
    title: t("softwareEngineer"),
    subtitle: t("funcitern"),
  },
  {
    year: "2026",
    title: t("fullStackEngineer"),
    subtitle: t("unimed"),
    isCurrent: true,
  },
];
