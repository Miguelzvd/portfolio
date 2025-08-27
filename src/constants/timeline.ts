export const getTimelineEvents = (t: (key: string) => string) => [
  {
    year: "2019 - 2023",
    description: t("computerEngineering"),
    context: t("graduation"),
  },
  {
    year: "2022",
    description: t("androidDevelopment"),
    context: t("universityProject"),
  },
  {
    year: "2023",
    description: t("sineSystem"),
    context: t("internship"),
  },
  {
    year: "2024 - 2025",
    description: t("jovemPotiguarPlatform"),
    context: t("frontendDeveloper"),
  },
  {
    year: "2025",
    event_status: t("present"),
    description: t("funciterninternalSystems"),
    context: "Frontend Developer",
  },
  {
    year: "2025",
    event_status: t("inProgress"),
    description: t("suasSystem"),
    context: t("frontendDeveloper"),
  },
  {
    year: "2025",
    event_status: t("inProgress"),
    description: t("prpSystem"),
    context: t("frontendDeveloper"),
  },
];

// Fallback for components that don't have access to translations
export const timelineEvents = [
  {
    year: "2019 - 2023",
    description: "Computer Engineering",
    context: "Universidade Potiguar - Graduation",
  },
  {
    year: "2022",
    description: "Android App Development for Health and Pregnant Women",
    context: "University Project",
  },
  {
    year: "2023",
    description: "National Employment System (SINE)",
    context: "Internship",
  },
  {
    year: "2024 - 2025",
    description: "Jovem Potiguar Platform",
    context: "Frontend Developer at FUNCITERN",
  },
  {
    year: "2025",
    event_status: "present",
    description: "FUNCITERN Internal Systems",
    context: "Frontend Developer",
  },
  {
    year: "2025",
    event_status: "in progress",
    description: "SUAS System",
    context: "Frontend Developer at FUNCITERN",
  },
  {
    year: "2025",
    event_status: "in progress",
    description: "PRP System",
    context: "Frontend Developer at FUNCITERN",
  },
];
