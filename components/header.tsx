"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    // Define items with their display names and paths
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Performances", path: "/performances" },
        { name: "Members", path: "/members" },
        { name: "About Us", path: "/about" },
    ];

    const pathname = usePathname();

    return (
        <header className="backdrop-blur-md bg-black/40 text-white sticky top-0 z-50">
            <div className="mx-auto px-8 py-4">
                <div className="flex justify-between items-center">
                    <nav className="flex gap-15">
                        {navItems.map((item) => {
                            // Check if the current path matches the item's path
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`transition-colors text-lg ${
                                        isActive
                                            ? "text-white font-bold"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                    
                    {/* Logo Section */}
                    <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center overflow-hidden">
                        <img src="/logo.svg" alt="DNA Logo" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}