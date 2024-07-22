export interface CheckboxProps {
	optionKey: string;
	optionValue: string;
	optionName: string;
	isChecked:boolean;
	onChange: (key: string, value: string) => void;
}
