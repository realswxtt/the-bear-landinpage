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

            <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-4xl mx-auto pb-10">

                {/* Coordinate Markers (Brutalist detail to fill space) */}
                <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-mono text-neutral-600 tracking-[0.5em] whitespace-nowrap opacity-40">Lat: 13.16° S / Long: 74.22° W</div>
                <div className="absolute top-4 right-0 hidden md:block text-[10px] font-mono text-neon-blue/20 rotate-90 translate-x-[50%] uppercase tracking-[0.5em]">The Bear // Raw & Wild</div>

                {/* 1. Main Brutalist Typography (Replaces the image logo) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full flex flex-col items-center justify-center z-20 mb-6 md:mb-12 cursor-default"
                >
                    <h1 className="text-[4.5rem] sm:text-[6.5rem] md:text-[9.5rem] lg:text-[11rem] font-black font-syne tracking-tighter uppercase leading-[0.75] text-white flex flex-col items-center drop-shadow-[0_0_40px_rgba(0,243,255,0.4)]">
                        <span className="relative z-10">THE</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-neon-blue to-white relative z-20 -mt-2 sm:-mt-4 md:-mt-6">BEAR</span>
                    </h1>
                </motion.div>

                {/* 2. Slogan & Description (Massive and Tight) */}
                <div className="text-center space-y-6 w-full z-20">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-black tracking-widest text-neon-blue uppercase drop-shadow-[0_0_15px_rgba(0,243,255,0.7)]">
                        Técnica y Alma. <br className="hidden sm:block" />
                        <span className="text-white brightness-200">Selección del Mar.</span>
                    </h2>

                    {/* 3. Description Paragraph */}
                    <p className="text-neutral-400 text-sm md:text-xl font-mono leading-snug tracking-wider max-w-2xl mx-auto px-6 opacity-70">
                        Siente el golpe del mar en cada bocado. THE BEAR, ceviche con técnica y alma en Ayacucho.
                    </p>
                </div>

                {/* 3. Primary CTA */}
                <div className="w-full mt-10 md:mt-14 flex justify-center z-20">
                    <Link href="/Carta" className="w-full max-w-[300px] sm:max-w-[380px] py-5 sm:py-7 rounded-2xl border-2 border-neon-blue/40 bg-neon-blue/5 text-white font-black text-base md:text-xl tracking-[0.3em] uppercase shadow-[0_0_25px_rgba(0,243,255,0.25)] active:scale-[0.95] transition-all hover:bg-neon-blue/15 hover:border-neon-blue hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] text-center flex items-center justify-center backdrop-blur-3xl group relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 group-hover:scale-105 transition-transform">Ver Carta Digital</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
