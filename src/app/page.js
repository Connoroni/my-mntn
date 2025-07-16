import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-4 h-[300vh] w-screen">
      <Hero />
      <div className="col-span-10 row-span-2 col-start-2 row-start-3">3</div>
      <Footer />
    </div>
  );
}
