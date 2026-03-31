"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

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
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col px-6 pt-28 pb-12 bg-black">

            {/* 1. Deep Sea Radial Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#020817_0%,_#000000_80%)]" />

            {/* 2. Cinematric Noise Grain Texture (Opacity 6%) */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
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
                        {/* Transforma colores a blancos puros usando la luminosidad como canal Alpha */}
                        <feColorMatrix in="SourceGraphic" type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
                            result="luminanceAlpha" />

                        {/* Filtra ruido gris oscuro (contraste extremo) */}
                        <feComponentTransfer in="luminanceAlpha" result="cleanAlpha">
                            <feFuncA type="linear" slope="5" intercept="-0.5" />
                        </feComponentTransfer>

                        {/* Tres capas de Resplandor Neón Cian (#00f2ff) encadenadas (Corto, Medio, Largo) */}
                        <feDropShadow in="cleanAlpha" dx="0" dy="0" stdDeviation="3" floodColor="#00f2ff" floodOpacity="1" result="glow1" />
                        <feDropShadow in="glow1" dx="0" dy="0" stdDeviation="10" floodColor="#00f2ff" floodOpacity="0.8" result="glow2" />
                        <feDropShadow in="glow2" dx="0" dy="0" stdDeviation="20" floodColor="#00f2ff" floodOpacity="0.5" result="glow3" />
                    </filter>
                </defs>
            </svg>

            <div className="relative z-10 flex flex-col items-center flex-1 w-full max-w-lg mx-auto mt-8 md:justify-center">

                {/* 1. Centered Large Logo (Con filtro SVG avanzado) */}
                <div
                    className="relative w-80 h-80 md:w-96 md:h-96 mb-6 z-20"
                    style={{ filter: "url(#true-neon-glow)" }}
                >
                    <Image
                        src="/logo-the-bear-icon.png"
                        alt="The Bear Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80vw, 384px"
                        priority
                    />
                </div>

                {/* 2. Slogan */}
                <div className="text-center space-y-4 w-full">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-[1.1] drop-shadow-[0_0_15px_rgba(0,242,255,0.7)] group">
                        Fuerza Salvaje. <br className="hidden md:block" />
                        <span className="text-white drop-shadow-[0_0_20px_rgba(0,242,255,0.9)] transition-all duration-300">Frescura Pura.</span>
                    </h1>

                    {/* 3. Description Paragraph */}
                    <p className="text-neutral-300 text-base md:text-lg font-sans leading-relaxed tracking-wide mt-6 mb-10 max-w-sm mx-auto">
                        Siente el golpe del mar en cada bocado. THE BEAR, ceviche con técnica y alma en Ayacucho.
                    </p>
                </div>

                <div className="w-full mt-auto md:mt-10 mb-8 flex justify-center z-20">
                    <Link href="/reservas" className="w-full max-w-[320px] py-4 rounded-xl border border-[#00f2ff]/60 bg-[#020817]/40 text-white font-bold text-lg tracking-widest uppercase shadow-[0_0_20px_rgba(0,242,255,0.3),inset_0_0_10px_rgba(0,242,255,0.1)] touch-manipulation active:scale-[0.98] transition-all hover:bg-[#00f2ff]/10 hover:shadow-[0_0_30px_rgba(0,242,255,0.5),inset_0_0_15px_rgba(0,242,255,0.2)] text-center flex items-center justify-center">
                        Reserva tu mesa
                    </Link>
                </div>
            </div>
        </section>
    );
}
