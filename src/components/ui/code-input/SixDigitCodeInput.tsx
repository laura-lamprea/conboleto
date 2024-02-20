import React, { useState, useRef, ChangeEvent, useEffect } from "react";

const SixDigitCodeInput = ({ code, setCode }: { code: any; setCode: any }) => {
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
		} else if (event.key === "ArrowRight" || event.key === " ") {
			setFocusedIndex(index + 1);
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
			}
		}
	};

	useEffect(() => {
		if (inputRefs[focusedIndex] && inputRefs[focusedIndex].current) {
			inputRefs[focusedIndex].current?.focus();
		}
	}, [focusedIndex]);

	return (
		<div className="mt-5 2xl:mt-10 flex justify-between gap-2">
			{code.map((digit: any, index: number) => (
				<input
					key={index}
					onKeyDown={(e) => handleKeyDown(index, e)}
					ref={inputRefs[index]}
					type="text"
					placeholder="-"
					value={digit}
					// {...register(`code.${index}`)}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleChange(index, e.target.value)
					}
					onFocus={() => handleFocus(index)}
					maxLength={1}
					className='w-10 h-10 2xl:w-[54px] 2xl:h-[54px] rounded-lg border border-gray-400 border-opacity-20 text-center text-gray-800 text-xs 2xl:text-sm font-normal font-["Public Sans"] leading-snug'
				/>
			))}
		</div>
	);
};

export default SixDigitCodeInput;
