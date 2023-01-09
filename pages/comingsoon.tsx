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
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center text-center text-3xl font-bold leading-normal 2xl:text-5xl 2xl:leading-normal animate-fadeIn animate-ease-out animate-fast">
        <div>
          This page <span className="text-[#208ce5]">will be</span>
          <br />
          released <span className="text-[#208ce5]">soon!</span>
        </div>
      </div>
    </>
  );
}
