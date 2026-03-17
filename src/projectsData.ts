export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  summary: string;
};

export const recentWorkProjects: ProjectItem[] = [
  {
    slug: "full-electrical-upgrade",
    title: "Full Electrical Upgrade",
    category: "Electrical",
    description:
      "Upgraded wiring, fittings, and power points for a modern residential property.",
    image: "/your-image-1.jpg",
    location: "Johannesburg",
    summary:
      "This project included a full electrical refresh with upgraded fittings, improved safety, and a cleaner final finish throughout the property.",
  },
  {
    slug: "leak-repair-pipe-replacement",
    title: "Leak Repair & Pipe Replacement",
    category: "Plumbing",
    description:
      "Resolved hidden leaks and replaced damaged piping with a clean, durable finish.",
    image: "/your-image-2.jpg",
    location: "Johannesburg",
    summary:
      "We traced hidden plumbing faults, repaired the leak source, and replaced damaged pipework to restore proper flow and reliability.",
  },
  {
    slug: "backup-power-installation",
    title: "Backup Power Installation",
    category: "Power Solutions",
    description:
      "Installed a reliable backup power solution for uninterrupted daily use.",
    image: "/your-image-3.jpg",
    location: "Johannesburg",
    summary:
      "This installation was designed to support essential daily power needs with a reliable and professionally integrated backup system.",
  },
  {
    slug: "bathroom-plumbing-refresh",
    title: "Bathroom Plumbing Refresh",
    category: "Plumbing",
    description:
      "Refined plumbing layout and fittings for a cleaner, more efficient bathroom setup.",
    image: "/your-image-4.jpg",
    location: "Johannesburg",
    summary:
      "We improved the plumbing setup, upgraded fittings, and delivered a cleaner, more efficient final bathroom system.",
  },
  {
    slug: "lighting-switch-installation",
    title: "Lighting & Switch Installation",
    category: "Electrical",
    description:
      "Installed new lighting, switches, and finishing details with a premium final result.",
    image: "/your-image-5.jpg",
    location: "Johannesburg",
    summary:
      "This project focused on clean lighting installation, neat switching points, and a polished final finish that lifted the whole space.",
  },
];