import { OnSubmitForm } from "@/types/types";

export type InputWithButtonProps = {
	buttonText: string;
	onSubmit: OnSubmitForm;
	required?: boolean;
	placeholder: string;
};
