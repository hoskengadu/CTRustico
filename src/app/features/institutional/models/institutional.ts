export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface Teacher {
  id: string;
  name: string;
  rank: string;
  role: string;
  bio: string;
  photo?: Photo;
}
export interface Training {
  id: string;
  day: string;
  time: string | null;
  modality: string;
  group: string;
  teacher?: string;
}
export interface InstitutionalContent {
  hero: { eyebrow: string; title: string; emphasis: string; description: string; photo?: Photo };
  history: string | null;
  mission: string | null;
  culture: string | null;
  values: readonly { title: string; description: string }[];
  teachers: readonly Teacher[];
  schedule: readonly Training[];
  scheduleNote?: string;
  gallery: readonly Photo[];
  modalities: readonly string[];
  contact: {
    address: string | null;
    mapUrl: string | null;
    phone: string | null;
    whatsappUrl: string | null;
  };
  pending: {
    history: string;
    teachers: string;
    schedule: string;
    gallery: string;
    address: string;
    modalities: string;
  };
}
