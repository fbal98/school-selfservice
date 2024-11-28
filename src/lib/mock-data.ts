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
    phone: "968912341122",
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
    name: "أ. محمد بن سعيد الراشدي",
    email: "mohammed@school.om",
    phone: "96893456789",
    subjects: [Subject.MATHEMATICS],
    photoUrl:
      "https://ui-avatars.com/api/?name=محمد+الراشدي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T2",
    name: "أ. يوسف بن سعيد الريامي",
    email: "yousuf@school.om",
    phone: "96894567890",
    subjects: [Subject.ENGLISH],
    photoUrl:
      "https://ui-avatars.com/api/?name=يوسف+الريامي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T3",
    name: "أ. أحمد بن سالم الكندي",
    email: "ahmed@school.om",
    phone: "96895678901",
    subjects: [Subject.ARABIC],
    photoUrl:
      "https://ui-avatars.com/api/?name=أحمد+الكندي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T4",
    name: "أ. عبدالله بن حمد البلوشي",
    email: "abdullah@school.om",
    phone: "96896789012",
    subjects: [Subject.SCIENCE],
    photoUrl:
      "https://ui-avatars.com/api/?name=عبدالله+البلوشي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T5",
    name: "أ. عمر بن خالد السعدي",
    email: "omar@school.om",
    phone: "96897890123",
    subjects: [Subject.ISLAMIC_STUDIES],
    photoUrl:
      "https://ui-avatars.com/api/?name=عمر+السعدي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T6",
    name: "أ. سعيد بن راشد المعمري",
    email: "saeed@school.om",
    phone: "96898901234",
    subjects: [Subject.SOCIAL_STUDIES],
    photoUrl:
      "https://ui-avatars.com/api/?name=سعيد+المعمري&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T7",
    name: "أ. ناصر بن سالم الحبسي",
    email: "nasser@school.om",
    phone: "96899012345",
    subjects: [Subject.PHYSICAL_EDUCATION],
    photoUrl:
      "https://ui-avatars.com/api/?name=ناصر+الحبسي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
  {
    id: "T8",
    name: "أ. طلال بن حمد الزدجالي",
    email: "talal@school.om",
    phone: "96890123456",
    subjects: [Subject.COMPUTER_SCIENCE],
    photoUrl:
      "https://ui-avatars.com/api/?name=طلال+الزدجالي&background=2563eb&color=fff&size=128&font-size=0.4",
  },
];

// Mock Class Schedule - Organized for optimal student experience
export const schedules: ClassSchedule[] = [
  // MONDAY
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "07:30-08:15",
    subject: Subject.ISLAMIC_STUDIES,
    teacherId: "T5",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "08:15-09:00",
    subject: Subject.MATHEMATICS,
    teacherId: "T1",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "09:00-09:45",
    subject: Subject.ENGLISH,
    teacherId: "T2",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "10:15-11:00",
    subject: Subject.SCIENCE,
    teacherId: "T4",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "monday",
    timeSlot: "11:00-11:45",
    subject: Subject.ARABIC,
    teacherId: "T3",
    room: "١٠١",
  },

  // TUESDAY
  {
    studentId: "S1",
    day: "tuesday",
    timeSlot: "07:30-08:15",
    subject: Subject.MATHEMATICS,
    teacherId: "T1",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "tuesday",
    timeSlot: "08:15-09:00",
    subject: Subject.COMPUTER_SCIENCE,
    teacherId: "T8",
    room: "مختبر ١",
  },
  {
    studentId: "S1",
    day: "tuesday",
    timeSlot: "09:00-09:45",
    subject: Subject.SOCIAL_STUDIES,
    teacherId: "T6",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "tuesday",
    timeSlot: "10:15-11:00",
    subject: Subject.ENGLISH,
    teacherId: "T2",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "tuesday",
    timeSlot: "11:00-11:45",
    subject: Subject.PHYSICAL_EDUCATION,
    teacherId: "T7",
    room: "الملعب",
  },

  // WEDNESDAY
  {
    studentId: "S1",
    day: "wednesday",
    timeSlot: "07:30-08:15",
    subject: Subject.ARABIC,
    teacherId: "T3",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "wednesday",
    timeSlot: "08:15-09:00",
    subject: Subject.ISLAMIC_STUDIES,
    teacherId: "T5",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "wednesday",
    timeSlot: "09:00-09:45",
    subject: Subject.MATHEMATICS,
    teacherId: "T1",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "wednesday",
    timeSlot: "10:15-11:00",
    subject: Subject.SCIENCE,
    teacherId: "T4",
    room: "مختبر ٢",
  },
  {
    studentId: "S1",
    day: "wednesday",
    timeSlot: "11:00-11:45",
    subject: Subject.COMPUTER_SCIENCE,
    teacherId: "T8",
    room: "مختبر ١",
  },

  // THURSDAY
  {
    studentId: "S1",
    day: "thursday",
    timeSlot: "07:30-08:15",
    subject: Subject.ENGLISH,
    teacherId: "T2",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "thursday",
    timeSlot: "08:15-09:00",
    subject: Subject.SCIENCE,
    teacherId: "T4",
    room: "مختبر ٢",
  },
  {
    studentId: "S1",
    day: "thursday",
    timeSlot: "09:00-09:45",
    subject: Subject.SOCIAL_STUDIES,
    teacherId: "T6",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "thursday",
    timeSlot: "10:15-11:00",
    subject: Subject.ARABIC,
    teacherId: "T3",
    room: "١٠١",
  },
  {
    studentId: "S1",
    day: "thursday",
    timeSlot: "11:00-11:45",
    subject: Subject.PHYSICAL_EDUCATION,
    teacherId: "T7",
    room: "الملعب",
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

// Mock validOTPs for parent authentication
export const validOTPs: Record<string, string> = {
  "99427232": "123456", // Salem's phone
  "99895050": "123456", // Fatma's phone
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
