"use client";

import { useState } from "react";

export function Header() {
    const navItems = ["Home", "Performances", "Members", "About Us"];
    const [activePage, setActivePage] = useState("Home");

    return (
        <header className="backdrop-blur-md bg-black/40 text-white sticky top-0 z-50">
            <div className="mx-auto px-8 py-4">
                <div className="flex justify-between items-center">
                    <nav className="flex gap-15">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActivePage(item)}
                                className={`transition-colors text-lg ${
                                    activePage === item
                                        ? "text-white font-bold"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                    <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <span><img src="logo.svg" alt="" /></span>
                    </div>
                </div>
            </div>
        </header>
    );
}