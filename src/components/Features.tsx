import type React from "react";
import Image from "next/image";
import Link from "next/link";

const Features: React.FC = () => {
	return (
		<section id='features' className="relative z-10 bg-black py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
					{/* Vertical 'FEATURES' Label */}
					<div className="relative hidden lg:block col-span-1">
						<h2 className="absolute left-0 top-10 text-white text-6xl font-bold rotate-90 origin-top-left">
							FEATURES
						</h2>
					</div>

					{/* Grid of Features */}
					<div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
						{/* Feature 1 */}
						<div className="relative rounded-lg overflow-hidden bg-black text-white aspect-square">
							<Image
								src="https://dappunk.com/img/backgrounds/features/channels.jpg"
								alt="Public or Paid Channels"
								layout="fill"
								objectFit="cover"
							/>
							<div className="absolute bottom-4 left-4">
								<h3 className="text-lg font-bold">Public or Paid Channels</h3>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="relative rounded-lg overflow-hidden bg-black text-white aspect-square">
							<Image
								src="https://dappunk.com/img/backgrounds/features/messenger.jpg"
								alt="Private Messenger"
								layout="fill"
								objectFit="cover"
							/>
							<div className="absolute bottom-4 left-4">
								<h3 className="text-lg font-bold">Private Messenger</h3>
							</div>
						</div>

						{/* Feature 3 */}
						<Link
							href={"/features/ai-art-generators"}
							className="relative rounded-lg overflow-hidden bg-black text-white aspect-square"
						>
							<Image
								src="https://dappunk.com/img/backgrounds/features/ai-art.jpg"
								alt="AI Art Generators"
								layout="fill"
								objectFit="cover"
							/>
							<div className="absolute bottom-4 left-4">
								<h3 className="text-lg font-bold">AI Art Generators</h3>
							</div>
						</Link>

						{/* Feature 4 */}
						<Link href={"/features/stealth-mode"}>
							<div className="relative rounded-lg overflow-hidden bg-black text-white aspect-square">
								<Image
									src="https://dappunk.com/img/backgrounds/features/stealth_pixelated.jpg"
									alt="Stealth Mode / Pixelated Preview"
									layout="fill"
									objectFit="cover"
								/>
								<div className="absolute bottom-4 left-4">
									<h3 className="text-lg font-bold">
										Stealth Mode / Pixelated Preview
									</h3>
								</div>
							</div>
						</Link>

						{/* Feature 5 */}
						<Link href={"features/assistant"}>
							<div className="relative col-span-2 rounded-lg overflow-hidden bg-black text-white aspect-[16/9]">
								<Image
									src="https://dappunk.com/img/backgrounds/features/pa.jpg"
									alt="Punkster Personal Assistant"
									layout="fill"
									objectFit="cover"
								/>
								<div className="absolute bottom-4 left-4">
									<h3 className="text-lg font-bold">
										Punkster Personal Assistant
									</h3>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
