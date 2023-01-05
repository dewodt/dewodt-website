import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import Item from "components/item";

export default function NavBar({ onPage }: { onPage: string }) {
  const [expandNav, setExpandNav] = useState(false);

  function handleClickNav() {
    setExpandNav(!expandNav);
  }

  const expandNavStyle = "flex flex-col gap-y-3 absolute top-20 w-screen py-4 px-6 bg-[#1F2133] md:static md:flex md:flex-row md:gap-x-14 md:bg-[#1A1C2B] md:ml-[15vw]";
  const notExpandNavStyle = "hidden md:static md:flex md:flex-row md:gap-x-14 md:bg-[#1A1C2B] md:ml-[15vw]";

  return (
    <nav className="h-20 w-screen sm:flex sm:items-center">
      <Link href="/">
        <button className="absolute top-[calc(2.5rem-1.125rem)] left-6">
          <Image className="w-9" src={Logo} alt="Dewo's Logo" />
        </button>
      </Link>
      <ul className={expandNav ? expandNavStyle : notExpandNavStyle}>
        <Item url="/" page="Home" onPage={onPage} />
        <Item url="/posts" page="Posts" onPage={onPage} />
        <Item url="/comingsoon" page="Coming Soon" onPage={onPage} />
      </ul>
      {expandNav ? (
        <button
          className="absolute top-[calc(2.5rem-1.125rem)] right-6 md:hidden"
          onClick={handleClickNav}
        >
          <svg
            className="h-9 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </button>
      ) : (
        <button
          className="absolute top-[calc(2.5rem-1rem)] right-6 md:hidden"
          onClick={handleClickNav}
        >
          <svg
            className="h-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      )}
    </nav>
  );
}
