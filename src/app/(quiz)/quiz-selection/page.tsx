import quizSelectionData from "@/constants/quizSelectionData";
import QuizSelectionContainer from "@/containers/quizSelectionContainer";
import { notFound } from "next/navigation";

const QuizSelectionPage = () => {
	if (!(quizSelectionData && Object.keys(quizSelectionData).length)) {
		return notFound();
	}
	return <QuizSelectionContainer quizSelectionData={quizSelectionData} />;
};

export default QuizSelectionPage;
