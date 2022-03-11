export type ExperienceType = {
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

export type EducationType = {
  organization: string;
  degree: string;
  department: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

export type PublicationType = {
  journal: string;
  title: string;
  link?: string;
  authors: string[];
  date: string;
  volume?: string;
  page?: string;
  description?: string;
};

export type SymposiumType = {
  symposium: string;
  title: string;
  link?: string;
  authors: string[];
  date: string;
  volume?: string;
  page?: string;
  description?: string;
};

export type ActivityType = {
  title: string;
  date: string;
  description?: string;
};
