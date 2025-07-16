import AccountIcon from "./icons/AccountIcon";
import Link from "next/link";

export default function Hero() {
  return (
    <header
      className={`h-[150vh] col-span-5 row-span-5 bg-cover bg-center bg-[url("https://assets.iflscience.com/assets/articleNo/73209/aImg/74597/longest-ocean-range-meta.jpg")]`}
    >
      <nav className="flex flex-row justify-between items-start mx-4 my-2">
        <h1>MNTN</h1>
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
      <aside>
        <p className="[writing-mode:vertical-lr]">Follow us</p>
      </aside>
    </header>
  );
}
