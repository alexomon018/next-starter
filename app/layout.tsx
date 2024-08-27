import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@utils";
import { ThemeProvider } from "../providers/themeProvider";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans"
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

export const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body
			className={cn(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable
			)}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</body>
	</html>
);
