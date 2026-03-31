"use client";

import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-neutral-900/50 px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-black tracking-widest text-white uppercase hover:text-neon-blue transition-colors">THE BEAR</Link>
                <button onClick={() => setIsOpen(true)} className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-neon-blue rounded-md">
                    <MenuIcon className="w-8 h-8 text-neon-blue" />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white p-2 focus:outline-none"
                        >
                            <X className="w-10 h-10 text-neon-orange" />
                        </button>
                        <div className="flex flex-col gap-12 text-center">
                            <Link href="/menu" onClick={() => setIsOpen(false)} className="text-5xl md:text-6xl font-black text-white hover:text-neon-blue transition-colors">MENÚ</Link>
                            <Link href="/#ubicacion" onClick={() => setIsOpen(false)} className="text-5xl md:text-6xl font-black text-white hover:text-neon-blue transition-colors">UBICACIÓN</Link>
                            <Link href="/reservas" onClick={() => setIsOpen(false)} className="text-5xl md:text-6xl font-black text-white hover:text-neon-orange transition-colors">RESERVAS</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
