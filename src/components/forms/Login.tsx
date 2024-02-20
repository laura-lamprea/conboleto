"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoEyeSharp } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/Schemas";
import { useFormState, useFormStatus } from "react-dom";
// import { authenticate } from "@/actions";
import { signIn } from "next-auth/react";

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = ({ setForgot }: { setForgot: Function }) => {
	// const [state, dispatch] = useFormState(authenticate, undefined);

	// console.log({ state });

	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	return (
		<div className="w-[310px] sm:w-[352px] mx-auto pr-0 sm:pr-6 2xl:pr-0">
			<form>
				{/* <form action={dispatch}> */}
				<div className="mb-2 2xl:mb-5">
					<label
						htmlFor="email"
						className="text-gray-500 text-xs font-semibold "
					>
						Correo
					</label>
					<input
						id="email"
						type="email"
						autoComplete="username"
						{...register("email")}
						className="w-full h-[54px] px-3.5 py-4 text-xs 2xl:text-sm text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center inline-flex"
					/>
					{errors.email?.message && (
						<p className="text-red-600 text-sm p-1">{errors.email?.message}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="username-success"
						className="text-gray-500 text-xs font-semibold "
					>
						Contraseña
					</label>
					<div className="relative inset-y-0 right-0 flex items-center text-sm leading-5">
						<input
							id="current-password"
							autoComplete="current-password"
							type={showPassword ? "text" : "password"}
							{...register("password")}
							className="w-full h-[54px] px-3.5 py-4 text-xs 2xl:text-sm text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center"
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
					{/* {state === "Invalid credentials" && (
						<p className="text-red-600 text-sm p-1">
							Credenciales no son correctas
						</p>
					)} */}
				</div>
				<button
					onClick={() => setForgot()}
					className="w-full h-[22px] my-2 2xl:my-4 text-right text-gray-800 text-xs 2xl:text-sm font-normal font-['Public Sans'] underline leading-snug"
				>
					¿Olvidaste tu contraseña?
				</button>
				<LoginButton />
			</form>
			{/* login with Google */}
			<div className="inline-flex items-center my-5 2xl:my-8 justify-center w-full bg-slate-500 ">
				<hr className="w-full h-px bg-gray-200 border-0 "></hr>
				<span className="absolute px-3 text-xs lg:text-sm font-medium text-gray-900 bg-white">
					or
				</span>
			</div>
			<div className="flex justify-center space-x-3 mb-2">
				<button
					onClick={() => signIn()}
					className="w-[39px] h-[39px] rounded-[19.50px] border border-slate-800 flex items-center justify-center"
				>
					<FcGoogle style={customIcon} />
				</button>
				<button className="w-[39px] h-[39px] rounded-[19.50px] border border-slate-800 flex items-center justify-center">
					<TbMailFilled style={customIcon} />
				</button>
			</div>
		</div>
	);
};
export default LoginForm;

function LoginButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className={`h-10 2xl:h-[52px] text-sm 2xl:text-base w-full ${
				pending ? "bg-gray-400" : " bg-rose-600"
			}  rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]`}
		>
			Login
		</button>
	);
}

const customStyles = {
	color: "#637381",
	height: "24px",
	width: "24px",
	margin: "8px",
};

const customIcon = {
	fontSize: "22px",
	color: "#DE1A61",
};
