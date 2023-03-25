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
      <div className="absolute top-0 flex h-full w-full animate-zoomIn flex-col items-center justify-center px-3 text-center animate-fast animate-ease-out">
        <p className="text-3xl font-bold leading-normal text-[#208ce5] 2xl:text-5xl 2xl:leading-normal">
          404 - Page Not Found
        </p>
        <p className="mb-4 text-lg font-semibold leading-normal 2xl:mb-6 2xl:text-2xl 2xl:leading-normal">
          The page you&apos;re looking for doesn&apos;t exist
        </p>
        <Link href="/">
          <button className="rounded-xl bg-[#208ce5] px-5 py-1 text-lg font-semibold text-white duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#208ce5] 2xl:py-2 2xl:px-8 2xl:text-2xl">
            Home
          </button>
        </Link>
      </div>
    </>
  );
}
