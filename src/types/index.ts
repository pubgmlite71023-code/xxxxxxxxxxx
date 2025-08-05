export interface Student {
  id: number;
  name: string;
  category: string;
  grade: number;
  rank?: number;
}

export interface ContestStats {
  totalStudents: number;
  categories: string[];
  averageGrade: number;
  topGrade: number;
}

export interface RegisteredStudent {
  id: string;
  name: string;
  category: string;
  phone?: string;
  guardian_name?: string;
  registration_date: string;
  created_at: string;
}

export interface RegisteredStudent {
  id: string;
  name: string;
  category: string;
  phone?: string;
  guardian_name?: string;
  registration_date: string;
  created_at: string;
}