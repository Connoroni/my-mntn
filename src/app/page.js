import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-10 gap-4 h-[300vh] w-screen">
      <Hero />
      <div className="col-span-5 row-start-6">3</div>
      <div className="col-span-5 row-span-4 row-start-7">4</div>
    </div>
  );
}
