import PageHead from "components/pagehead";
import NavBar from "components/navbar";

export default function ComingSoon() {
  return (
    <>
      <PageHead
        headTitle="Coming Soon | Dewantoro Triatmojo"
        headDescription="This page will be released soon!"
        headTag="coming soon"
      />
      <NavBar onPage={"Coming Soon"} />
      <div className="absolute top-20 flex h-[calc(100%-5rem)] w-full animate-zoomIn items-center justify-center text-center text-3xl font-bold leading-normal animate-fast animate-ease-out 2xl:text-5xl 2xl:leading-normal">
        <div>
          This page <span className="text-[#208ce5]">will be</span>
          <br />
          released <span className="text-[#208ce5]">soon!</span>
        </div>
      </div>
    </>
  );
}
