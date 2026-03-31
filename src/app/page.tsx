import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MarqueeText, { MarqueeItem } from "@/components/MarqueeText";

const marqueeItemsTop: MarqueeItem[] = [
  { text: "SABOR DE RETABLO" },
  { text: "CEVICHE BRAVO" },
  { text: "HATUN MIKUY", outline: true },
  { text: "DIRECTO DEL PUERTO A LA SIERRA" },
];

const marqueeItemsBottom: MarqueeItem[] = [
  { text: "EL OSO DE HUAMANGA" },
  { text: "KALLPA MIKUY", outline: true },
  { text: "PICANTE COMO NUESTRA HISTORIA" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0a] w-full overflow-hidden">
      <Navbar />
      <Hero />
      <SignatureDishes />
      <Location />

      {/* Marquee Footers */}
      <section className="w-full bg-[#050505] py-12 flex flex-col gap-3 overflow-hidden border-t border-neutral-900 border-b">
        <MarqueeText items={marqueeItemsTop} className="text-3xl lg:text-5xl font-syne font-black text-white" speed={45} />
        <MarqueeText items={marqueeItemsBottom} direction="right" className="text-3xl lg:text-5xl font-syne font-black text-[#FF4D00]" speed={50} />
      </section>

      <Footer />
    </main>
  );
}
