import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div className="grid grid-cols-12 [grid-template-rows: repeat(6, 50vh)] gap-8 h-[300vh] w-screen scroll-smooth">
      <Hero />
      <Content
        align="right"
        number="01"
        label="get started"
        title="What level of hiker are you?"
        body="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        image="https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2025/06/da10e669-048e-4843-bc14-9b8f905d8089.jpg"
        gridrow="3"
      />
      <Content
        align="left"
        number="02"
        label="hiking essentials"
        title="Picking the right Hiking Gear!"
        body="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        image="https://img.freepik.com/premium-photo/happy-man-portrait-peace-sign-mountain-hiking-travel-outdoor-backpacking-nature-male-person-hiker-smile-with-backpack-trekking-journey-adventure-happiness-by-lake_590464-243222.jpg"
        gridrow="4"
      />
      <Content
        align="right"
        number="03"
        label="where you go is the key"
        title="Understand Your Map & Timing"
        body="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction."
        image="https://media.istockphoto.com/id/2164449337/photo/midsection-of-woman-holding-navigational-compass-on-mountain.jpg?b=1&s=612x612&w=0&k=20&c=MLTAUF2_9n0_LWyznIAeYYPcC7nlcuE2U9cWUyHPxBs="
        gridrow="5"
      />
      <Footer />
    </div>
  );
}
