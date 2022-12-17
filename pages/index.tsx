import Image from "next/image";
import Head from "next/head";
import NavBar from "components/navbar";
import Photo from "public/dewo.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dewo</title>
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <NavBar onPage={"Home"} />
      <div className="flex items-center justify-center h-[91.85vh]">
        <Image src={Photo} alt="Dewo" className="w-[46.3vh] rounded-[50%] border-[0.92vh] border-[#208ce5] border-solid mr-[3.91vw]"/>
        <div className="flex flex-col">
          <div className="text-[2.78vh]">
            <p className="text-[4.63vh] text-[#208ce5]">Dewantoro Triatmojo</p>
            <p>They call me <span className="text-[#208ce5]">Dewo</span></p>
            <br />
            <p>Currently Studying <span className="text-[#208ce5]">Informatics</span> in <br />
            <span className="text-[#208ce5]">Bandung Institute of Technology</span></p>
            <br />
            <p>Intrested in <span className="text-[#208ce5]">Software Engineering</span><br />
            and <span className="text-[#208ce5]">Web Development</span></p>
            <br />
          </div>
          <div className="flex flex-row justify-center gap-x-[2.34vw]">
          </div>
        </div>
      </div>
    </>
  );
}
