import React, { useState } from "react";
import LoginForm from "@/components/forms/Login";
import Modal from "@/components/modal/Modal";
import RegisterForm from "@/components/forms/Register";
import ForgotPasswordForm from "@/components/forms/ForgotPassword";
import CodeSentForm from "@/components/forms/CodeSent";

const LoginButtonNavbar = () => {
	const [openModal, setOpenModal] = useState<string | null>(null);

	const handleOpenModal = (modalName: string | null): void => {
		setOpenModal(modalName);
	};

	const handleClose = () => {
		setOpenModal(null);
	};

	return (
		<>
			<button
				data-modal-target="default-modal"
				data-modal-toggle="default-modal"
				type="button"
				onClick={() => handleOpenModal("login")}
				className="hidden sm:block w-[157px] h-12 my-8 bg-rose-600 rounded-lg border border-opacity-30 backdrop-blur-[31.80px]"
			>
				Iniciar sesión
			</button>

			{openModal === "login" && (
				<Modal isOpen={true} handleClose={handleClose}>
					<div className="w-full px-16 pb-7">
						<p className="text-gray-800 text-2xl font-bold leading-9">
							Inicia sesión
						</p>
						<div className="text-gray-800 text-sm font-normal font-['Public Sans'] leading-snug">
							<span>¿No tienes cuenta aún? </span>
							<button
								data-modal-target="default-modal"
								data-modal-toggle="default-modal"
								type="button"
								onClick={() => {
									handleClose();
									handleOpenModal("register");
								}}
								className="bg-transparent text-right text-rose-600 text-sm font-semibold font-['Public Sans'] leading-snug"
							>
								Regístrate
							</button>
						</div>
					</div>
					<LoginForm setForgot={() => handleOpenModal("forgotPassword")} />
				</Modal>
			)}

			{openModal === "register" && (
				<Modal isOpen={true} handleClose={handleClose}>
					<div className="w-full px-16 pb-7">
						<p className="text-gray-800 text-2xl font-bold leading-9">
							Regístrate
						</p>
						<div className="text-gray-800 text-sm font-normal font-['Public Sans'] leading-snug">
							<span>¿Ya tienes una cuenta? </span>
							<button
								data-modal-target="default-modal"
								data-modal-toggle="default-modal"
								type="button"
								onClick={() => {
									handleClose();
									handleOpenModal("login");
								}}
								className="bg-transparent text-right text-rose-600 text-sm font-semibold font-['Public Sans'] leading-snug"
							>
								Inicia sesión
							</button>
						</div>
					</div>
					<RegisterForm />
				</Modal>
			)}

			{openModal === "forgotPassword" && (
				<Modal isOpen={true} handleClose={handleClose}>
					<ForgotPasswordForm
						setLogin={() => handleOpenModal("login")}
						setCode={() => handleOpenModal("codeSent")}
					/>
				</Modal>
			)}

			{openModal === "codeSent" && (
				<Modal isOpen={true} handleClose={handleClose}>
					<CodeSentForm
						setLogin={() => handleOpenModal("login")}
					/>
				</Modal>
			)}
		</>
	);
};

export default LoginButtonNavbar;
