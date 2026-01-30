"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Performances", path: "/performances" },
        { name: "Members", path: "/members" },
        { name: "About Us", path: "/about" },
    ];

    const pathname = usePathname();

    return (
        <header className="backdrop-blur-md bg-black/60 border-b border-white/5 text-white sticky top-0 z-50">
            <div className="container-custom py-4">
                <div className="flex justify-between items-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`transition-all duration-300 text-sm uppercase tracking-wider ${
                                        isActive
                                            ? "text-[#ff3366] font-bold"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    
                    {/* Logo Section */}
                    <Link href="/" className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/20 hover:border-[#ff3366] transition-colors">
                        <Image 
                            src="/logo.svg" 
                            alt="DNA Logo" 
                            width={48}
                            height={48}
                            className="w-full h-full object-cover" 
                        />
                    </Link>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 animate-in fade-in slide-in-from-top duration-300">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 px-4 rounded-lg transition-all text-sm uppercase tracking-wider ${
                                        isActive
                                            ? "bg-[#ff3366] text-white font-bold"
                                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                )}
            </div>
        </header>
    );
}