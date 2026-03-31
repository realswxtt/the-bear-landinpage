"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Dish {
    id: number;
    name: string;
    description: string;
    image: string;
}

const dishes: Dish[] = [
    {
        id: 1,
        name: "Ceviche 'The Bear'",
        description: "Nuestra versión insignia: pescado fresquísimo del día, leche de tigre cremosa con un toque secreto de la casa, camote glaseado, choclo desgranado y crujientes chips de plátano artesanal. Una explosión de frescura salvaje.",
        image: "/dishes/ceviche-oso.jpg",
    },
    {
        id: 2,
        name: "Arroz Chaufa de Mariscos",
        description: "Wok fusion peruano-oriental al fuego vivo. Arroz graneado con mixtura de mariscos seleccionados, langostinos jumbo, tortilla de huevo picada y cebollita china, coronado con hilos de wantán y plátano frito.",
        image: "/dishes/arroz-mariscos-oso.jpg",
    },
    {
        id: 3,
        name: "Parihuela Especial",
        description: "El concentrado más potente del mar. Sopa tradicional espesa a base de mariscos, cangrejo, conchas de abanico y pescado, infusionada con chicha de jora y especias andinas. Revitalizante y llena de alma.",
        image: "/dishes/parihuela-oso.jpg",
    },
];

export default function SignatureDishes() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="bg-[#0a0a0a] py-24 px-6 md:px-12 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 space-y-4"
                >
                    <h2 className="text-[#FF4D00] font-syne font-black text-4xl md:text-7xl uppercase tracking-tighter leading-none">
                        Platos <br /> <span className="text-white">Insignia</span>
                    </h2>
                    <div className="h-1 w-24 bg-[#00f2ff]" />
                    <p className="text-neutral-400 font-sans text-lg max-w-xl">
                        La esencia de nuestra cocina. Selecciones maestras que definen la fuerza y el alma de THE BEAR.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dishes.map((dish) => (
                        <motion.div
                            key={dish.id}
                            layoutId={`card-${dish.id}`}
                            onClick={() => setSelectedId(dish.id)}
                            className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-2xl border border-neutral-800/50 bg-[#111]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div className="w-full h-full relative overflow-hidden">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </motion.div>

                            <div className="absolute bottom-0 left-0 w-full p-8 space-y-2">
                                <motion.p className="text-[#00f2ff] font-sans font-bold text-sm uppercase tracking-widest">
                                    Fuerza Salvaje
                                </motion.p>
                                <h3 className="text-white font-syne font-black text-2xl md:text-3xl uppercase leading-tight">
                                    {dish.name}
                                </h3>
                            </div>

                            {/* Hover effect overlay */}
                            <motion.div
                                className="absolute inset-0 border-2 border-[#FF4D00] opacity-0 pointer-events-none rounded-2xl"
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Main Menu Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <a
                        href="/Carta-the-bear.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-4 px-12 py-5 bg-transparent border-2 border-[#00f2ff] text-white font-syne font-black text-xl uppercase tracking-tighter hover:bg-[#00f2ff] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_40px_rgba(0,242,255,0.5)]"
                    >
                        <span>Ver Carta Digital (PDF)</span>
                        <div className="w-6 h-6 flex items-center justify-center border-2 border-current rounded-sm group-hover:rotate-12 transition-transform">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                    </a>
                </motion.div>
            </div>

            {/* Modal / Expanded View */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md">
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-5xl bg-[#111] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#FF4D00] transition-colors"
                                aria-label="Cerrar"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative h-80 md:h-[600px]">
                                <Image
                                    src={dishes.find(d => d.id === selectedId)?.image || ""}
                                    alt={dishes.find(d => d.id === selectedId)?.name || ""}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <p className="text-[#00f2ff] font-sans font-bold text-sm uppercase tracking-widest mb-2">
                                        Especialidad de la Casa
                                    </p>
                                    <h2 className="text-white font-syne font-black text-4xl md:text-5xl uppercase leading-none mb-6">
                                        {dishes.find(d => d.id === selectedId)?.name}
                                    </h2>
                                    <div className="h-1 w-20 bg-[#FF4D00] mb-8" />
                                    <p className="text-neutral-300 text-lg md:text-xl font-sans leading-relaxed">
                                        {dishes.find(d => d.id === selectedId)?.description}
                                    </p>

                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="mt-10 px-8 py-4 bg-[#FF4D00] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#e04400] transition-colors inline-block"
                                    >
                                        Volver a ver
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Overlay click to close */}
                        <motion.div
                            className="absolute inset-0 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        />
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
