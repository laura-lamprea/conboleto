import Link from "next/link";
import React from "react";

export const NavbarBottom = () => {
	return (
		<div className="flex items-center w-full h-10 xl:h-14 px-9 xl:px-16 space-x-10 bg-gradient-to-r from-rose-600 to-fuchsia-800">
             <Link href={"/popular"}>
                Popular
            </Link>
             <Link href={"/sports"}>
                Deportes
            </Link>
             {/* <Link href={"/theater"}>
                Teatro
            </Link>
             <Link href={"/concerts"}>
                Conciertos
            </Link> */}
        </div>
	);
};

export default NavbarBottom;
