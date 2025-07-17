export default function Footer() {
  return (
    <footer className="col-span-10 col-start-2 row-start-6 grid grid-cols-6 grid-rows-4 gap-4 mt-[10rem] ml-8">
      <h2 className="row-span-2">MNTN</h2>
      <div className="row-span-4 col-start-4">
        <h3 className="text-yellow-200 text-lg font-semibold">
          More on The Blog
        </h3>
        <ul>
          <li>About MNTN</li>
          <li>Contributions & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="row-span-3 col-start-6">
        <h3 className="text-yellow-200 text-lg font-semibold">More on MNTN</h3>
        <ul>
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="col-span-2 row-start-4">
        <p>Copyright 2025 Connor Industries, Inc. Terms & Privacy</p>
      </div>
    </footer>
  );
}
