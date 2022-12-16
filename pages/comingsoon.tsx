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
      <div className="flex items-center justify-center text-center text-[6.94vh] h-[91.85vh]">
        <div>
          This page <span className="text-[#208ce5]">will be <br /></span>
          released <span className="text-[#208ce5]">soon!</span>
        </div>
      </div>
    </>
  );
}
