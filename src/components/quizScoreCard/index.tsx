"use client";
import { QuizScoreCardProps } from "./types";

const QuizScoreCard: React.FC<QuizScoreCardProps> = ({
	quizScore: { name, message, correct_answers, total_questions, grade, status },
}) => {
	const quizScoreData = [
		["Name", name],
		["Score", `${(correct_answers * 100) / total_questions}%`],
		["Total questions", total_questions],
		["Correct answers", correct_answers],
		["Grade", grade],
		["Status", status],
	];

	return (
		<div className="p-5 rounded-lg bg-gray-700">
			<h2 className="text-center mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				{message}
			</h2>

			<dl className="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 lg:grid-cols-3">
				{quizScoreData.map((scoreData) => (
					<div
						key={scoreData[0]}
						className="flex flex-col items-center justify-center"
					>
						<dt className="mb-2 text-2xl tracking-wider font-extrabold capitalize">
							{scoreData[1]}
						</dt>
						<dd className="text-gray-500 dark:text-gray-400">{scoreData[0]}</dd>
					</div>
				))}
			</dl>
		</div>
	);
};

export default QuizScoreCard;
