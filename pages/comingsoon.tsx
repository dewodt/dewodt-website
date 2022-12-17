import Head from "next/head";
import NavBar from "components/navbar";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Dewo</title>
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <NavBar onPage={"Coming Soon"} />
      <div className="flex h-[91.85vh] items-center justify-center text-center text-[4vh] lg:text-[6.94vh]">
        <div>
          This page{" "}<span className="text-[#208ce5]">will be</span><br />
          released <span className="text-[#208ce5]">soon!</span>
        </div>
      </div>
    </>
  );
}
