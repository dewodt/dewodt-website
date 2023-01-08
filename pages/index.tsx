import Image from "next/image";
import PageHead from "components/pagehead";
import NavBar from "components/navbar";
import ContactButton from "components/contactbutton";
import Profile from "components/profile";
import Photo from "public/dewo.jpg";

export default function Home() {
  return (
    <>
      <PageHead
        headTitle="Home | Dewantoro Triatmojo"
        headDescription="This is Dewantoro Triatmojo's personal website!"
        headTag="home, personal website, portofolio, curriculum vitae"
      />
      <NavBar onPage={"Home"} />
      <div className="flex min-h-[calc(100vh-5rem)] w-screen flex-col items-center justify-center gap-y-6 pb-10 pt-5 sm:flex-row sm:gap-x-8 lg:gap-x-12">
        <Image
          src={Photo}
          alt="Dewo"
          className="w-64 rounded-[50%] border-8 border-solid border-[#208ce5] md:w-72 2xl:w-96"
          priority={true}
        />
        <div className="block">
          <Profile />
          <ContactButton />
        </div>
      </div>
    </>
  );
}
