"use client";

import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-neutral-900/40 px-6 py-4 flex justify-between items-center transition-all">
                <Link href="/" className="group flex items-center">
                    <div
                        className="relative w-28 h-10 md:w-36 md:h-12 mix-blend-screen"
                        style={{ filter: "url(#true-neon-glow)" }}
                    >
                        <img
                            src="/logo-the-bear-icon.png"
                            alt="The Bear Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Link>

                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center gap-3 bg-[#111] border border-neutral-800 rounded-full pl-4 pr-2 py-1.5 hover:border-neon-blue/50 transition-all active:scale-95"
                >
                    <span className="text-[10px] font-black tracking-[0.2em] text-neutral-400 uppercase group-hover:text-white transition-colors">Menú</span>
                    <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                        <MenuIcon className="w-4 h-4 text-black stroke-3" />
                    </div>
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col p-6 overflow-hidden mt-1 md:mt-0"
                    >
                        <div className="flex justify-between items-center w-full">
                            <span className="text-sm font-black tracking-widest text-neutral-500 uppercase">Navegación</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neon-orange transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 md:gap-12 mt-16 md:mt-24">
                            {[
                                { name: "CARTA", href: "/menu" },
                                { name: "UBICACIÓN", href: "/#ubicacion" },
                                { name: "RESERVAS", href: "/reservas", highlight: true },
                            ].map((item) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-5xl md:text-8xl font-black tracking-tighter uppercase transition-all flex items-baseline gap-4 group ${item.highlight ? "text-neon-orange" : "text-white hover:text-neon-blue"
                                            }`}
                                    >
                                        <span className="text-xs font-mono text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">0{item.name === "CARTA" ? 1 : item.name === "UBICACIÓN" ? 2 : 3}</span>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-4 border-t border-neutral-900 pt-8 pb-12">
                            <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Redes Sociales</p>
                            <div className="flex gap-6">
                                <a href="#" className="text-white hover:text-neon-blue font-bold tracking-widest text-xs uppercase transition-colors">Instagram</a>
                                <a href="#" className="text-white hover:text-neon-blue font-bold tracking-widest text-xs uppercase transition-colors">TikTok</a>
                                <a href="#" className="text-white hover:text-neon-blue font-bold tracking-widest text-xs uppercase transition-colors">Facebook</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
