"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function GlitchLogo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !imageRef.current) return;

        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(
            imageRef.current,
            {
                y: 100,
                opacity: 0,
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            },
            {
                y: 0,
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1.2,
                ease: "power4.out",
            }
        );

        // Slight glitch jitter at the end
        tl.to(
            containerRef.current,
            {
                x: () => (Math.random() - 0.5) * 10,
                y: () => (Math.random() - 0.5) * 10,
                skewX: () => (Math.random() - 0.5) * 6,
                duration: 0.08,
                repeat: 4,
                yoyo: true,
                ease: "none",
                clearProps: "all",
            },
            "+=0.2"
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full max-w-[700px] h-[200px] md:h-[300px] flex justify-center items-center overflow-visible mix-blend-screen opacity-90 mt-[-40px]">
            {/* The mix-blend-screen makes the black background disappear on our dark page */}
            <div
                ref={imageRef}
                className="relative w-full h-full"
                style={{ filter: "drop-shadow(0px 0px 25px rgba(0, 243, 255, 0.8))" }}
            >
                <Image
                    src="/the-bear-logo.png"
                    alt="The Bear Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
