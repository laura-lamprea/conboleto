import React, { useState, useRef, ChangeEvent, useEffect } from "react";

const SixDigitCodeInput = ({ register }: { register: any }) => {
	const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
	const [focusedIndex, setFocusedIndex] = useState<number>(0);
	const inputRefs = Array.from({ length: 6 }, () =>
		useRef<HTMLInputElement>(null)
	);

	const handleKeyDown = (
		index: number,
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.key === "Backspace" && index > 0 && code[index] === "") {
			setFocusedIndex(index - 1);
			// inputRefs[index + 1].current?.focus();
		}
	};

	const handleFocus = (index: number) => {
		setFocusedIndex(index);
	};

	const handleChange = (index: number, value: string) => {
		if (!isNaN(Number(value))) {
			const newCode = [...code];
			newCode[index] = value;
			setCode(newCode);
			if (index < 5 && value !== "") {
				setFocusedIndex(index + 1);
				// inputRefs[index + 1].current?.focus();
			}
		}
	};

	useEffect(() => {
		if (inputRefs[focusedIndex] && inputRefs[focusedIndex].current) {
			inputRefs[focusedIndex].current?.focus();
		}
	}, [focusedIndex]);

	return (
		<div className="mt-10 flex justify-between">
			{code.map((digit, index) => (
				<input
					key={index}
					ref={inputRefs[index]}
					{...register(`code.${index}`)}
					type="text"
					placeholder="-"
					value={digit}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleChange(index, e.target.value)
					}
					onKeyDown={(e) => handleKeyDown(index, e)}
					onFocus={() => handleFocus(index)}
					maxLength={1}
					className='w-[53.33px] h-[54px] rounded-lg border border-gray-400 border-opacity-20 text-center text-gray-800 text-sm font-normal font-["Public Sans"] leading-snug'
				/>
			))}
		</div>
	);
};

export default SixDigitCodeInput;
