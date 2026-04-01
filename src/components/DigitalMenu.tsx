"use client";

import { useState, useMemo, useRef } from "react";
import { menuCategories, menuData } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import Location from "./Location";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

function MenuItemTiltCard({ item, onClick }: { item: any; onClick: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !innerRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(innerRef.current, {
            rotateX,
            rotateY,
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        if (!innerRef.current) return;
        gsap.to(innerRef.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="perspective-1000 w-full"
        >
            <div
                ref={innerRef}
                className="featured-card group relative flex flex-col bg-gradient-to-br from-[#111] to-[#050505] border border-neutral-800/80 rounded-3xl overflow-hidden hover:border-neon-blue/60 transition-all p-5 cursor-pointer shadow-lg hover:shadow-neon-blue-500/10 preserve-3d"
            >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black mb-6 pointer-events-none transform-translate-z-20">
                    <Image
                        src={item.image!}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex flex-col grow px-2 pointer-events-none transform-translate-z-50">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl md:text-3xl font-black text-white uppercase leading-[0.9] tracking-tighter group-hover:text-neon-blue transition-colors">
                            {item.title}
                        </h4>
                        <span className="text-neon-orange font-black text-3xl ml-4 drop-shadow-[0_0_10px_rgba(255,60,0,0.3)]">
                            <span className="text-xs font-mono opacity-50 mr-1 text-white">S/</span>{item.price}
                        </span>
                    </div>
                    <p className="text-neutral-500 text-xs md:text-sm font-mono uppercase tracking-widest leading-relaxed line-clamp-3 mb-6">
                        {item.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-neon-blue uppercase tracking-[0.3em]">EXPLORAR</span>
                            <div className="w-12 h-[1px] bg-neon-blue/40" />
                        </div>
                        <Star className="w-4 h-4 text-neon-orange fill-neon-orange/20" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DigitalMenu() {
    const [activeCategory, setActiveCategory] = useState<string>("ESPECIALIDADES");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Optimized filtering and splitting
    const { featuredItems, regularItems } = useMemo(() => {
        const filtered = menuData.filter((i) => i.category === activeCategory);
        return {
            featuredItems: filtered.filter(i => i.isFeatured && i.image),
            regularItems: filtered.filter(i => !i.isFeatured || !i.image)
        };
    }, [activeCategory]);

    // GSAP: Staggered entrance for items
    useGSAP(() => {
        const q = gsap.utils.selector(containerRef);

        // Featured Items Animation
        gsap.fromTo(q(".featured-card"),
            { opacity: 0, y: 30, scale: 0.95, skewX: -2 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                skewX: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power4.out",
                clearProps: "all"
            }
        );

        // Regular Items Animation
        gsap.fromTo(q(".regular-item"),
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.05,
                delay: 0.2,
                ease: "expo.out",
                clearProps: "all"
            }
        );
    }, { dependencies: [activeCategory], scope: containerRef });

    // GSAP: Modal Animation
    useGSAP(() => {
        if (selectedItem) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, scale: 0.8, filter: "blur(10px) brightness(2)" },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px) brightness(1)",
                    duration: 0.6,
                    ease: "elastic.out(1, 0.75)"
                }
            );
        }
    }, { dependencies: [selectedItem] });

    return (
        <section id="menu-digital" className="w-full min-h-screen bg-background text-neutral-100 flex flex-col relative font-sans decoration-neutral-800">

            {/* 1. Ambient Noise + Brutalist Grid Background */}
            <div
                className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
            />
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

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
                        The Bear // Culinary Experience
                    </h2>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#eaeaea] relative z-10 leading-[0.9]">
                        NUESTRA <br /><span className="text-[#00f2ff] drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">CARTA</span>
                    </h3>

                    {/* Decorative Coordinates */}
                    <div className="hidden lg:block absolute bottom-4 left-12 font-mono text-[8px] text-neutral-600 tracking-[0.3em] uppercase">SYSTEM.BOOT // LAT: 13.16° S / LONG: 74.22° W</div>
                    <div className="hidden lg:block absolute bottom-4 right-12 font-mono text-[8px] text-neutral-600 tracking-[0.3em] uppercase opacity-50">THE BEAR // VERSION 2.0.4</div>
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
                                    className={`shrink-0 flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase transition-all duration-300 relative pb-1 focus:outline-none ${isActive
                                        ? "text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] scale-110"
                                        : "text-neutral-500 hover:text-white"
                                        }`}
                                >
                                    {cat}
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
                        className="w-full flex items-center justify-between bg-[#111] border border-[#00f2ff]/30 text-[#00f2ff] font-mono text-[11px] tracking-[0.2em] uppercase px-4 py-4 rounded-lg focus:outline-none transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <span className="opacity-80">{getCategoryIcon(activeCategory)}</span>
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
                                <div className="flex flex-col gap-1 mt-4 max-h-[60vh] overflow-y-auto hide-scrollbar border border-neutral-900 rounded-lg p-2 bg-[#050505]/95">
                                    {menuCategories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setActiveCategory(cat);
                                                setIsMobileMenuOpen(false);
                                                window.scrollTo({ top: 250, behavior: "smooth" });
                                            }}
                                            className={`w-full text-left font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-4 rounded transition-colors flex items-center gap-3 ${activeCategory === cat
                                                ? "bg-neon-blue/15 text-neon-blue border border-neon-blue/30"
                                                : "text-neutral-500 hover:bg-[#111] hover:text-white"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* CONTENIDO LISTA */}
                <div ref={containerRef} className="max-w-6xl mx-auto px-6 md:px-12 mt-12 mb-24 min-h-[50vh] w-full relative">
                    <AnimatePresence mode="wait">
                        <div key={activeCategory} className="w-full">
                            {/* 1. SECCIÓN DESTACADOS */}
                            {featuredItems.length > 0 && (
                                <div className="mb-24">
                                    <div className="flex items-center gap-4 mb-12 overflow-hidden opacity-40">
                                        <div className="h-[2px] bg-neon-blue/50 grow" />
                                        <h3 className="text-neon-blue font-mono text-[11px] tracking-[0.5em] uppercase whitespace-nowrap">
                                            PLATOS INSIGNIA
                                        </h3>
                                        <div className="h-[2px] bg-neon-blue/50 grow" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                                        {featuredItems.map((item) => (
                                            <MenuItemTiltCard
                                                key={item.id}
                                                item={item}
                                                onClick={() => setSelectedItem(item)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 2. LISTA REGULAR */}
                            {regularItems.length > 0 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14">
                                    {regularItems.map((item) => {
                                        const isExclusive = item.title.toUpperCase().includes("THE BEAR");
                                        const hasImage = !!item.image;
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => hasImage && setSelectedItem(item)}
                                                className={`regular-item flex flex-col w-full group ${hasImage ? 'cursor-pointer' : ''} border-b border-neutral-900 pb-8 hover:border-neon-blue/20 transition-colors`}
                                            >
                                                <div className="flex items-baseline w-full justify-between mb-3">
                                                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 shrink-0 max-w-[75%]">
                                                        <h4 className="font-black text-xl md:text-3xl text-neutral-200 uppercase tracking-tighter group-hover:text-white transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        {hasImage && (
                                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20">
                                                                <Image className="w-3 h-3 text-neon-blue" src="/placeholder.svg" alt="icon" width={12} height={12} />
                                                                <span className="text-[8px] font-black text-neon-blue uppercase tracking-widest">FOTO</span>
                                                            </div>
                                                        )}
                                                        {isExclusive && (
                                                            <span className="text-neon-orange font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                                                                [ EXCLUSIVO ]
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex-grow border-b-[1px] border-neutral-800 mx-4 translate-y-[-8px] opacity-40 group-hover:border-neon-blue/30 transition-colors" />
                                                    <span className="font-black text-2xl md:text-3xl text-neutral-100 group-hover:text-neon-orange transition-colors tracking-tighter">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                {item.description && (
                                                    <p className="text-neutral-500 text-[11px] md:text-xs font-mono uppercase tracking-[0.1em] leading-relaxed max-w-[90%] mt-1 group-hover:text-neutral-400 transition-colors font-medium">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 md:p-10 bg-black/98 backdrop-blur-2xl">
                        <motion.div
                            ref={modalRef}
                            layoutId={`item-${selectedItem.id}`}
                            className="relative w-full h-full sm:h-auto sm:max-w-6xl bg-[#080808] sm:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,242,255,0.1)] border border-neutral-800 flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-neon-orange hover:scale-110 transition-all border border-white/10 group"
                            >
                                <ChevronDown className="w-8 h-8 rotate-90 group-hover:rotate-0 transition-transform" />
                            </button>

                            <div className="w-full md:w-1/2 aspect-square relative h-[45vh] md:h-auto shrink-0 md:min-h-[600px]">
                                <Image
                                    src={selectedItem.image || ""}
                                    alt={selectedItem.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#080808]" />
                            </div>

                            <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-20 flex flex-col justify-center space-y-8 overflow-y-auto max-h-[55vh] md:max-h-none hide-scrollbar relative">
                                <div>
                                    <p className="text-neon-blue font-mono text-xs uppercase tracking-[0.6em] mb-4 opacity-70">
                                        {selectedItem.category} // THE BEAR
                                    </p>
                                    <h2 className="text-white font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.8] mb-8 tracking-tighter">
                                        {selectedItem.title}
                                    </h2>
                                    <div className="h-[2px] w-24 bg-neon-orange shadow-[0_0_15px_#ff3c00] mb-8" />
                                </div>

                                <p className="text-neutral-400 text-sm sm:text-base md:text-lg font-mono uppercase tracking-[0.2em] leading-relaxed max-w-lg">
                                    {selectedItem.description || "Un sabor único diseñado para los paladares más exigentes. Frescura bruta de nuestro mar."}
                                </p>

                                <div className="flex flex-col gap-2 mt-12">
                                    <span className="text-neutral-600 font-mono text-[10px] tracking-[0.4em] uppercase">VALOR EXPERIENCIA</span>
                                    <span className="text-neon-orange font-black text-6xl md:text-7xl tracking-tighter">
                                        <span className="text-xl mr-3 opacity-30">S/</span>{selectedItem.price}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="mt-12 w-fit px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] rounded-full hover:bg-neon-blue hover:text-white transition-all text-xs active:scale-95"
                                >
                                    Cerrar Detalle
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Bloque Final de Ubicación Integrado */}
            <div className="relative z-10 w-full mt-auto border-t border-neutral-900 pt-10">
                <Location />
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
