"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import LoginButton from "@/components/ui/button/LoginButton";
import DrawerButton from "@/components/ui/button/DrawerButton";
import { useSession } from "next-auth/react";
import { getInitials } from "@/utils/getInitials";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { eventsSpectacular } from "@/mocks/events";

export const NavbarTop = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const [value, setValue] = useState<string>("");
	const [filteredData, setFilteredData] = useState(eventsSpectacular);

	useEffect(() => {
		const filtered = eventsSpectacular.filter((event) =>
			event.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredData(filtered);
	}, [value]);

	const handleItemClick = () => {
		setValue("");
	};

	return (
		<nav className="flex items-center justify-between h-[42px] sm:h-[74px] xl:h-24 px-4 py-6 bg-slate-900 w-full ">
			<DrawerButton />
			<div className="flex items-center">
				<Link href={"/"}>
					<Image
						src={logo}
						alt="conboleto_img"
						className="h-5 sm:h-11 md:h-12 w-auto"
						style={{ width: "auto" }}
					/>
				</Link>

				<div className="relative hidden md:block" data-te-input-wrapper-init>
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<IoSearchOutline />
					</div>
					<input
						type="search"
						id="default-search"
						value={value}
						className="md:w-[350px] xl:w-[410px] h-12 bg-white p-4 ps-10 text-sm bg-opacity-10 rounded-lg border border-white border-opacity-30 focus:ring-blue-500 focus:border-blue-5000"
						placeholder="Buscar evento, artista o lugar"
						required
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								event.preventDefault();
							}
						}}
						onChange={(e) => setValue(e.target.value)}
					/>
					{filteredData.length > 0 && value !== "" ? (
						<ul className="absolute mt-2 border border-gray-300 rounded-xl shadow-sm bg-white w-full">
							{filteredData.map((item, index) => (
								<Link href={`/${item.id}`} key={index}>
									<li
										onClick={() => handleItemClick()}
										className="p-2 xl:p-4 cursor-pointer hover:bg-gray-100 hover:rounded-xl"
									>
										<div className="flex">
											<Image
												alt={item.name}
												src={item.src}
												className="h-14 w-20 xl:w-[112px] xl:h-[74.7px] rounded-xl"
											/>
											<div className="flex flex-col text-black px-3">
												<p className="text-sm xl:text-lg font-bold">{item.name}</p>
												<p className="text-xs xl:text-sm">{item.date}</p>
												<p className="text-xs xl:text-sm">{item.place}</p>
											</div>
										</div>
									</li>
								</Link>
							))}
						</ul>
					) : filteredData.length === 0 && value.length >= 1 ? (
						<ul className="absolute mt-2 border border-gray-300 rounded-xl shadow-sm bg-white w-full">
							<li className="p-4 text-black">
								<div>
									<p className="text-sm md:text-lg font-bold">
										No se han encontrado resultados
									</p>
									<p className="text-xs xl:text-sm">Intenta con otra búsqueda</p>
								</div>
							</li>
						</ul>
					) : null}
				</div>
			</div>

			<div className="hidden sm:flex space-x-5">
				<button className="hidden lg:inline-block text-white text-base mx-5">
					Soporte
				</button>
				<button className="hidden lg:inline-block w-[157px] h-12 my-8 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Crea tu evento
				</button>
				{session?.user ? (
					<>
						<button
							onClick={() => router.push("/user")}
							className="hidden sm:block my-9 bg-rose-600 h-10 w-10  rounded-full font-bold items-center justify-center text-base"
						>
							{getInitials(session?.user?.name || "AA")}
						</button>
						<button
							onClick={() => signOut()}
							className="w-[157px] h-12 my-8 bg-rose-600 rounded-lg border border-opacity-30 backdrop-blur-[31.80px]"
						>
							Logout
						</button>
					</>
				) : (
					<LoginButton styleButtom="hidden sm:block w-[157px] h-12 my-8 bg-rose-600 rounded-lg border border-opacity-30 backdrop-blur-[31.80px]" />
				)}
			</div>

			<div className="block sm:hidden">
				<IoSearchOutline />
			</div>
		</nav>
	);
};

export default NavbarTop;
