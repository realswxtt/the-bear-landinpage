"use client";

import { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        fecha: "",
        hora: "",
        personas: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "51928613559";

        // Construct WhatsApp message cleanly
        const text = `Hola *THE BEAR* 🐻, me gustaría hacer una reserva:
- *A nombre de*: ${formData.nombre || "No especificado"}
- *Fecha*: ${formData.fecha || "No especificada"}
- *Hora*: ${formData.hora || "No especificada"}
- *Personas*: ${formData.personas || "No especificado"}
- *Detalles*: ${formData.mensaje || "Ninguno"}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    return (
        <div className="max-w-xl mx-auto px-6 relative z-10 w-full font-sans">
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#00f2ff] transition-colors font-mono text-xs tracking-widest uppercase mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
            </Link>

            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-black uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-4">
                    RESERVA TU MESA
                </h1>
                <p className="text-neutral-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                    Asegura tu lugar en el infierno culinario.
                </p>
            </div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-[#0a0a0a]/90 backdrop-blur-xl p-8 border border-neutral-900 shadow-2xl relative overflow-hidden group/form"
            >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4D00] to-transparent opacity-80" />

                {/* Nombre */}
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">Nombre o Alias</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="¿A nombre de quién?"
                        className="bg-[#111] border border-neutral-800 text-white font-sans px-4 py-4 rounded-none focus:outline-none focus:border-[#FF4D00]/60 transition-colors placeholder:text-neutral-700 placeholder:font-mono placeholder:text-xs"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Fecha */}
                    <div className="flex flex-col gap-2">
                        <label className="text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">Fecha</label>
                        <input
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            className="bg-[#111] border border-neutral-800 text-white font-sans px-4 py-4 rounded-none focus:outline-none focus:border-[#FF4D00]/60 transition-colors [color-scheme:dark]"
                        />
                    </div>

                    {/* Hora */}
                    <div className="flex flex-col gap-2">
                        <label className="text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">Hora Estimada</label>
                        <input
                            type="time"
                            name="hora"
                            value={formData.hora}
                            onChange={handleChange}
                            className="bg-[#111] border border-neutral-800 text-white font-sans px-4 py-4 rounded-none focus:outline-none focus:border-[#FF4D00]/60 transition-colors [color-scheme:dark]"
                        />
                    </div>
                </div>

                {/* Personas */}
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">Mesa para</label>
                    <input
                        type="number"
                        name="personas"
                        value={formData.personas}
                        onChange={handleChange}
                        placeholder="¿Cuántos comensales?"
                        min="1"
                        className="bg-[#111] border border-neutral-800 text-white font-sans px-4 py-4 rounded-none focus:outline-none focus:border-[#FF4D00]/60 transition-colors placeholder:text-neutral-700 placeholder:font-mono placeholder:text-xs"
                    />
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                    <label className="text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">Cualquier Detalle Adicional</label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Alergias, celebraciones, prefieres estar cerca a la ventana..."
                        rows={3}
                        className="bg-[#111] border border-neutral-800 text-white font-sans px-4 py-4 rounded-none focus:outline-none focus:border-[#FF4D00]/60 transition-colors placeholder:text-neutral-700 placeholder:font-mono placeholder:text-xs resize-none"
                    />
                </div>

                <p className="text-neutral-600 text-[9px] text-center font-mono mt-4 mb-2 tracking-widest uppercase">
                    Ningún campo es obligatorio. Confirmaremos disponibilidad por WhatsApp.
                </p>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full mt-2 py-4 flex items-center justify-center gap-3 border border-[#FF4D00]/40 bg-[#FF4D00]/5 text-white font-bold text-sm tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(255,77,0,0.1)] transition-all hover:bg-[#FF4D00] hover:text-black hover:border-[#FF4D00] hover:shadow-[0_0_25px_rgba(255,77,0,0.4)]"
                >
                    Enviar Reserva al WhatsApp <Send className="w-4 h-4" />
                </button>

            </motion.form>
        </div>
    );
}
