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
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col px-4 sm:px-6 pt-24 pb-12 bg-black">

            {/* 1. Deep Sea Radial Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#020817_0%,_#000000_80%)]" />

            {/* 2. Cinematric Noise Grain Texture (Opacity 6%) */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* 3. Floating Sea Sediment / Bubbles */}
            <Bubbles />

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
                        <feDropShadow in="cleanAlpha" dx="0" dy="0" stdDeviation="3" floodColor="#00f2ff" floodOpacity="1" result="glow1" />
                        <feDropShadow in="glow1" dx="0" dy="0" stdDeviation="10" floodColor="#00f2ff" floodOpacity="0.8" result="glow2" />
                        <feDropShadow in="glow2" dx="0" dy="0" stdDeviation="20" floodColor="#00f2ff" floodOpacity="0.5" result="glow3" />
                    </filter>
                </defs>
            </svg>

            <div className="relative z-10 flex flex-col items-center flex-1 w-full max-w-2xl mx-auto mt-6 md:justify-center">

                {/* 1. Centered Large Logo (Con filtro SVG avanzado) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] mb-4 md:mb-8 z-20"
                    style={{ filter: "url(#true-neon-glow)" }}
                >
                    <Image
                        src="/logo-the-bear-icon.png"
                        alt="The Bear Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 480px) 256px, (max-width: 768px) 320px, 450px"
                        priority
                    />
                </motion.div>

                {/* 2. Slogan */}
                <div className="text-center space-y-4 w-full">
                    <h1 className="text-[var(--font-size-hero)] font-black tracking-tighter text-white uppercase leading-[0.95] drop-shadow-[0_0_20px_rgba(0,242,255,0.6)]">
                        Fuerza Salvaje. <br className="hidden sm:block" />
                        <span className="text-white brightness-125">Frescura Pura.</span>
                    </h1>

                    {/* 3. Description Paragraph */}
                    <p className="text-neutral-400 text-sm sm:text-base md:text-lg font-sans leading-relaxed tracking-wide mt-4 md:mt-8 mb-8 md:mb-12 max-w-md mx-auto px-4">
                        Siente el golpe del mar en cada bocado. THE BEAR, ceviche con técnica y alma en Ayacucho.
                    </p>
                </div>

                <div className="w-full mt-auto md:mt-0 mb-6 flex justify-center z-20">
                    <Link href="/reservas" className="w-full max-w-[340px] py-5 rounded-2xl border-2 border-[#00f2ff]/40 bg-[#020817]/60 text-white font-black text-lg tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(0,242,255,0.25)] active:scale-[0.96] transition-all hover:bg-[#00f2ff]/10 hover:border-[#00f2ff] hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] text-center flex items-center justify-center backdrop-blur-sm">
                        Reserva tu mesa
                    </Link>
                </div>
            </div>
        </section>
    );
}
