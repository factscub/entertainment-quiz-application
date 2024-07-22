import { APIStatus, OnSubmitForm } from "@/types/types";

export interface QuizSubmitModalProps {
	closeModal: (value: boolean) => void;
	onSubmit: OnSubmitForm;
}
