import React from "react";

const HeroSection = () => {
	return (
		<section  className="relative w-full h-screen bg-black">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-70"
				style={{
					backgroundImage: "url(https://dappunk.com/img/backgrounds/hero.jpg)", 
				}}
			/>

			{/* Overlay for darker effect */}
			<div className="absolute inset-0 bg-black opacity-60"/>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
				{/* Logo */}
			

				{/* Header Text */}
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
					GIVING AWAY YOUR <br /> CONTENT FOR FREE?
				</h1>

				{/* Call to Action */}
				<p className="mt-6 text-lg sm:text-xl">
					Join the waitlist to get early access!
				</p>

				{/* Input and Button */}
				<div className="mt-8 flex flex-col sm:flex-row items-center">
					<input
						type="email"
						placeholder="Enter your email address"
						className="px-4 py-3 w-64 rounded-md border-none text-black focus:ring-2 focus:ring-indigo-500 mb-4 sm:mb-0 sm:mr-4"
					/>
					<button type="button" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300">
						Join Waitlist
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
