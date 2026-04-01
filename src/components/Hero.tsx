"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Componente para partículas flotantes orgánicas (efecto mar profundo)
// Se usa un estado y useEffect para evitar el error de Hydration Mismatch de Next.js
const Bubbles = () => {
    const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; left: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        const generated = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            left: Math.random() * 100,
            duration: Math.random() * 15 + 15, // 15 to 30s
            delay: Math.random() * -20, // negative delay
        }));
        setBubbles(generated);
    }, []);

    if (bubbles.length === 0) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="absolute bottom-[-20px] rounded-full bg-[#00f2ff] opacity-0 shadow-[0_0_10px_#00f2ff,0_0_20px_#00f2ff]"
                    style={{
                        width: b.size,
                        height: b.size,
                        left: `${b.left}%`,
                        animation: `floatUp ${b.duration}s ease-in-out ${b.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bgRef.current) return;

        // Extremely gentle and imperceptible lateral movement for the texture (caustics feel)
        gsap.to(bgRef.current, {
            backgroundPosition: "0px 100px",
            ease: "none",
            scrollTrigger: {
                trigger: bgRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col px-4 sm:px-6 pt-20 pb-8 bg-black">

            {/* 1. Deep Sea Radial Gradient Background (Deeper and more focused) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,#050c1f_0%,#000000_100%)]" />

            {/* 2. Scanning Lines (Brutalist aesthetic - Fills the 'vacio') */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[length:100%_2px,3px_100%] bg-repeat opacity-[0.1]" style={{ backgroundImage: `linear-gradient(rgba(0,242,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.1) 1px, transparent 1px)` }}></div>

            {/* 3. Cinematric Noise Grain Texture */}
            <div
                className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-[0.05]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 4. Floating Sea Sediment / Bubbles */}
            <Bubbles />

            <div className="relative z-10 flex flex-col items-center flex-1 w-full max-w-2xl mx-auto md:justify-center">

                {/* Coordinate Markers (Brutalist detail to fill space) */}
                <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-mono text-neutral-600 tracking-[0.5em] whitespace-nowrap opacity-40">Lat: 13.16° S / Long: 74.22° W</div>
                <div className="absolute top-4 right-0 hidden md:block text-[10px] font-mono text-neon-blue/20 rotate-90 translate-x-[50%] uppercase tracking-[0.5em]">The Bear // Raw & Wild</div>

                {/* SVG Filter: Convierte el fondo negro en transparente y aplica Neón contorneado en CYAN (#00f2ff) */}
                <svg className="hidden">
                    <defs>
                        <filter id="true-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feColorMatrix in="SourceGraphic" type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
                                result="luminanceAlpha" />
                            <feComponentTransfer in="luminanceAlpha" result="cleanAlpha">
                                <feFuncA type="linear" slope="5" intercept="-0.5" />
                            </feComponentTransfer>
                            {/* Glow more intense */}
                            <feDropShadow in="cleanAlpha" dx="0" dy="0" stdDeviation="4" floodColor="#00f3ff" floodOpacity="1" result="glow1" />
                            <feDropShadow in="glow1" dx="0" dy="0" stdDeviation="15" floodColor="#00f3ff" floodOpacity="1" result="glow2" />
                            <feDropShadow in="glow2" dx="0" dy="0" stdDeviation="30" floodColor="#00f3ff" floodOpacity="0.8" result="glow3" />
                        </filter>
                    </defs>
                </svg>

                {/* 1. Centered Large Logo (With perfect Neon Glow blending) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] z-20 mix-blend-screen"
                    style={{ filter: "url(#true-neon-glow)" }}
                >
                    <Image
                        src="/logo-the-bear-icon.png"
                        alt="The Bear Logo"
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 480px) 320px, (max-width: 768px) 384px, 500px"
                    />
                </motion.div>

                {/* 2. Slogan & Description (Closer to Logo) */}
                <div className="text-center space-y-2 w-full mt-[-30px] md:mt-[-50px]">
                    <h1 className="text-[var(--font-size-hero)] font-black tracking-tighter text-white uppercase leading-[0.85] drop-shadow-[0_0_35px_rgba(0,243,255,0.7)] selection:bg-neon-blue selection:text-black">
                        Técnica y Alma. <br className="hidden sm:block" />
                        <span className="text-white brightness-200">Selección del Mar.</span>
                    </h1>

                    {/* 3. Description Paragraph (Tighter) */}
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-lg font-mono leading-relaxed tracking-wider mt-6 md:mt-8 mb-10 md:mb-14 max-w-sm mx-auto px-6 opacity-70">
                        Siente el golpe del mar en cada bocado. THE BEAR, ceviche con técnica y alma en Ayacucho.
                    </p>
                </div>

                {/* 3. Primary CTA */}
                <div className="w-full mt-auto md:mt-0 mb-6 flex justify-center z-20">
                    <Link href="/Carta" className="w-full max-w-[340px] py-7 rounded-2xl border-2 border-neon-blue/40 bg-neon-blue/5 text-white font-black text-lg tracking-[0.3em] uppercase shadow-[0_0_25px_rgba(0,243,255,0.25)] active:scale-[0.95] transition-all hover:bg-neon-blue/15 hover:border-neon-blue hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] text-center flex items-center justify-center backdrop-blur-3xl group relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 group-hover:scale-105 transition-transform">Ver Carta Digital</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
