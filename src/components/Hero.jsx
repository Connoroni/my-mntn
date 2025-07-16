import AccountIcon from "./icons/AccountIcon";
import Instagram from "./icons/Instagram";
import Bluesky from "./icons/Bluesky";
import ArrowDown from "./icons/ArrowDown";
import YellowText from "./YellowText";
import Link from "next/link";

export default function Hero() {
  return (
    <header
      className={`col-span-12 row-span-2 h-[150vh] bg-cover bg-center bg-[url("https://assets.iflscience.com/assets/articleNo/73209/aImg/74597/longest-ocean-range-meta.jpg")] grid grid-cols-6 grid-rows-7 gap-4`}
    >
      <nav className="flex flex-row justify-between items-start mx-8 my-2 col-span-6">
        <h2>MNTN</h2>
        <div className="flex flex-row justify-around w-1/2">
          <Link href="#">Equipment</Link>
          <Link href="#">About us</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className="flex flex-row justify-center">
          <AccountIcon />
          <p>Account</p>
        </div>
      </nav>
      <aside className="flex flex-col justify-between row-start-3 ml-8">
        <p className="[writing-mode:vertical-lr]">Follow us</p>
        <Instagram />
        <Bluesky />
      </aside>
      <aside className="flex flex-col justify-between items-end row-span-2 col-start-6 row-start-3 mr-8 border-r-2 border-r-white py-4 pr-4 h-3/4">
        <Link href="#">Start</Link>
        <Link href="#">01</Link>
        <Link href="#">02</Link>
        <Link href="#">03</Link>
      </aside>
      <div className="col-span-2 col-start-3 row-start-3">
        <YellowText label="A Hiking Guide" />
        <h1 className="w-[110%] text-5xl leading-relaxed">
          Be Prepared For The Mountains And Beyond
        </h1>
        <Link
          href="#"
          className="flex flex-row justify-start text-sm gap-2 mt-2"
        >
          scroll down <ArrowDown />
        </Link>
      </div>
      <div className="col-span-6 row-start-7 bg-linear-to-t from-black to-[rgba(0, 0, 0, 0)] z-10">
        {/* There should be a gradient here going from black at the bottom to transparent at the top */}
      </div>
    </header>
  );
}
