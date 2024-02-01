import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CodeSentSchema } from "@/validations/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import SixDigitCodeInput from "../ui/code-input/SixDigitCodeInput";

type FormValues = {
	code: Array<any>;
	password: string;
	passwordConfirmation: string;
};

function CodeSentForm({ setLogin }: { setLogin: Function }) {
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(CodeSentSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log("data, ", data);
		const codeArray = data.code;
		console.log("codeArray:", codeArray);
		// const hasNumberInAllPositions = data.code.every((digit) => digit !== "");
	};

	return (
		<div className=" mx-auto flex flex-col items-center">
			<p className="text-center mt-10 text-zinc-800 text-[32px] font-bold font-['Public Sans'] leading-[48px]">
				Código enviado
			</p>
			<p className="px-10 text-center text-zinc-600 text-sm font-normal font-['Public Sans'] leading-snug">
				Hemos enviado un código de 6 digitos, ingresalo para reestablecer tu
				contraseña
			</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="w-[400px]">
					<SixDigitCodeInput register={register} />
					{errors.code?.message && (
						<p className="text-red-600 text-sm p-1">{errors.code?.message}</p>
					)}
					<div className="relative mt-6 inset-y-0 right-0 flex items-center text-sm leading-5">
						<input
							id="password"
							placeholder="Nueva contraseña"
							type={showPassword ? "text" : "password"}
							{...register("password")}
							className="w-full h-[54px]  px-3.5 py-4 text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center"
						/>
						<button
							onClick={() => setShowPassword(!showPassword)}
							type="button"
							className="absolute right-0 bg-transparent rounded-md text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">Show password</span>
							{showPassword ? (
								<AiFillEyeInvisible style={customStyles} />
							) : (
								<IoEyeSharp style={customStyles} />
							)}
						</button>
					</div>
					{errors.password?.message && (
						<p className="text-red-600 text-sm p-1">
							{errors.password?.message}
						</p>
					)}
					<div className="relative mt-6 inset-y-0 right-0 flex items-center text-sm leading-5">
						<input
							id="password-corfirmation"
							placeholder="Confirmar nueva contraseña"
							type={showPassword ? "text" : "password"}
							{...register("passwordConfirmation")}
							className="w-full h-[54px]  px-3.5 py-4 text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center"
						/>
						<button
							onClick={() => setShowPassword(!showPassword)}
							type="button"
							className="absolute right-0 bg-transparent rounded-md text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">Show password</span>
							{showPassword ? (
								<AiFillEyeInvisible style={customStyles} />
							) : (
								<IoEyeSharp style={customStyles} />
							)}
						</button>
					</div>
					{errors.passwordConfirmation?.message && (
						<p className="text-red-600 text-sm p-1">
							{errors.passwordConfirmation?.message}
						</p>
					)}
				</div>
				<button className="h-[52px] mt-6 w-full bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Actualizar password
				</button>
			</form>
			<button
				onClick={() => setLogin()}
				className="h-[22px] flex justify-center items-center my-6 text-gray-800 text-sm font-semibold font-['Public Sans'] leading-snug"
			>
				<MdKeyboardArrowLeft /> Regresar a iniciar sesión
			</button>
		</div>
	);
}

export default CodeSentForm;

const customStyles = {
	color: "#637381",
	height: "24px",
	width: "24px",
	margin: "8px",
};
