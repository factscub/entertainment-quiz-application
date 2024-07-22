"use client";
import QuizScoreCard from "@/components/quizScoreCard";
import { UsersQuizzesScoresProps } from "./types";
import { usePathname } from "next/navigation";
import LargeHeading from "@/components/LargeHeading";
import RedirectLink from "@/components/RedirectLink";
import InputWithButton from "@/components/inputWithButton";
import Loader from "@/components/loader";
import useQuizzesScores from "./useQuizzesScores";

/**
 * A component that displays the latest quiz scores for all users and includes a search feature to find specific users' scores.
 */
const UsersQuizzesScores: React.FC<UsersQuizzesScoresProps> = ({
	usersQuizesScoresData,
}) => {
	const pathname = usePathname();
	const { onNameSubmitHandler, apiStatus, searchResults } = useQuizzesScores(
		usersQuizesScoresData,
	);

	if (apiStatus === "error") throw Error();
	return (
		<div className="w-full">
			<LargeHeading text="All Users Latest Quizzes Scores" />
			<div className="text-center py-6 sticky top-0">
				<RedirectLink href="/" text="Go Home" />
			</div>

			<div className="md:w-2/4 mx-auto">
				<InputWithButton
					buttonText="Search"
					placeholder="Enter any name"
					onSubmit={onNameSubmitHandler}
					required={false}
				/>
			</div>

			{apiStatus !== "loading" && !searchResults.length && (
				<LargeHeading text="No results found" />
			)}

			{apiStatus === "loading" ? (
				<Loader />
			) : (
				<div className="m-4 grid grid-cols-1 gap-5 md:grid-cols-2">
					{searchResults.map((quizScore) => (
						<a
							key={quizScore.id}
							href={`${pathname}/${quizScore.id}`}
							className="rounded-lg bg-gray-700 hover:shadow-lg hover:shadow-white transition duration-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<QuizScoreCard quizScore={quizScore} />
						</a>
					))}
				</div>
			)}
		</div>
	);
};

export default UsersQuizzesScores;
