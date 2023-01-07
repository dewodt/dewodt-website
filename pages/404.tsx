import Link from "next/link";
import PageHead from "components/pagehead";

export default function Custom404() {
  return (
    <>
      <PageHead 
        headTitle="404 | Dewantoro Triatmojo"
        headDescription="This is error 404 page"
        headTag="error 404"
      />
      <div className="flex flex-col items-center justify-center h-[100vh] text-center font-bold px-3">
        <p className="text-[#208ce5] text-3xl leading-normal lg:text-5xl lg:leading-normal">404 - Page Not Found</p>
        <p className="text-lg leading-normal mb-4 lg:mb-6 lg:text-2xl lg:leading-normal">The page you&apos;re looking for doesn&apos;t exist</p>
        <Link href="/">
          <button className="text-lg text-white px-6 py-2 rounded-xl lg:px-8 lg:text-2xl bg-[#208ce5] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#208ce5]">Home</button>
        </Link>
      </div>
    </>
  );
}