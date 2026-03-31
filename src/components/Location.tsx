"use client";

import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
    return (
        <section id="ubicacion" className="w-full py-24 bg-black text-white relative border-t border-neutral-900 border-b">

            {/* Background radial for depth */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-[#00f2ff] uppercase mb-4 opacity-80">
                        Encuéntranos
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase font-sans tracking-tight">
                        UBICACIÓN THE BEAR
                    </h3>
                </div>

                {/* Content Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Map Container (Neumorphic Neon) */}
                    <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl border border-neutral-800 overflow-hidden relative group hover:border-[#00f2ff] hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] transition-all duration-500">
                        {/* If the user has a real google maps link, they can replace the src below. */}
                        <iframe
                            src="https://maps.google.com/maps?q=Basilio+Auqui+174,+Ayacucho&hl=es&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2) hue-rotate(180deg)" }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 z-10 mix-blend-screen"
                        ></iframe>

                        {/* Overlay map hue tint */}
                        <div className="absolute inset-0 bg-[#00f2ff]/5 mix-blend-overlay z-20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />

                        <div className="absolute bottom-4 left-4 z-30">
                            <span className="px-3 py-1 bg-[#111] border border-[#00f2ff]/30 text-[#00f2ff] text-xs font-mono uppercase tracking-widest rounded shadow-[0_0_10px_rgba(0,242,255,0.2)] backdrop-blur-md">MAPA ACTIVO</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-8">
                        {/* Item 1 */}
                        <div className="flex items-start gap-5">
                            <div className="p-4 bg-[#111] rounded-full border border-neutral-800 text-[#00f2ff]">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Dirección</h4>
                                <p className="text-neutral-400 text-lg">Basilio Auqui 174, Huamanga</p>
                                <p className="text-neutral-500 text-sm mt-1">Ayacucho 05002</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-5">
                            <div className="p-4 bg-[#111] rounded-full border border-neutral-800 text-[#FF4D00]">
                                <Clock className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Horario</h4>
                                <p className="text-neutral-400 text-lg">Lunes a Domingo</p>
                                <p className="text-neutral-400 font-mono mt-1 text-lg">11:00 AM — 05:00 PM</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <a
                                href="https://www.google.com/maps/place/Basilio+Auqui+174,+Ayacucho+05002/@-13.1665394,-74.2197784,17z/data=!3m1!4b1!4m5!3m4!1s0x91128761d020838b:0x2229862b3357c9b2!8m2!3d-13.1665446!4d-74.2172035"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex justify-center items-center w-full sm:w-auto px-10 py-4 rounded-xl border-2 border-white bg-white text-black font-bold text-lg tracking-widest uppercase touch-manipulation active:scale-[0.98] transition-all hover:bg-neutral-200 hover:border-neutral-200 shadow-[0_4px_14px_0_rgba(255,255,255,0.2)]"
                            >
                                Abrir en Google Maps
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
