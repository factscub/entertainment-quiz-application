"use client";
import { QuizQuestionsProps } from "./types";
import QuizQuestion from "@/components/quizQuestion";
import QuizSubmitModal from "@/components/quizSubmitModal";
import useQuizQuestions from "./useQuizQuestions";
import Loader from "@/components/loader";
import LargeHeading from "@/components/LargeHeading";
import RedirectLink from "@/components/RedirectLink";

/**
 * Component for displaying a list of quiz questions and handling quiz submission.
 *
 * This component displays a series of quiz questions provided via `quizQuestionsData` prop.
 * It includes a form for submitting answers, a loading indicator, error handling, and
 * a modal for confirming quiz submission.
 */
const QuizQuestions: React.FC<QuizQuestionsProps> = ({ quizQuestionsData }) => {
	const {
		onFinishQuizHandler,
		openModal,
		setOpenModal,
		onSubmitQuizScore,
		apiStatus,
	} = useQuizQuestions(quizQuestionsData);

	// Display a loading spinner while data is being fetched
	if (apiStatus === "loading")
		return (
			<div className="flex min-h-screen justify-center items-center">
				<Loader />
			</div>
		);
	// Handle API errors
	else if (apiStatus === "error") throw Error();

	return (
		<div>
			<LargeHeading text="Start answering the questions😉" />
			<form onSubmit={onFinishQuizHandler}>
				{quizQuestionsData.map((quizQuestionData, index) => (
					<QuizQuestion
						key={quizQuestionData.id}
						quizQuestionData={quizQuestionData}
						questionNumber={`${index + 1}/${quizQuestionsData.length}`}
					/>
				))}

				<div className="text-center sticky bottom-0">
					<RedirectLink href="/" text="Go Home" />
					<button type="submit" className="dark-button-link">
						Finish Quiz
					</button>
				</div>
			</form>
			{openModal && (
				<QuizSubmitModal
					closeModal={setOpenModal}
					onSubmit={onSubmitQuizScore}
				/>
			)}
		</div>
	);
};

export default QuizQuestions;
