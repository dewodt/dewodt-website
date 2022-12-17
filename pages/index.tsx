import Image from "next/image";
import Head from "next/head";
import NavBar from "components/navbar";
import Photo from "public/dewo.jpg";
import ContactButton from "components/contactbutton";
import Profile from "components/profile"

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
          <Profile />
          <div className="flex flex-row justify-around">
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
