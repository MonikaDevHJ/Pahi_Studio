'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Pahi_Logo from "../../../public/assets/Pahi_Logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0F172A] text-white fixed w-full z-50 shadow-2xl    ">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Image
                            src={Pahi_Logo}
                            alt="Paahi Logo"
                            width={70}
                            height={70}
                            className="rounded-2xl"
                        />
                        <span className="text-lg font-bold">Paahi Productions</span>
                    </div>
                </Link>



                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Portfolio</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <Link href="#contact">
                        <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full transition">
                            Book a Shoot
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0F172A] px-6 py-4 space-y-4 shadow-lg">
                    <Link href="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
                    <Link href="#" onClick={() => setIsOpen(false)} className="block">About</Link>
                    <Link href="#" onClick={() => setIsOpen(false)} className="block">Portfolio</Link>
                    <Link href="#" onClick={() => setIsOpen(false)} className="block">Services</Link>
                    <Link href="#" onClick={() => setIsOpen(false)} className="block">Blog</Link>
                    <Link href="#" onClick={() => setIsOpen(false)} className="block">Contact</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="block">
                        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full transition">
                            Book a Shoot
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
