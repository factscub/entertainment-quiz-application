import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Quiz App",
	description: "Quiz application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-cyan-700">
				<main className="flex flex-col items-center justify-between mx-5">
					{children}
				</main>
			</body>
		</html>
	);
}
