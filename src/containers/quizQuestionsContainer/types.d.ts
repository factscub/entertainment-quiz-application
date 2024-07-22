import { QuizQuestion, QuizSubmitedData } from "@/types/types";

export type QuizQuestionsProps = { quizQuestionsData: QuizQuestion[] };

export type QuizFormSubmitData = Omit<QuizSubmitedData, "name">;
