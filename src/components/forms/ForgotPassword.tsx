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
		<div className=" mx-auto flex flex-col items-center">
			<Image src={passwordRemove} alt="password-remove" />
			<p className="text-center mt-10 text-zinc-800 text-[32px] font-bold font-['Public Sans'] leading-[48px]">
				¿Olvidaste tu contraseña?
			</p>

			<p className="px-10 text-center text-zinc-600 text-sm font-normal font-['Public Sans'] leading-snug">
				Ingrese la dirección de correo electrónico asociada para restablecer tu
				contraseña.
			</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col w-[400px] mt-4 mb-6">
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
						className=" h-[54px] px-3.5 py-4 text-gray-800 rounded-lg border border-gray-400 border-opacity-20 justify-center items-center inline-flex"
					/>
					{errors.email?.message && (
						<p className="text-red-600 text-sm p-1">{errors.email?.message}</p>
					)}
				</div>
				<button className="h-[52px] w-full bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Enviar código
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

export default ForgotPasswordForm;
