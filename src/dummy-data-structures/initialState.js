import { initialQuestions } from "./initialQuestions";

export const initialState = {
  userReplies: initialQuestions,
  chatStorage: ["What can I help you with?"],
  question: "",
  title: ""
};
