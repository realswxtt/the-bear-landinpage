"use client";

import Image from "next/image";

const MENU_ITEMS = [
    {
        id: "01",
        title: "Ceviche Clásico del Oso",
        desc: "Pesca del día, leche de tigre brutal, ají limo, cebolla crocante.",
        img: "/ceviche_clasico.png",
    },
    {
        id: "02",
        title: "Tiradito de Fuego",
        desc: "Láminas finas, emulsión de rocoto ahumado, aceite de cilantro, sal de maras.",
        img: "/tiradito_fuego.png",
    },
    {
        id: "03",
        title: "Arroz con Mariscos Brutal",
        desc: "Mariscos al wok, arroz meloso al ají amarillo, chalaquita fresca y brutal.",
        img: "/arroz_mariscos.png",
    },
];

export default function Menu() {
    return (
        <section id="menu" className="w-full py-20 bg-[#0a0a0a] overflow-hidden">
            <div className="px-6 mb-8">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#FF4D00] uppercase mb-2">
                    Nuestra Carta
                </h2>
                <h3 className="text-3xl font-black text-white uppercase font-sans tracking-tight">
                    Favoritos del Mar
                </h3>
            </div>

            {/* Swipeable Carousel */}
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 pb-8 gap-6 pr-6">
                {MENU_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className="shrink-0 w-[85vw] md:w-[400px] snap-center flex flex-col gap-4"
                    >
                        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#111] border border-neutral-900 shadow-xl">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 85vw, 400px"
                            />
                        </div>

                        <div className="flex flex-col gap-1 mt-2">
                            <span className="text-neon-blue font-mono text-sm tracking-widest">{item.id}</span>
                            <h4 className="text-xl font-bold text-white uppercase leading-tight font-sans">
                                {item.title}
                            </h4>
                            <p className="text-neutral-400 text-sm font-sans mt-1 leading-snug">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
