"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current || !imageRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom center",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            textRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        ).fromTo(
            imageRef.current,
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power4.inOut" },
            "-=0.5"
        );
    }, []);

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-black overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8 z-10">
                    <h2
                        ref={textRef}
                        className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter"
                    >
                        Respect <br />
                        <span className="text-neon-orange glow-orange">The</span> <br />
                        Catch.
                    </h2>
                    <p className="text-neutral-400 font-mono text-lg max-w-md border-l-2 border-neon-blue pl-6 ml-2">
                        Solo pesca del día. Cortes precisos, acidez exacta, fuego controlado. En THE BEAR, no disfrazamos el ingrediente: lo elevamos con brutalidad y técnica artesanal. Es pureza quirúrgica en cada plato.
                    </p>
                </div>

                <div className="flex-1 w-full h-[600px] relative">
                    <div ref={imageRef} className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-crosshair">
                        <Image
                            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop"
                            alt="Chef prepando ceviche"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay Grid */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
