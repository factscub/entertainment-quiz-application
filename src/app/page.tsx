import LargeHeading from "@/components/LargeHeading";
import RedirectLink from "@/components/RedirectLink";

export default function Home() {
	return (
		<div className="flex justify-center items-center min-h-screen text-center">
			<div className="bg-gray-700 flex flex-col border p-10 rounded-lg space-y-28">
				<LargeHeading text="WELCOME GENIUS 💖" />
				<div className="flex flex-col">
					<RedirectLink
						text="Quiz Selection"
						href="/quiz-selection"
						classes="w-auto"
					/>
					<RedirectLink
						text="All Users Quizzes"
						href="/users-quizzes-scores"
						classes="w-auto"
					/>
				</div>
			</div>
		</div>
	);
}
