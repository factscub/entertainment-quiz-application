import UsersQuizzesScoresContainer from "@/containers/usersQuizzesScoresContainer";
import getAllUsersQuizzes from "@/dbScripts/getAllUsersQuizzes";
import { notFound } from "next/navigation";

// Mark this page as dynamic to force server-side rendering on every request.
export const dynamic = "force-dynamic";

/**
 * Page component that displays all users' quizzes scores.
 */
const UsersQuizzesScoresPage = async () => {
	// Fetch all users' quizzes scores data from the database.
	const usersQuizesScoresData = await getAllUsersQuizzes();

	// If no data is found, trigger a 404 error.
	if (!(Array.isArray(usersQuizesScoresData) && usersQuizesScoresData.length)) {
		notFound();
	}

	// Return the container component with the fetched data.
	return (
		<UsersQuizzesScoresContainer
			usersQuizesScoresData={usersQuizesScoresData}
		/>
	);
};

export default UsersQuizzesScoresPage;
