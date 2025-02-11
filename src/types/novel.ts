export interface Novel {
  id: string;
  title: string;
  cover: string;
  rating: number;
  views: number;
  chapters: number;
  author: string;
  genres: string[];
  description?: string;
  status?: 'ongoing' | 'completed';
  lastUpdated?: Date;
  createdAt?: Date;
}

export interface Chapter {
  id: string;
  novelId: string;
  title: string;
  content: string;
  chapterNumber: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface NovelComment {
  id: string;
  novelId: string;
  userId: string;
  content: string;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}
