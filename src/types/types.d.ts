export type KeyValuePair = {
	key: string;
	value: string;
};

// Represents an object where the keys are strings and the values are also strings.
export type StringKeyValuePair = {
	[key: string]: string;
};

// Represents an object where the keys are strings and the values are arrays of strings.
export type StringArrayKeyValuePair = {
	[key: string]: string[];
};

export type QuizScore = {
	id: string;
	name: string;
	total_questions: number;
	correct_answers: number;
	message: string;
	grade: string;
	status: string;
};

export type QuizQuestion = {
	id: string;
	question: string;
	category: string;
	difficulty: string;
	correctAnswer: string;
	incorrectAnswers: string[];
	allOptions: string[];
	categoryName: string;
};

export type OnSubmitForm = (event: React.FormEvent<HTMLFormElement>) => void;

export type APIStatus = "loading" | "initial" | "error";

type QuizSubmitedData = {
	name: string;
	total_questions: number;
	correct_answers: number;
};
