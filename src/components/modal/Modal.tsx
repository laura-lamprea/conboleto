import React from "react";
import logo from "@/assets/images/logo-black.png";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

type ModalProps = {
	isOpen: boolean;
	handleClose: () => void;
	children: any;
};

const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
	return (
		<>
			{isOpen && (
				<div className="fixed h-full w-full -left-5 top-0 bg-slate-950 opacity-50 " />
			)}

			{isOpen && (
				<div
					id="default-modal"
					aria-hidden="true"
					className="fixed h-screen w-screen md:w-full left-0 right-0 md:-left-5 md:right-auto top-0 flex justify-center items-center z-50"
				>
					<div className="h-screen md:h-auto w-auto md:w-[410px] 2xl:w-[480px] flex flex-col pt-5 pb-2 2xl:pb-7 px-10 2xl:px-14  bg-white rounded-xl shadow border border-stone-300">
						<button
							type="button"
							className=" text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-700 rounded-lg text-sm w-5 h-5 self-end -mr-3 2xl:-mr-6"
							data-modal-hide="default-modal"
							onClick={handleClose}
						>
							<MdOutlineCancel style={{ fontSize: "30px" }} />
						</button>
						<Image
							src={logo}
							alt="Conboleto_logo"
							className="mb-1 mt-1 h-8 w-28 2xl:mb-4 2xl:mt-3 2xl:h-12 2xl:w-[190px] self-center"
							style={{ width: "auto" }}
						/>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
