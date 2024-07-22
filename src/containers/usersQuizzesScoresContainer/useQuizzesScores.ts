import { APIStatus, OnSubmitForm } from "@/types/types";
import { useCallback, useState } from "react";
import { UsersQuizzesScoresProps } from "./types";
import fetchApi from "@/utils/fetchApi";

/**
 * A custom hook to manage the state and logic for displaying and searching users' quiz scores.
 */
const useQuizzesScores = (
	usersQuizesScoresData: UsersQuizzesScoresProps["usersQuizesScoresData"],
) => {
	const [apiStatus, setApiStatus] = useState<APIStatus>("initial");
	const [searchResults, setSearchResults] = useState(usersQuizesScoresData);

	/**
	 * Handles the form submission for searching quiz scores by name.
	 */
	const onNameSubmitHandler = useCallback<OnSubmitForm>(
		async (event) => {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const name = formData.get("name") as string;
			if (name.trim()) {
				try {
					setApiStatus("loading");
					const url = `/users-quizzes-scores/api/?name=${name.trim()}`;
					const response = await fetchApi({ url });
					setSearchResults(response);
					setApiStatus("initial");
				} catch (error) {
					setApiStatus("error");
				}
			} else {
				setSearchResults(usersQuizesScoresData);
			}
		},
		[usersQuizesScoresData],
	);

	return { apiStatus, searchResults, onNameSubmitHandler };
};

export default useQuizzesScores;
