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
        { name: "About Us", path: "/about-us" },
    ];

    const pathname = usePathname();

    return (
        <header className="backdrop-blur-xl bg-black/90 border-b border-white/5 text-white sticky top-0 z-50">
            <div className="container-custom py-5">
                <div className="flex justify-between items-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-10">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`relative transition-all duration-300 text-sm uppercase tracking-[0.15em] font-medium ${
                                        isActive
                                            ? "text-[#00ff88]"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none hover:text-[#00ff88] transition-colors"
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
                    <Link href="/" className="w-12 h-12 bg-white/5 rounded-lg backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10 hover:border-[#00ff88] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]">
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
                    <nav className="md:hidden mt-6 pt-6 border-t border-white/10 space-y-2 animate-in fade-in slide-in-from-top duration-300">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-3 px-4 rounded-lg transition-all text-sm uppercase tracking-[0.15em] font-medium border ${
                                        isActive
                                            ? "bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white border-transparent"
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