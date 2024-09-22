"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import API_URL from "@/config";

export default function AIAssistantChat() {
	const router = useRouter();
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<
		{ role: "user" | "assistant"; content: string }[]
	>([]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			setMessages([...messages, { role: "user", content: input }]);

			// Fetch response from the backend
			try {
				const response = await fetch(`${API_URL}/chat`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ message: input }),
				});

				const data = await response.json();
				setMessages((prev) => [
					...prev,
					{ role: "assistant", content: data.reply },
				]);
			} catch (error) {
				console.error("Error:", error);
				setMessages((prev) => [
					...prev,
					{
						role: "assistant",
						content: "Oops! Something went wrong. Please try again later.",
					},
				]);
			}

			setInput("");
		}
	};

	return (
		<div className="flex flex-col md:flex-row h-screen bg-black text-white">
			{/* Left side with image and intro */}
			<div className="md:w-1/2 p-8 flex flex-col justify-center items-start bg-[url('https://dappunk.com/img/pages/features/5/bg.jpg')] bg-cover bg-center">
				<h1 className="text-5xl font-bold mb-4">HI, MY NAME IS PUNKSTER</h1>
				<p className="text-2xl mb-8">I AM HAPPY TO ASSIST YOU</p>
			</div>

			{/* Right side with chat interface */}
			<div className="md:w-1/2 p-8 flex flex-col">
				<Card className="flex-grow bg-gray-900 border-gray-800 overflow-hidden">
					<CardContent className="p-0 flex flex-col h-full">
						<ScrollArea className="flex-grow p-4">
							{messages.map((message, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className={`mb-4 ${
										message.role === "user" ? "text-right" : "text-left"
									}`}
								>
									<span
										className={`inline-block p-2 rounded-lg ${
											message.role === "user" ? "bg-blue-600" : "bg-gray-700"
										}`}
									>
										{message.content}
									</span>
								</div>
							))}
						</ScrollArea>
						<form onSubmit={handleSubmit} className="p-4 bg-gray-800">
							<div className="flex items-center">
								<Input
									type="text"
									placeholder="Ask Punkster anything..."
									value={input}
									onChange={(e) => setInput(e.target.value)}
									className="flex-grow mr-2 bg-gray-700 border-gray-600 text-white"
								/>
								<Button
									type="submit"
									size="icon"
									className="bg-purple-600 hover:bg-purple-700"
								>
									<SendIcon className="h-4 w-4" />
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>

			{/* Close button */}
			<button
				type="button"
				onClick={() => router.push("/")}
				className="absolute top-4 right-4 text-white"
				aria-label="Close"
			>
				<XIcon className="h-6 w-6" />
			</button>
		</div>
	);
}
