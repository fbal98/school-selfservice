// Subject and Semester Enums
export enum Subject {
  MATHEMATICS = "MATHEMATICS",
  ENGLISH = "ENGLISH",
  SCIENCE = "SCIENCE",
  ARABIC = "ARABIC",
  ISLAMIC_STUDIES = "ISLAMIC_STUDIES",
  SOCIAL_STUDIES = "SOCIAL_STUDIES",
  PHYSICAL_EDUCATION = "PHYSICAL_EDUCATION",
  ART = "ART",
  COMPUTER_SCIENCE = "COMPUTER_SCIENCE",
}

export enum Semester {
  FALL = "FALL",
  SPRING = "SPRING",
}

// Subject Names in English and Arabic
export const SubjectNames: Record<Subject, { en: string; ar: string }> = {
  [Subject.MATHEMATICS]: {
    en: "Mathematics",
    ar: "الرياضيات",
  },
  [Subject.ENGLISH]: {
    en: "English",
    ar: "اللغة الإنجليزية",
  },
  [Subject.SCIENCE]: {
    en: "Science",
    ar: "العلوم",
  },
  [Subject.ARABIC]: {
    en: "Arabic",
    ar: "اللغة العربية",
  },
  [Subject.ISLAMIC_STUDIES]: {
    en: "Islamic Studies",
    ar: "التربية الإسلامية",
  },
  [Subject.SOCIAL_STUDIES]: {
    en: "Social Studies",
    ar: "الدراسات الاجتماعية",
  },
  [Subject.PHYSICAL_EDUCATION]: {
    en: "Physical Education",
    ar: "التربية البدنية",
  },
  [Subject.ART]: {
    en: "Art",
    ar: "الفنون",
  },
  [Subject.COMPUTER_SCIENCE]: {
    en: "Computer Science",
    ar: "علوم الحاسوب",
  },
};

// Semester Names in English and Arabic
export const SemesterNames: Record<Semester, { en: string; ar: string }> = {
  [Semester.FALL]: {
    en: "Fall Semester",
    ar: "الفصل الدراسي الأول",
  },
  [Semester.SPRING]: {
    en: "Spring Semester",
    ar: "الفصل الدراسي الثاني",
  },
};

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  children: string[]; // Array of student IDs
}

export interface Student {
  id: string;
  name: string;
  grade: number;
  age: number;
  photoUrl: string;
  parentId: string;
}

export interface Grade {
  studentId: string;
  subject: Subject;
  score: number;
  semester: Semester;
  year: number;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subjects: Subject[];
  photoUrl: string;
}

export interface ClassSchedule {
  studentId: string;
  day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
  timeSlot: string;
  subject: Subject;
  teacherId: string;
  room: string;
}

export interface ContactRequest {
  id: string;
  parentId: string;
  teacherId: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
  proposedTimeSlots: string[];
  createdAt: string;
}

// Mock Parents
export const parents: Parent[] = [
  {
    id: "P1",
    name: "سالم بن راشد الحارثي",
    email: "salem@example.com",
    phone: "96891234567",
    children: ["S1", "S2"],
  },
  {
    id: "P2",
    name: "فاطمة بنت سعيد البلوشي",
    email: "fatma@example.com",
    phone: "96892345678",
    children: ["S3"],
  },
];

// Mock Students
export const students: Student[] = [
  {
    id: "S1",
    name: "عبدالله بن سالم الحارثي",
    grade: 10,
    age: 15,
    photoUrl: "/students/abdullah.jpg",
    parentId: "P1",
  },
  {
    id: "S2",
    name: "مريم بنت سالم الحارثي",
    grade: 8,
    age: 13,
    photoUrl: "/students/maryam.jpg",
    parentId: "P1",
  },
  {
    id: "S3",
    name: "أحمد بن محمد البلوشي",
    grade: 11,
    age: 16,
    photoUrl: "/students/ahmed.jpg",
    parentId: "P2",
  },
];

// Mock Grades
export const grades: Grade[] = [
  {
    studentId: "S1",
    subject: Subject.MATHEMATICS,
    score: 95,
    semester: Semester.FALL,
    year: 2023,
  },
  {
    studentId: "S1",
    subject: Subject.ENGLISH,
    score: 88,
    semester: Semester.FALL,
    year: 2023,
  },
  {
    studentId: "S2",
    subject: Subject.SCIENCE,
    score: 92,
    semester: Semester.FALL,
    year: 2023,
  },
  {
    studentId: "S1",
    subject: Subject.ARABIC,
    score: 96,
    semester: Semester.FALL,
    year: 2023,
  },
  {
    studentId: "S1",
    subject: Subject.ISLAMIC_STUDIES,
    score: 98,
    semester: Semester.FALL,
    year: 2023,
  },
];

// Mock Teachers
export const teachers: Teacher[] = [
  {
    id: "T1",
    name: "د. عائشة بنت خميس الراشدي",
    email: "aisha@school.om",
    phone: "96893456789",
    subjects: [Subject.MATHEMATICS, Subject.SCIENCE],
    photoUrl: "/teachers/aisha.jpg",
  },
  {
    id: "T2",
    name: "أ. يوسف بن سعيد الريامي",
    email: "yousuf@school.om",
    phone: "96894567890",
    subjects: [Subject.ENGLISH],
    photoUrl: "/teachers/yousuf.jpg",
  },
  {
    id: "T3",
    name: "أ. نورة بنت سالم الكندي",
    email: "noora@school.om",
    phone: "96895678901",
    subjects: [Subject.ARABIC, Subject.ISLAMIC_STUDIES],
    photoUrl: "/teachers/noora.jpg",
  },
];

// Mock Class Schedule
export const schedules: ClassSchedule[] = [
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "08:00-09:30",
    subject: Subject.MATHEMATICS,
    teacherId: "T1",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "09:45-11:15",
    subject: Subject.ENGLISH,
    teacherId: "T2",
    room: "١٠٢",
  },
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "11:30-13:00",
    subject: Subject.ARABIC,
    teacherId: "T3",
    room: "١٠٣",
  },
];

// Mock Contact Requests
export const contactRequests: ContactRequest[] = [
  {
    id: "CR1",
    parentId: "P1",
    teacherId: "T1",
    reason: "مناقشة أداء الطالب في مادة الرياضيات",
    status: "pending",
    proposedTimeSlots: ["14:00 2023-12-01", "15:00 2023-12-02"],
    createdAt: "2023-11-27T12:00:00Z",
  },
];

// Authentication related mock data
export const validOTPs: Record<string, string> = {
  "96891234567": "123456", // For Salem
  "96892345678": "654321", // For Fatma
};

// Helper function to validate parent login
export const validateParentLogin = (
  phone: string,
  otp: string
): Parent | null => {
  if (validOTPs[phone] === otp) {
    return parents.find((parent) => parent.phone === phone) || null;
  }
  return null;
};
