import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] text-center">
      <p className="text-[#208ce5] text-[3.5vh] lg:text-[4.63vh]">404 - Page Not Found</p>
      <p className="text-[2vh] lg:text-[2.78vh] mb-[15px]">The page you are looking for doesn&apos;t exist</p>
      <Link href="/">
        <button className="lg:w-[90px] w-[80px] text-[2vh] h-[4.5vh] rounded-[1vh] lg:h-[5.56vh] lg:text-[2.78vh] bg-[#208ce5] lg:rounded-[2vh] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#208ce5]">Home</button>
      </Link>
    </div>
  );
}