"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/images/logo.png";
import { IconSearch } from "../../../assets/figmaIcons";

export const NavbarTop = () => {
	return (
		<nav className="flex items-center justify-between h-24 px-4 py-6 bg-slate-900 w-full ">
			<div className="flex items-center">
				<Link href={"/"}>
					<Image src={logo} alt="conboleto_img" className="h-12" />
				</Link>
				{/* <div className="w-[410px] h-12 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]" /> */}
				<form>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							{/* <IconSearch/> */}
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden={true}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							className="w-[410px] h-12 bg-white p-4 ps-10 text-sm bg-opacity-10 rounded-lg border border-white border-opacity-30 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Buscar evento, artista o lugar"
							required
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									event.preventDefault();
									// Aquí puedes llamar a la función que maneja el envío del formulario
								}
							}}
						/>
					</div>
				</form>
			</div>

			<div className="hidden md:flex space-x-5">
				<button className="text-white text-base mx-5">Soporte</button>
				<button className="w-[157px] h-12 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Crea tu evento
				</button>
				<button className="w-[157px] h-12 bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Iniciar sesión
				</button>
			</div>
		</nav>
	);
};

export default NavbarTop;
