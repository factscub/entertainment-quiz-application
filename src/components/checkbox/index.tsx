import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({
	optionKey,
	optionName,
	optionValue,
	onChange,
	isChecked,
}) => {
	return (
		<div
			role="button"
			className={`${
				isChecked ? "bg-blue-500" : ""
			} flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-500 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900`}
		>
			<label
				htmlFor={optionValue}
				className="flex items-center w-full px-3 py-2 cursor-pointer"
			>
				<div className="grid mr-3 place-items-center">
					<div className="inline-flex items-center">
						<label
							className="relative flex items-center p-0 rounded-full cursor-pointer"
							htmlFor={optionValue}
						>
							<input
								id={optionValue}
								type="checkbox"
								className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
								value={optionValue}
								onChange={() => onChange(optionKey, optionValue)}
							/>
							<span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3.5 w-3.5"
									viewBox="0 0 20 20"
									fill="currentColor"
									stroke="currentColor"
									strokeWidth="1"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									></path>
								</svg>
							</span>
						</label>
					</div>
				</div>
				<p className="capitalize block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
					{optionName}
				</p>
			</label>
		</div>
	);
};

export default Checkbox;
