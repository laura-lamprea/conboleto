import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChangePasswordtSchema } from "@/validations/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

type FormValues = {
	password: string;
	newpassword: string;
	passwordConfirmation: string;
};

function ChangePassword() {
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(ChangePasswordtSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log("data, ", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="w-[601px]">
				<div className="relative inset-y-0 right-0 flex items-center text-sm leading-5">
					<input
						id="password"
						placeholder="Contraseña"
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
					<p className="text-red-600 text-sm p-1">{errors.password?.message}</p>
				)}
				<div className="relative mt-6 inset-y-0 right-0 flex items-center text-sm leading-5">
					<input
						id="new-password"
						placeholder="Nueva contraseña"
						type={showPassword ? "text" : "password"}
						{...register("newpassword")}
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
				{errors.newpassword?.message && (
					<p className="text-red-600 text-sm p-1">
						{errors.newpassword?.message}
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
			<div className="flex justify-end">
				<button className="h-9 mt-[51px] w-[118px] text-sm font-bold bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Guardar
				</button>
			</div>
		</form>
	);
}

export default ChangePassword;

const customStyles = {
	color: "#637381",
	height: "24px",
	width: "24px",
	margin: "8px",
};
