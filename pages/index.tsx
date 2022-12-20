import Image from "next/image";
import PageHead from "components/pagehead";
import NavBar from "components/navbar";
import ContactButton from "components/contactbutton";
import Profile from "components/profile";
import Photo from "public/dewo.jpg";

export default function Home() {
  return (
    <>
      <PageHead />
      <NavBar onPage={"Home"} />
      <div className="flex min-h-[91.85vh] flex-col flex-wrap items-center justify-center gap-y-[3vh] py-[6vh] sm:flex-row">
        <Image
          src={Photo}
          alt="Dewo"
          className="w-[35vh] rounded-[50%] border-[8px] border-solid border-[#208ce5] sm:mr-[3.91vw] sm:w-[46.3vh]"
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
