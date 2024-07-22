import { quizScoreConfig } from "@/constants/quizScoreConfig";
import { QuizSubmitedData } from "@/types/types";

/**
 * Computes and retrieves the manipulated quiz score based on the user's performance.
 *
 * This function calculates the percentage of correct answers and compares it
 * with the configured score ranges. It then returns the corresponding score
 * data along with the submitted quiz data.
 */
const getMainpulatedQuizScore = (quizData: QuizSubmitedData) => {
	// Calculate the percentage of correct answers.
	const correct_answers_percentage =
		(quizData.correct_answers * 100) / quizData.total_questions;

	// Iterate through the quiz score configuration to find a matching percentage.
	for (const scoreObj of quizScoreConfig) {
		if (correct_answers_percentage <= scoreObj.correct_answers_percentage) {
			// Return combined data of the matched score configuration and submitted quiz data.
			return {
				...scoreObj.data,
				...quizData,
			};
		}
	}
	// Return null if no matching percentage is found.
	return null;
};

export default getMainpulatedQuizScore;
