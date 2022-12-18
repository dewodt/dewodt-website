import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] text-center">
      <p className="text-[#208ce5] text-[3.5vh] sm:text-[4.63vh]">404 - Page Not Found</p>
      <p className="text-[2vh] sm:text-[2.78vh] mb-[1.4vh]">The page you&apos;re looking for doesn&apos;t exist</p>
      <Link href="/">
        <button className="px-[4vh] text-[2vh] h-[4.5vh] rounded-[1vh] sm:h-[5.56vh] sm:text-[2.78vh] bg-[#208ce5] sm:rounded-[2vh] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#208ce5]">Home</button>
      </Link>
    </div>
  );
}