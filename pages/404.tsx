import Link from "next/link";
import PageHead from "components/pagehead";

export default function Custom404() {
  return (
    <>
      <PageHead 
        headTitle="Error 404 | Dewantoro Triatmojo"
        headDescription="This is error 404 page"
        headTag="error 404"
      />
      <div className="flex flex-col items-center justify-center h-[100vh] text-center font-bold">
        <p className="text-[#208ce5] text-3xl leading-normal md:text-5xl md:leading-normal">404 - Page Not Found</p>
        <p className="text-lg leading-normal mb-4 md:mb-6 md:text-2xl md:leading-normal">The page you&apos;re looking for doesn&apos;t exist</p>
        <Link href="/">
          <button className="text-lg text-white px-7 py-2 rounded-xl md:text-2xl bg-[#208ce5] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#208ce5]">Home</button>
        </Link>
      </div>
    </>
  );
}