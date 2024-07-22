import { KeyValuePair, StringArrayKeyValuePair } from "@/types/types";

type QuizSelectionData = {
	[key: string]: KeyValuePair[];
};

export type SelectedQuizData = StringArrayKeyValuePair;

export interface QuizSelectionProps {
	quizSelectionData: QuizSelectionData;
}
