"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 1
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = elementRef.current;

        // Initial State
        let x = 0;
        let y = 0;
        if (direction === "up") y = 50;
        if (direction === "down") y = -50;
        if (direction === "left") x = 50;
        if (direction === "right") x = -50;

        gsap.fromTo(el,
            {
                opacity: 0,
                x,
                y,
                clipPath: "inset(100% 0% 0% 0%)",
                filter: "blur(4px)"
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                filter: "blur(0px)",
                duration: duration,
                delay: delay,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, { scope: elementRef });

    return <div ref={elementRef}>{children}</div>;
}
