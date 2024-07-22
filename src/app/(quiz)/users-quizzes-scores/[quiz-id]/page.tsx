import SingleQuizScoreContainer from "@/containers/singleQuizScoreContainer";
import getQuizScoreById from "@/dbScripts/getQuizScoreById";
import { StringKeyValuePair } from "@/types/types";
import { notFound } from "next/navigation";
import { validate as isUuid } from "uuid";

/**
 * Page component to display a single quiz score based on the provided quiz ID.
 */
const QuizScorePage = async ({ params }: { params: StringKeyValuePair }) => {
	const id = params["quiz-id"];

	// Validate the quiz ID to ensure it is a valid UUID.
	if (!isUuid(id)) return notFound();

	// Fetch the quiz score from the database by ID.
	const quizScore = await getQuizScoreById(id);

	// If no quiz score is found or the fetched data is empty, return a 404 page.
	if (!(quizScore && Object.keys(quizScore).length)) return notFound();

	// Return the `SingleQuizScoreContainer` component with the fetched quiz score.
	return <SingleQuizScoreContainer quizScore={quizScore} />;
};

export default QuizScorePage;
