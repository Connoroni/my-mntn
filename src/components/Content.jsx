import YellowText from "./YellowText";
import ArrowRight from "./icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";

export default function Content({
  align,
  number,
  label,
  title,
  body,
  image,
  gridrow,
}) {
  return (
    <div
      id={number}
      className={`col-span-10 col-start-2 row-start-${gridrow} h-[50vh] relative flex flex-row mb-12`}
    >
      <div className="mt-[15%] ml-16 mr-8 relative">
        <h2 className="absolute text-gray-500/60 -z-10 text-[15rem] -left-6 bottom-2">
          {number}
        </h2>
        <div className="w-1/3">
          <YellowText label={label} />
        </div>
        <h2 className="text-4xl mb-3">{title}</h2>
        <p>{body}</p>
        <Link
          href="#"
          className="flex flex-row justify-start gap-1 items-center text-yellow-200"
        >
          read more <ArrowRight />
        </Link>
      </div>
      <Image
        src={image}
        alt="people hiking on a mountain"
        width={566}
        height={720}
        className={`w-[30vw] h-auto ${
          align === "left" ? "order-first" : "order-last"
        }`}
      />
    </div>
  );
}
