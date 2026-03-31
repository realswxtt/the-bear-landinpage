"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const IMAGES = [
    "https://images.unsplash.com/photo-1559132274-1ba17effcf28?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541094892415-3bd42bcbf4e4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1623800632230-01d0a53b5cf2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop",
];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section
            ref={containerRef}
            className="w-full py-32 px-6 md:px-12 bg-black flex justify-center items-center overflow-hidden"
        >
            <div className="max-w-6xl w-full flex gap-4 md:gap-8 justify-center min-h-[800px]">
                {/* Column 1 */}
                <motion.div
                    style={{ y: y1 }}
                    className="flex flex-col gap-4 md:gap-8 w-1/2 pt-20"
                >
                    <div className="relative w-full aspect-[4/5] overflow-hidden group">
                        <Image
                            src={IMAGES[0]}
                            alt="Gallery 1"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                    <div className="relative w-full aspect-square overflow-hidden group">
                        <Image
                            src={IMAGES[1]}
                            alt="Gallery 2"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                </motion.div>

                {/* Column 2 */}
                <motion.div
                    style={{ y: y2 }}
                    className="flex flex-col gap-4 md:gap-8 w-1/2"
                >
                    <div className="relative w-full aspect-square overflow-hidden group">
                        <Image
                            src={IMAGES[2]}
                            alt="Gallery 3"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                    <div className="relative w-full aspect-[4/5] overflow-hidden group">
                        <Image
                            src={IMAGES[3]}
                            alt="Gallery 4"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
