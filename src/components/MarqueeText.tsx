"use client";

import { motion } from "framer-motion";

export interface MarqueeItem {
    text: string;
    outline?: boolean;
}

interface MarqueeTextProps {
    items: MarqueeItem[];
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export default function MarqueeText({ items, direction = "left", speed = 50, className = "" }: MarqueeTextProps) {
    const renderItems = () => (
        <div className="flex px-4 items-center">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center">
                    <span className={`mx-6 ${item.outline ? "text-transparent text-outline" : ""}`}>
                        {item.text}
                    </span>
                    <span className="mx-6 text-[#FF4D00]">●</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
            <motion.div
                className="flex whitespace-nowrap min-w-full"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {renderItems()}
                {renderItems()}
                {renderItems()}
                {renderItems()}
            </motion.div>
        </div>
    );
}
