import React from "react";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/shared/NavBar";
import Features from "@/components/Features";

function page() {
	return (
		<div>
			<NavBar />
			<HeroSection />
			<Features />
		</div>
	);
}

export default page;
