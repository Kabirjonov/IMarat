import Navbar from "@/components/shared/Navbar";

const metadata = {
	title: "Login - Imarat development",
	description: "Login to your account on Imarat development",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
