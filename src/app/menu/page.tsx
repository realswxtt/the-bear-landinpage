import Navbar from "@/components/Navbar";
import DigitalMenu from "@/components/DigitalMenu";
import Footer from "@/components/Footer";

export default function MenuPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#0a0a0a] w-full overflow-hidden">
            <Navbar />

            {/* Spacer para no quedar detras del Navbar fijo */}
            <div className="pt-24 bg-[#0a0a0a]">
                <DigitalMenu />
            </div>

            <Footer />
        </main>
    );
}
