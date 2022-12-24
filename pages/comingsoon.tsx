import PageHead from "components/pagehead";
import NavBar from "components/navbar";

export default function ComingSoon() {
  return (
    <>
      <PageHead />
      <NavBar onPage={"Coming Soon"} />
      <div className="flex min-h-[90vh] items-center justify-center text-center text-[3.5vh] sm:text-[4.63vh]">
        <div>
          This page{" "}<span className="text-[#208ce5]">will be</span><br />
          released <span className="text-[#208ce5]">soon!</span>
        </div>
      </div>
    </>
  );
}
