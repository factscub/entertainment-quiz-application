"use client";
import { QuizSelectionProps } from "./types";
import Checkbox from "@/components/checkbox";
import { buildQueryString } from "@/utils/urlManipulation";
import LargeHeading from "@/components/LargeHeading";
import RedirectLink from "@/components/RedirectLink";
import useQuizSelection from "./useQuizSelection";

/**
 * Component for selecting quiz options.
 */
const QuizSelection: React.FC<QuizSelectionProps> = ({ quizSelectionData }) => {
	const { handleCheckboxChange, selectedQuizData } = useQuizSelection();

	return (
		<div className="p-5">
			<LargeHeading text="Please select the options" />
			{Object.entries(quizSelectionData).map(([category, options]) => (
				<div key={category}>
					<h1 className="capitalize text-lg font-bold tracking-widest">
						{category}
					</h1>
					<div className="my-4 grid gap-3 sm:grid-cols-3">
						{options.map(({ key, value }) => (
							<Checkbox
								key={key}
								optionKey={category}
								optionName={value}
								optionValue={key}
								onChange={handleCheckboxChange}
								isChecked={selectedQuizData[category]?.includes(key)}
							/>
						))}
					</div>
				</div>
			))}
			<div className="mt-6">
				<RedirectLink href="/" text="Go Home" />
				<RedirectLink
					href={`quiz-start/?${buildQueryString(selectedQuizData)}`}
					text="Start Quiz"
				/>
			</div>
		</div>
	);
};

export default QuizSelection;
