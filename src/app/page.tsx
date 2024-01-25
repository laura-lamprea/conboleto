import CarouselImg from "@/components/sections/carousel/CarouselImg";
import PopularEvents from "@/components/sections/popular-events/PopularEvents";
import SpectacularSection from "@/components/sections/spectacular/Spectacular";
import SportSection from "@/components/sections/sport-events/SportEvent";

export default function Home() {
	return (
		<main className="min-h-screen">
			<CarouselImg />
			<PopularEvents />
			<SpectacularSection />
			<SportSection />
		</main>
	);
}
