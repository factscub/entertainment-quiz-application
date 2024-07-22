import QuizQuestionsContainer from "@/containers/quizQuestionsContainer";
import {
	QuizQuestion,
	StringArrayKeyValuePair,
	StringKeyValuePair,
} from "@/types/types";
import fetchApi from "@/utils/fetchApi";
import suffleItems from "@/utils/suffleItems";
import { buildQueryString } from "@/utils/urlManipulation";

/**
 * The `QuizStartPage` component is responsible for fetching quiz questions based on the provided search parameters
 * and rendering them using the `QuizQuestionsContainer` component.
 * */
const QuizStartPage = async ({
	searchParams,
}: {
	searchParams: StringKeyValuePair;
}) => {
	const quizQuestionsData = await getQuizQuestionsData(searchParams);
	return <QuizQuestionsContainer quizQuestionsData={quizQuestionsData} />;
};

/**
 * Fetches and processes quiz questions based on the search parameters.
 */
async function getQuizQuestionsData(searchParams: StringKeyValuePair) {
	const queryParams: StringArrayKeyValuePair = {};

	// Convert search parameters into the format required by the API.
	Object.entries(searchParams).map(([key, value]) => {
		queryParams[key] = value.split(",");
	});

	// Build the API URL with query parameters.
	const url = `${process.env.APP_BASE_URL}/quiz-start/api/?${buildQueryString(
		queryParams,
	)}`;

	// Fetch data from the API.
	const questionsData = await fetchApi({ url });

	// Process the fetched data to match the expected format.
	return questionsData.map((quizQuestionData: any) => {
		return {
			...quizQuestionData,
			question: quizQuestionData.question.text,
			categoryName: quizQuestionData.category.split("_").join(" "),
			allOptions: suffleItems([
				...quizQuestionData.incorrectAnswers,
				quizQuestionData.correctAnswer,
			]),
		};
	}) as QuizQuestion[];
}

export default QuizStartPage;
