import React from "react";
import passwordRemove from "@/assets/images/password-remove.png";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgotSchema } from "@/validations/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdKeyboardArrowLeft } from "react-icons/md";

type FormValues = {
	email: string;
};

function ForgotPasswordForm({ setLogin, setCode }: { setLogin: Function, setCode: Function }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(ForgotSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log("data", data);
		setCode();
	};

	return (
		<div className="flex flex-col items-center sm:w-[352px] mx-auto pr-0 sm:pr-6 2xl:pr-0">
			<Image src={passwordRemove} alt="password-remove" className="h-11 w-11 2xl:h-[96px] 2xl:w-[96px]" />
			<p className="text-center 2xl:mt-8 text-zinc-800 text-lg 2xl:text-2xl font-bold font-['Public Sans'] leading-[48px]">
				¿Olvidaste tu contraseña?
			</p>
			<p className="text-center text-zinc-600 text-xs 2xl:text-md font-normal font-['Public Sans'] leading-snug tracking-tight">
				Ingrese la dirección de correo electrónico asociada para restablecer tu contraseña.
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col mt-4 mb-6 w-[310px] mx-auto">
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
						className="w-full h-[54px] px-3.5 py-4 text-xs 2xl:text-sm text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center inline-flex"
					/>
					{errors.email?.message && (
						<p className="text-red-600 text-sm p-1">{errors.email?.message}</p>
					)}
				</div>
				<button className="h-10 2xl:h-[52px] text-sm 2xl:text-base w-full mt-3 bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Enviar código
				</button>
			</form>
			<button
				onClick={() => setLogin()}
				className="h-[22px] flex justify-center items-center my-6 text-gray-800 text-xs 2xl:text-sm font-semibold font-['Public Sans'] leading-snug"
			>
				<MdKeyboardArrowLeft /> Regresar a iniciar sesión
			</button>
		</div>
	);
}

export default ForgotPasswordForm;
