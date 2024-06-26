import { BiSolidCameraPlus } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const PerfilTab = () => {
	const { data: session } = useSession();

	return (
		<div className="flex flex-col md:flex-row gap-6">
			<div className="h-[380px] xl:h-[446px] w-[300px] md:w-[280px] xl:w-[344px] flex flex-col justify-center items-center px-[85px] bg-white shadow-xl rounded-2xl border border-neutral-200">
				<button className="relative hover:">
					{session?.user?.picture ? (
						<Image
							src={session?.user?.picture}
							alt="user"
							width={128}
							height={128}
							className="rounded-full"
						/>
					) : (
						<FaUserCircle style={{ fontSize: "130px", color: "#DE1A61" }} />
					)}
					<div className="overlay absolute inset-0 bg-black bg-opacity-50 rounded-full h-32 w-32 flex flex-col items-center justify-center text-sm transition duration-300 opacity-0 hover:opacity-100">
						<BiSolidCameraPlus style={{ fontSize: "40px" }} />
						Update photo
					</div>
				</button>
				<p className="my-6 text-xs text-center text-slate-400">
					Allowed *.jpeg, *.jpg, *.png, *.gif Max size of 3.1 MB
				</p>
				<button className="h-9 w-[133px] bg-rose-50 text-sm font-bold text-red-700 rounded-lg border border-white border-opacity-30">
					Eliminar usuario
				</button>
			</div>
			<div className="h-[380px] lg:h-[241px] w-[300px] lg:w-[500px] xl:w-[744px] px-5 lg:px-14 py-6 bg-white shadow-xl rounded-2xl border border-neutral-200">
				<form>
					<div className="grid grid-cols-1 lg:grid-cols-2 justify-around w-full gap-4">
						<div className="relative w-full">
							<input
								type="text"
								className="border w-full text-xs border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Nombre(s)
							</label>
						</div>
						<div className="relative w-full">
							<input
								type="text"
								className="border w-full text-xs border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Email
							</label>
						</div>
						<div className="relative mt-2 w-full">
							<input
								type="text"
								className="border w-full text-xs border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Teléfono
							</label>
						</div>
						<div className="relative mt-2 w-full">
							<input
								type="text"
								className="border w-full text-xs border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Dirección
							</label>
						</div>
					</div>
					<div></div>
					<div className="flex justify-end mt-6">
						<button className="h-9 w-20 text-sm bg-rose-600 rounded-lg border border-white border-opacity-30">
							Guardar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PerfilTab;
