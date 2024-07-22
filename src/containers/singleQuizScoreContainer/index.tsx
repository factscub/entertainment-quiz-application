import QuizScoreCard from "@/components/quizScoreCard";
import { SingleQuizScoreProps } from "./types";
import LargeHeading from "@/components/LargeHeading";
import RedirectLink from "@/components/RedirectLink";

/**
 * A component that displays a single quiz score along with the user's name and a link to return home.
 */
const SingleQuizScore: React.FC<SingleQuizScoreProps> = ({ quizScore }) => {
	return (
		<div>
			<LargeHeading text={`${quizScore.name}'s quiz Score`} />
			<div className="bg-gray-700 my-8 rounded-lg ">
				<QuizScoreCard quizScore={quizScore} />
				<div className="text-center p-6">
					<RedirectLink href="/" text="Go Home" />
				</div>
			</div>
		</div>
	);
};

export default SingleQuizScore;
