import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://miguelzvd.dev/pt",
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
    {
      url: "https://miguelzvd.dev/en",
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
    {
      url: "https://miguelzvd.dev/files/Miguel_Azevedo_CV_EN.pdf",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
  ];
}
