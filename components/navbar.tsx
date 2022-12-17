import Image from "next/image";
import Logo from "public/logo.svg";
import Item from "components/item";

export default function NavBar({ onPage }: { onPage: string }) {
  return (
    <div className="height-[8.15vh] flex flex-row items-start gap-x-[10vw] text-[2.3vh] lg:text-[2.78vh]">
      <Image
        src={Logo}
        alt="dewodt's logo"
        className="mt-[2.2vh] ml-[1.85vh] w-[4vh] lg:mt-[1.85vh] lg:w-[4.63vh]"
      />
      <ul className="mt-[2.31vh] flex flex-row gap-x-[8vw] lg:gap-x-[3.15vw]">
        <Item url="/" page="Home" onPage={onPage} />
        <Item url="/comingsoon" page="Coming Soon" onPage={onPage} />
      </ul>
    </div>
  );
}
