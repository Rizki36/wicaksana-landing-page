/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { useState, useEffect } from "react";

export default function Header() {
	const [isHomePage, setIsHomePage] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		// Check if we're on the homepage
		const path = window.location.pathname;
		setIsHomePage(path === "/" || path === "/index.html");

		// Optional: Update on client-side navigation if using a router
		const handleNavigation = () => {
			const path = window.location.pathname;
			setIsHomePage(path === "/" || path === "/index.html");
		};

		window.addEventListener("popstate", handleNavigation);
		return () => window.removeEventListener("popstate", handleNavigation);
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
			<nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
				<h2 className="text-2xl font-bold">
					<a href="/" className="flex items-center gap-2">
						<span className="text-orange-500">Wicaksana</span>
						<span className="text-slate-800">Tech</span>
					</a>
				</h2>

				<div className="internal-links hidden md:flex space-x-8">
					{isHomePage ? (
						<>
							<a
								href="#about"
								className="text-slate-700 hover:text-orange-500 transition-colors"
							>
								About
							</a>
							<a
								href="#services"
								className="text-slate-700 hover:text-orange-500 transition-colors"
							>
								Services
							</a>
							<a
								href="#why-us"
								className="text-slate-700 hover:text-orange-500 transition-colors"
							>
								Why Choose Us
							</a>
							<a
								href="#contact"
								className="text-slate-700 hover:text-orange-500 transition-colors"
							>
								Contact
							</a>
						</>
					) : null}
				</div>

				<div className="social-links hidden md:flex space-x-4">
					{/* Social links - same as before */}
					<a
						href="#"
						aria-label="LinkedIn"
						className="text-slate-600 hover:text-orange-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-5 h-5"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect width="4" height="12" x="2" y="9"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</a>
					{/* Other social links */}
				</div>

				<button
					type="button"
					className="md:hidden text-slate-700"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="4" x2="20" y1="12" y2="12"></line>
						<line x1="4" x2="20" y1="6" y2="6"></line>
						<line x1="4" x2="20" y1="18" y2="18"></line>
					</svg>
				</button>
			</nav>

			<div
				className={`md:hidden px-4 py-2 bg-white shadow-md ${isMobileMenuOpen ? "" : "hidden"}`}
			>
				<div className="flex flex-col space-y-3 pb-3">
					{isHomePage ? (
						<>
							<a href="#about" className="text-slate-700 hover:text-orange-500">
								About
							</a>
							<a
								href="#services"
								className="text-slate-700 hover:text-orange-500"
							>
								Services
							</a>
							<a
								href="#why-us"
								className="text-slate-700 hover:text-orange-500"
							>
								Why Choose Us
							</a>
							<a
								href="#contact"
								className="text-slate-700 hover:text-orange-500"
							>
								Contact
							</a>
						</>
					) : (
						<>
							<a href="/" className="text-slate-700 hover:text-orange-500">
								Home
							</a>
							<a href="/about" className="text-slate-700 hover:text-orange-500">
								About
							</a>
							<a
								href="/#services"
								className="text-slate-700 hover:text-orange-500"
							>
								Services
							</a>
							<a
								href="/#contact"
								className="text-slate-700 hover:text-orange-500"
							>
								Contact
							</a>
						</>
					)}
				</div>
			</div>
		</header>
	);
}
