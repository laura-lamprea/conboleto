import Image from "next/image";
import about from "@/assets/images/about.png";
import logo from "@/assets/images/logo-white-full.png";

const About = () => {
	return (
		<div className="">
			<div className="relative w-full h-[300px] md:h-[580px] flex items-center justify-center">
				<Image className="h-full w-full" src={about} alt="Conboleto" />
				<div className="absolute w-full flex flex-col items-center">
					<Image className={"px-20 md:px-0"} src={logo} alt="Conboleto-logo" />
				</div>
			</div>

			<div className="px-[calc(20%)] py-10">
				<p className="w-60 h-[23px] text-zinc-800 text-base md:text-2xl font-bold">
					Acerca de nosotros
				</p>
				<p className="mb-6 mt-4 text-justify text-zinc-800 text-[15px] text-sm md:text-lg font-normal ">
					Somos una puerta abierta hacia experiencias inolvidables, un puente
					que conecta a los amantes de la música, el deporte, el entretenimiento
					y la cultura con los eventos que los hacen vibrar. Nuestra misión es
					clara: Facilitar y enriquecer la experiencia de nuestros clientes,
					brindándoles acceso eficiente y sin contratiempos a los eventos que
					más les apasionan.
                    <br/><br/>
                    En CONBOLETO, nuestros clientes son nuestra razón
					de ser. Desde el cliente final que busca su entrada para ese concierto
					o evento esperado, hasta los venues, promotores, clubs y organizadores
					de eventos que confían en nosotros para garantizar un proceso de venta
					y distribución eficiente. 
                    <br/><br/>
                    Con tecnología de vanguardia y un equipo
					altamente comprometido con una visión clara de la innovación CONBOLETO
					está listo para marcar la diferencia en la industria del boletaje. Te
					invitamos a explorar nuestro enfoque, nuestros servicios y nuestra
					pasión por crear experiencias memorables. Nuestra plataforma es una
					solución tecnológica que simplifica la organización de tu evento.
				</p>
			</div>
		</div>
	);
};

export default About;
