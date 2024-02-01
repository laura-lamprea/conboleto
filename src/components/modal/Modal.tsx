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
					className="fixed h-full w-full -left-5 top-0 flex justify-center items-center p-14"
				>
					{/* h-[800px] */}
					<div className="h-auto w-[480px] flex flex-col pt-5 pb-10 bg-white rounded-xl shadow border border-stone-300">
						<button
							type="button"
							className=" text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-700 rounded-lg text-sm w-5 h-5 self-end mr-6 mt-0"
							data-modal-hide="default-modal"
							onClick={handleClose}
						>
							<MdOutlineCancel style={{ fontSize: "30px" }} />
						</button>
						<Image
							src={logo}
							alt="Conboleto_logo"
							className="mb-4 mt-3 self-center"
						/>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
