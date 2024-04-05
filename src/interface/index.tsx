interface ImageType {
  path: string;
  alt: string;
}

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  sourceUrl: string;
  liveUrl: string;
  images: ImageType[];
  skills: string[];
}

export interface ExperienceType {
  id: string;
  position: string;
  location: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
}
