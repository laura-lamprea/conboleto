import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";

const DrawerButton = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleToggleDrawer = () => {
		setOpenDrawer((prevOpenDrawer) => !prevOpenDrawer);
	};

	return (
		<>
			<button
				onClick={handleToggleDrawer}
				className="block sm:hidden bg-transparent"
			>
				<CgMenuLeftAlt style={{ fontSize: "30px" }} />
			</button>
			{openDrawer && (
				<div className="fixed h-full w-full top-0 bg-slate-950 opacity-50 " />
			)}
			<div
				id="drawer-navigation"
				className={`fixed top-0 left-0 bottom-0 h-screen transform ${
					openDrawer ? "translate-x-0" : "-translate-x-full"
				} bg-white w-64 transition-transform ease-in-out duration-700`}
				aria-labelledby="drawer-navigation-label"
			>
				<div className="w-full h-[156px] flex items-center justify-center bg-slate-900 ">
					<button
						onClick={() => {}}
						className="w-[157px] h-12 my-8 bg-rose-600 rounded-lg  backdrop-blur-[31.80px]"
					>
						Iniciar sesión
					</button>
				</div>
				<div className="flex">
					<div className="flex flex-col justify-between h-screen w-full">
						<div className="flex flex-col p-5 space-y-2 text-gray-900 text-base font-semibold">
							<Link href={"/"} onClick={handleToggleDrawer}>
								Soporte
							</Link>
							<Link href={"/"} onClick={handleToggleDrawer}>
								Contáctanos
							</Link>
							<Link href={"/about"} onClick={handleToggleDrawer}>
								Acerca de nosotros
							</Link>
						</div>

						<div className="flex flex-col items-center p-5 mb-48">
							<p className=" text-gray-900 text-base font-semibold">
								¿Eres promotor?
							</p>
							<p className=" text-gray-900 text-sm">
								Crea tu evento con nosotros
							</p>
							<button
								onClick={() => {}}
								className="w-[157px] h-12 my-8 bg-black rounded-lg backdrop-blur-[31.80px]"
							>
								Crea tu evento
							</button>
						</div>
					</div>
					<button
						onClick={handleToggleDrawer}
						type="button"
						data-drawer-hide="drawer-navigation"
						aria-controls="drawer-navigation"
						className="text-gray-700 bg-transparent hover:text-gray-900 text-sm w-5 h-96 absolute end-0 inline-flex items-center justify-center"
					>
						<IoIosArrowBack style={{ fontSize: "25px" }} />
					</button>
				</div>
			</div>
		</>
	);
};

export default DrawerButton;
