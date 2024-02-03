"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoEyeSharp } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/Schemas";

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = ({ setForgot }: { setForgot: Function }) => {
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
		<div className="w-[310px] sm:w-[352px] mx-auto">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="text-gray-500 text-xs font-semibold "
					>
						Correo
					</label>
					<input
						id="email"
						type="email"
						{...register("email")}
						className="w-full h-[54px] px-3.5 py-4 text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center inline-flex"
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
							id="password"
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
				</div>
				<button
					onClick={() => setForgot()}
					className="w-full h-[22px] my-4 text-right text-gray-800 text-sm font-normal font-['Public Sans'] underline leading-snug"
				>
					¿Olvidaste tu contraseña?
				</button>
				{/* <div className="w-[352px] h-[22px] my-4 text-right text-gray-800 text-sm font-normal font-['Public Sans'] underline leading-snug">
					<Link href={"/"}>¿Olvidaste tu contraseña?</Link>
				</div> */}
				<button className="h-[52px] w-full bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Login
				</button>
				<div className="inline-flex items-center my-8 justify-center w-full bg-slate-500 ">
					<hr className="w-full h-px bg-gray-200 border-0 "></hr>
					<span className="absolute px-3 font-medium text-gray-900 bg-white">
						or
					</span>
				</div>
				<div className="flex justify-center space-x-3">
					<button className="w-[39px] h-[39px] rounded-[19.50px] border border-slate-800 flex items-center justify-center">
						<FcGoogle style={customIcon} />
					</button>
					<button className="w-[39px] h-[39px] rounded-[19.50px] border border-slate-800 flex items-center justify-center">
						<TbMailFilled style={customIcon} />
					</button>
				</div>
			</form>
		</div>
	);
};
export default LoginForm;

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
