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
      <div className="absolute top-20 flex min-h-[calc(100%-5rem)] w-full flex-col items-center justify-center gap-y-6 pb-10 pt-5 sm:flex-row sm:gap-x-8 lg:gap-x-12">
        <Image
          src={Photo}
          alt="Dewo"
          className="w-64 animate-fadeInDown rounded-[50%] border-8 border-solid border-[#208ce5] animate-fast animate-ease-out sm:animate-fadeInLeft sm:animate-fast sm:animate-ease-out md:w-72 2xl:w-96"
          priority={true}
          loading="eager"
        />
        <div className="block">
          <Profile />
          <ContactButton />
        </div>
      </div>
    </>
  );
}
