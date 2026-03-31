"use client";

import { useState } from "react";
import { menuCategories, menuData } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import Location from "./Location";
import Link from "next/link";
import {
    Utensils, Fish, Flame, Shell, MenuSquare, ChefHat, Coffee, Wine, Sparkles, Soup, ArrowLeft, Star, GlassWater, ChevronDown
} from "lucide-react";

const getCategoryIcon = (cat: string) => {
    switch (cat) {
        case "ESPECIALIDADES": return <Star className="w-4 h-4" />;
        case "ENTRADAS": return <Utensils className="w-4 h-4" />;
        case "CEVICHES": return <Fish className="w-4 h-4" />;
        case "ARROCES": return <Utensils className="w-4 h-4" />;
        case "CHICHARRONES": return <Sparkles className="w-4 h-4" />;
        case "SOPAS": return <Soup className="w-4 h-4" />;
        case "CHUPES": return <Soup className="w-4 h-4" />;
        case "SUDADOS": return <Flame className="w-4 h-4" />;
        case "PARIGUELAS": return <Shell className="w-4 h-4" />;
        case "COMBOS MARINOS": return <MenuSquare className="w-4 h-4" />;
        case "TRIOS MARINOS": return <MenuSquare className="w-4 h-4" />;
        case "PLATOS DESTACADOS THE BEAR": return <ChefHat className="w-4 h-4" />;
        case "PORCIONES": return <Coffee className="w-4 h-4" />;
        case "BEBIDAS": return <GlassWater className="w-4 h-4" />;
        case "CERVEZAS": return <Wine className="w-4 h-4" />;
        default: return <Utensils className="w-4 h-4" />;
    }
};

export default function DigitalMenu() {
    const [activeCategory, setActiveCategory] = useState<string>("ESPECIALIDADES");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const items = menuData.filter((i) => i.category === activeCategory);

    return (
        <section id="menu-digital" className="w-full min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col relative font-sans">

            {/* Textura de ruido ligera para ambientación brutalista */}
            <div
                className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.05]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
            />

            <div className="w-full relative z-10 flex-grow">

                {/* Encabezado Imponente */}
                <div className="pt-28 pb-8 px-6 text-center border-b border-neutral-900/50 relative overflow-hidden flex flex-col items-center">

                    {/* Botón de Retroceso a Home */}
                    <Link href="/" className="group absolute top-28 left-6 md:left-12 flex items-center gap-2 text-neutral-500 hover:text-[#00f2ff] transition-colors font-mono text-xs tracking-widest uppercase z-20">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="hidden md:inline">Inicio</span>
                    </Link>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-[#00f2ff]/5 blur-[100px] pointer-events-none rounded-full" />

                    <h2 className="text-[10px] sm:text-xs font-mono tracking-[0.4em] text-neutral-500 uppercase mb-4 relative z-10 mt-6 md:mt-0">
                        Menú Digital de Lujo
                    </h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#eaeaea] relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                        NUESTRA CARTA
                    </h3>
                </div>

                {/* Ciberpunk Tabs (Desktop Wrap) */}
                <div className="hidden md:block sticky top-[72px] bg-[#0a0a0a]/95 backdrop-blur-xl z-40 border-b border-neutral-900 shadow-2xl overflow-visible">
                    <div className="flex flex-wrap hide-scrollbar gap-x-5 gap-y-3 px-6 py-4 justify-center w-full max-w-6xl mx-auto items-center">
                        {menuCategories.map((cat) => {
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        window.scrollTo({ top: 150, behavior: "smooth" });
                                    }}
                                    className={`shrink-0 flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase transition-all duration-300 relative pb-1 focus:outline-none ${isActive
                                        ? "text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]"
                                        : "text-neutral-500 hover:text-white"
                                        }`}
                                >
                                    <span className="opacity-80 align-middle mb-[1px]">{getCategoryIcon(cat)}</span>
                                    {cat}
                                    {/* Línea Subrayado Neón */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underlineMenu"
                                            className="absolute left-0 right-0 bottom-[-8px] h-[2px] bg-[#00f2ff] shadow-[0_0_10px_#00f2ff]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Dropdown (Selector) */}
                <div className="md:hidden sticky top-[72px] bg-[#0a0a0a]/95 backdrop-blur-xl z-40 border-b border-neutral-900/80 shadow-2xl p-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-full flex items-center justify-between bg-[#111] border border-[#00f2ff]/30 text-[#00f2ff] font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-3 rounded-lg shadow-[0_0_15px_rgba(0,242,255,0.05)] focus:outline-none focus:border-[#00f2ff]/80 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <span className="opacity-80 drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">{getCategoryIcon(activeCategory)}</span>
                            <span className="translate-y-[1px]">{activeCategory}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180 text-neon-blue" : "text-neutral-500"}`} />
                    </button>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col gap-1 mt-4 max-h-[60vh] overflow-y-auto hide-scrollbar border border-neutral-900 rounded-lg p-2 bg-[#050505]/90">
                                    {menuCategories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setActiveCategory(cat);
                                                setIsMobileMenuOpen(false);
                                                window.scrollTo({ top: 250, behavior: "smooth" });
                                            }}
                                            className={`w-full text-left font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-3 rounded transition-colors flex items-center gap-3 ${activeCategory === cat
                                                ? "bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                                                : "text-neutral-500 hover:bg-[#111] hover:text-white"
                                                }`}
                                        >
                                            <span className={`opacity-80 scale-90 ${activeCategory === cat ? 'drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]' : ''}`}>
                                                {getCategoryIcon(cat)}
                                            </span>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* CONTENIDO LISTA (El Cambio Clave) */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 mb-20 min-h-[50vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                                {items.map((item) => {
                                    const isExclusive = item.title.toUpperCase().includes("THE BEAR");

                                    return (
                                        <div key={item.id} className="flex flex-col w-full group">
                                            {/* Fila: Nombre [dots] Precio */}
                                            <div className="flex items-baseline w-full justify-between mb-2">

                                                {/* Izquierda: Nombre y Badge */}
                                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 shrink-0 max-w-[70%]">
                                                    <h4 className="font-bold text-lg md:text-2xl text-[#f5f5f5] uppercase tracking-[-0.03em] transition-colors group-hover:text-white">
                                                        {item.title}
                                                    </h4>

                                                    {isExclusive && (
                                                        <span className="text-[#00f2ff] font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] border border-[#00f2ff]/30 px-2 py-0.5 rounded-sm drop-shadow-[0_0_5px_rgba(0,242,255,0.4)]">
                                                            [ EXCLUSIVO ]
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Centro: Línea Dotted Finísima */}
                                                <div className="flex-grow border-b-[2px] border-dotted border-neutral-800 mx-4 opacity-70 group-hover:border-[#00f2ff]/40 transition-colors" />

                                                {/* Derecha: Precio Vibrante */}
                                                <span className="font-black text-xl md:text-3xl text-neon-orange shrink-0 transform-gpu group-hover:scale-105 transition-transform origin-right">
                                                    <span className="text-[10px] md:text-sm font-mono opacity-50 mr-1 text-white">S/</span>{item.price}
                                                </span>
                                            </div>

                                            {/* Abajo: Descripción Grisácea Espaciada */}
                                            {item.description && (
                                                <p className="text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.1em] leading-relaxed max-w-[85%] mt-1 group-hover:text-neutral-400 transition-colors">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {items.length === 0 && (
                                <div className="py-32 text-center text-neutral-600 font-mono text-[10px] tracking-[0.2em] uppercase border border-neutral-900/50 rounded-2xl bg-[#111]/10">
                                    Categoría vacía. El Oso está cocinando.
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* Bloque Final de Ubicación Integrado */}
            <div className="relative z-10 w-full mt-auto border-t border-neutral-900 pt-10">
                <Location />
            </div>

            <style jsx global>{`
        /* Ocultar barra de desplazamiento de forma estricta en todo el navegador */
        .hide-scrollbar {
          -ms-overflow-style: none !important;  /* IE and Edge */
          scrollbar-width: none !important;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `}</style>
        </section>
    );
}
