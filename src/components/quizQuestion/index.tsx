import { QuizQuestionProps } from "./types";
import RadioButton from "../radioButton";
import { useState } from "react";
import React from "react";

enum DifficultyColor {
	easy = "bg-green-600",
	medium = "bg-yellow-600",
	hard = "bg-red-600",
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
	quizQuestionData,
	questionNumber,
}) => {
	const [selectedOption, setSelectedOption] = useState<string>();
	const getDifficultyColor = (difficulty: string) => {
		if (difficulty in DifficultyColor) {
			return DifficultyColor[difficulty as keyof typeof DifficultyColor];
		}
		return "bg-blue-600"; // default color if difficulty is not in the enum
	};

	return (
		<div className="p-5 mb-7 rounded-lg bg-gray-700">
			<div className="flex flex-wrap gap-4 mb-3">
				<span className="rounded-lg bg-cyan-700 p-2 text-center text-xs font-bold uppercase">
					{questionNumber}
				</span>
				<span
					className={`rounded-lg ${getDifficultyColor(
						quizQuestionData.difficulty,
					)} p-2 text-center text-xs font-bold uppercase`}
				>
					{quizQuestionData.difficulty}
				</span>
				<span className="rounded-lg bg-blue-500 p-2 text-center text-xs font-bold uppercase">
					{quizQuestionData.categoryName}
				</span>
			</div>
			<p className=" text-xl font-semibold">{quizQuestionData.question}</p>
			{quizQuestionData.allOptions.map((option) => (
				<RadioButton
					key={option}
					option={option}
					id={quizQuestionData.id}
					onChange={setSelectedOption}
					isChecked={selectedOption === option}
				/>
			))}
		</div>
	);
};

export default React.memo(QuizQuestion);
