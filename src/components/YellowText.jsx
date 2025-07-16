export default function YellowText({ label }) {
  return (
    <div className="flex flex-row justify-start gap-3 items-center">
      <hr className="h-[2px] w-1/6 bg-yellow-200" />
      <h3 className="uppercase text-yellow-200">{label}</h3>
    </div>
  );
}
