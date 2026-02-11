import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory subject covering basic programming concepts, algorithms, and computational thinking.",
    created: new Date().toISOString(),
  },
  {
    id: 2,
    code: "BUS210",
    name: "Principles of Management",
    department: "Business Administration",
    description:
      "Study of fundamental management principles such as planning, organizing, leadership, and decision-making.",
    created: new Date().toISOString(),
  },

  {
    id: 3,
    code: "ENG305",
    name: "Technical Writing",
    department: "English",
    description:
      "Focuses on writing clear and effective technical documents, reports, and professional communication.",
    created: new Date().toISOString(),
  },
];
