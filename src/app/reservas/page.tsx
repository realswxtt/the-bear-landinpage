import type { Metadata } from 'next';
import ReservationForm from '@/components/ReservationForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Reservas | THE BEAR',
    description: 'Asegura tu mesa en THE BEAR Cevichería.',
};

export default function ReservasPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
                {/* Background elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4D00]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f2ff]/5 blur-[120px] rounded-full pointer-events-none" />

                {/* Textura de ruido ligera para ambientación brutalista */}
                <div
                    className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.05]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
                />

                <ReservationForm />
            </main>
            <Footer />
        </>
    );
}
