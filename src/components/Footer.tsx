import { MapPin, Phone, Instagram, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-20">

                {/* Brand & Contact */}
                <div className="flex-1 space-y-8">
                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white tracking-tighter hover:glow-blue transition-all duration-300">
                        THE BEAR.
                    </h2>
                    <div className="font-mono text-neutral-400 space-y-4">
                        <p className="flex items-center gap-3 hover:text-white transition-colors">
                            <MapPin className="w-5 h-5 text-neon-blue" />  Basilio Auqui 174 - A una cuadra del colegio San Juan Bautista
                        </p>
                        <p className="flex items-center gap-3 hover:text-white transition-colors">
                            <Phone className="w-5 h-5 text-neon-blue" /> +51 928 613 559
                        </p>
                        <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                            <Instagram className="w-5 h-5 text-neon-orange" /> @thebear_ceviche
                        </p>
                    </div>
                </div>

                {/* Action / CTA */}
                <div className="flex-1 flex flex-col justify-end items-start md:items-end">
                    <p className="text-xl text-neutral-500 font-mono mb-4 uppercase">
                        Únete a la manada
                    </p>
                    <Link
                        href="/reservas"
                        className="group flex items-center gap-4 text-3xl md:text-5xl font-bold uppercase text-white hover:text-neon-orange transition-colors duration-300"
                    >
                        Reservar
                        <MoveRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-4 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 font-mono text-xs text-neutral-600">
                <p>© {new Date().getFullYear()} THE BEAR CEVICHERIA. TODOS LOS DERECHOS RESERVADOS.</p>
                <p className="mt-4 md:mt-0 flex gap-4">
                    <a href="#" className="hover:text-neon-blue transition-colors">POLÍTICAS DE PRIVACIDAD</a>
                    <a href="#" className="hover:text-neon-blue transition-colors">TÉRMINOS DE USO</a>
                </p>
            </div>
        </footer>
    );
}
