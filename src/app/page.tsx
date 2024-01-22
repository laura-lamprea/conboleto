import CarouselImg from "@/components/sections/carousel/CarouselImg";
import Navbar from "../components/ui/navbar/Navbar";
import PopularEvents from "@/components/sections/popular-events/PopularEvents";
import SpectacularSection from "@/components/sections/spectacular/Spectacular";
import SportSection from "@/components/sections/sport-events/SportEvent";
import Footer from "@/components/ui/footer/Footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />

			<CarouselImg />
			<PopularEvents />
			<SpectacularSection />
			<SportSection />

			<Footer />
		</main>
	);
}
