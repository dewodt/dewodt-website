import Image from "next/image";
import Logo from "public/logo.svg";
import Item from "components/item";

export default function NavBar({ onPage }: { onPage: string }) {
  return (
    <div className="flex flex-row items-start gap-x-[10vw] text-[2.77vh] height-[8.15vh]">
      <Image
        src={Logo}
        alt="dewodt's logo"
        className="mt-[1.85vh] ml-[1.85vh] w-[4.63vh]"
      />
      <ul className="flex flex-row gap-x-[3.15vw] mt-[2.31vh]">
        <Item url="/" page="Home" onPage={onPage} />
        <Item url="/comingsoon" page="Coming Soon" onPage={onPage} />
      </ul>
    </div>
  );
}
