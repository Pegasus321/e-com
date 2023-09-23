import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    id: uuid(),
    firstName: "Ayush",
    lastName: "Agrawal",
    email: "ayushakl67@gmail.com",
    password: "ayush123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
