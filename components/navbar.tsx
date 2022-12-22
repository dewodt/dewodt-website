import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import Item from "components/item";

export default function NavBar({ onPage }: { onPage: string }) {
  const [expandNav, setExpandNav] = useState(false);

  function handleClickNav() {
    setExpandNav(!expandNav);
  }

  const expandNavStyle = "flex flex-col absolute top-[8.15vh] py-[1.825vh] px-[1.825vh] gap-y-[0.91vh] w-[100vw] bg-[#1F2133] sm:static sm:flex sm:flex-row sm:gap-x-[3.15vw] sm:bg-[#1A1C2B]";
  const notExpandNavStyle = "hidden sm:static sm:flex sm:flex-row sm:gap-x-[3.15vw] sm:bg-[#1A1C2B]";

  return (
    <nav className="min-h-[8.15vh] w-[100vw] sm:flex sm:items-center sm:gap-x-[10vw]">
      <Link href="/">
        <button className="w-[4.5vh] absolute top-[1.825vh] left-[1.825vh] sm:static sm:ml-[1.825vh]">
            <Image
              src={Logo}
              alt="Dewo's Logo"
            />
        </button>
      </Link>
      <ul className={expandNav ? expandNavStyle : notExpandNavStyle}>
        <Item url="/" page="Home" onPage={onPage} />
        <Item url="/comingsoon" page="Coming Soon" onPage={onPage} />
      </ul>
      { expandNav ? (
          <button className="w-[3vh] absolute top-[1.6vh] right-[1.825vh] sm:hidden" onClick={handleClickNav}>
            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
            </svg>
          </button>
          ) : (
        <button className="w-[3.5vh] absolute top-[1.825vh] right-[1.825vh] sm:hidden" onClick={handleClickNav}>
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </button>)}
    </nav>
  );
}
