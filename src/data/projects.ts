export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  image: string;
  imageAlt: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "radioactivity",
    name: "Research on radioactivity",
    year: "1898-1903",
    summary:
      "Her measurements of uranium rays helped establish radioactivity as a property of atoms.",
    image: "/project-kinfolk.jpg",
    imageAlt: "Marie and Pierre Curie working with laboratory equipment",
    services: ["Physics", "Measurement", "Research"],
  },
  {
    slug: "polonium-and-radium",
    name: "Polonium & radium",
    year: "1898-1911",
    summary:
      "Marie and Pierre identified two new elements; Marie later isolated radium and won the 1911 Nobel Prize in Chemistry.",
    image: "/project-kinfolk.jpg",
    imageAlt: "Marie and Pierre Curie working with laboratory equipment",
    services: ["Chemistry", "Polonium", "Radium"],
  },
  {
    slug: "mobile-x-ray-units",
    name: "The Little Curies",
    year: "1914-1918",
    summary:
      "She organized mobile X-ray units and trained women to bring radiology to First World War field hospitals.",
    image: "/project-form.jpg",
    imageAlt:
      "Marie Curie beside a mobile military hospital X-ray vehicle, circa 1915",
    services: ["Radiology", "Mobile X-ray", "Medical service"],
  },
];
