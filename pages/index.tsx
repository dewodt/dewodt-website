import Image from "next/image";
import Head from "next/head";
import NavBar from "components/navbar";
import Photo from "public/dewo.jpg";
import ContactButton from "components/contactbutton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dewo</title>
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <NavBar onPage={"Home"} />
      <div className="flex h-[91.85vh] flex-col items-center justify-center lg:flex-row">
        <Image
          src={Photo}
          alt="Dewo"
          className="mb-[3vh] w-[35vh] rounded-[50%] border-[0.92vh] border-solid border-[#208ce5] lg:mr-[3.91vw] lg:mb-[0vh] lg:w-[46.3vh]"
        />
        <div className="flex flex-col">
          <div className="text-[2vh] lg:text-[2.78vh]">
            <p className="text-[3.5vh] text-[#208ce5] lg:text-[4.63vh]">
              Dewantoro Triatmojo
            </p>
            <p>
              They call me <span className="text-[#208ce5]">Dewo</span>
            </p>
            <br />
            <p>
              Currently Studying{" "}<span className="text-[#208ce5]">Informatics</span> in <br />
              <span className="text-[#208ce5]">Bandung Institute of Technology</span>
            </p>
            <br />
            <p>
              Intrested in{" "}
              <span className="text-[#208ce5]">Software Engineering</span>
              <br />
              and <span className="text-[#208ce5]">Web Development</span>
            </p>
            <br />
          </div>
          <div className="flex flex-row justify-between lg:justify-center lg:gap-x-[2vw]">
            <ContactButton items="Github" />
            <ContactButton items="LinkedIn" />
            <ContactButton items="Mail" />
            <ContactButton items="Insta" />
          </div>
        </div>
      </div>
    </>
  );
}
