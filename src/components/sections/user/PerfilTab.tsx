import { BiSolidCameraPlus } from "react-icons/bi";

const PerfilTab = () => {
	return (
		<div className="flex gap-6">
			<div className="h-[446px] w-[344px] flex flex-col justify-center items-center px-[85px] bg-white shadow-xl rounded-2xl border border-neutral-200">
				<div className="h-32 w-32 flex flex-col items-center justify-center text-sm bg-black opacity-50 rounded-full">
					<BiSolidCameraPlus style={{ fontSize: "40px" }} />
					Update photo
				</div>
				<p className="my-6 text-xs text-center text-slate-400">
					Allowed *.jpeg, *.jpg, *.png, *.gif Max size of 3.1 MB
				</p>
				<button className="h-9 w-[133px] bg-rose-50 text-sm font-bold text-red-700 rounded-lg border border-white border-opacity-30">
					Eliminar usuario
				</button>
			</div>
			<div className="h-[241px] w-[744px] px-14 py-6 bg-white shadow-xl rounded-2xl border border-neutral-200">
				<form>
					<div className="grid grid-cols-2 justify-around w-full gap-4">
						<div className="relative w-full">
							<input
								type="text"
								className="border w-full border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Nombre(s)
							</label>
						</div>
						<div className="relative w-full">
							<input
								type="text"
								className="border w-full border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Email
							</label>
						</div>
						<div className="relative mt-2 w-full">
							<input
								type="text"
								className="border w-full border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
							/>
							<label className="text-xs font-semibold px-1 pointer-events-none absolute left-3 -top-3 mb-0 origin-[0_0] truncate leading-[1.6] text-gray-500 bg-white">
								Teléfono
							</label>
						</div>
						<div className="relative mt-2 w-full">
							<input
								type="text"
								className="border w-full border-gray-400 border-opacity-20 h-[54px] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-slate-200 text-gray-600"
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