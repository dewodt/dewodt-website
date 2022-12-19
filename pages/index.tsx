import Image from "next/image";
import Head from "next/head";
import NavBar from "components/navbar";
import ContactButton from "components/contactbutton";
import Profile from "components/profile";
import Photo from "public/dewo.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dewo</title>
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <NavBar onPage={"Home"} />
      <div className="flex gap-y-[3vh] py-[6vh] min-h-[91.85vh] flex-col flex-wrap items-center justify-center sm:flex-row">
        <Image
          src={Photo}
          alt="Dewo"
          className="w-[35vh] rounded-[50%] border-[8px] border-solid border-[#208ce5] sm:mr-[3.91vw] sm:w-[46.3vh]"
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
