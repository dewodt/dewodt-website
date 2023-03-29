import Logo from "public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const [expandNav, setExpandNav] = useState(false);
  const navBarRef = useRef<HTMLElement>(null);
  const router = useRouter();

  // Close navbar when user clicks outside navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (!navBarRef.current?.contains(event.target as Node)) {
        setExpandNav(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navBarRef}
      className="relative flex h-20 w-screen items-center justify-between px-6"
    >
      {/* Dewo Logo */}
      <Link className="h-10 w-10" href="/">
        <button aria-label="Dewo's Logo" className="h-10 w-10">
          <Image className="h-10 w-10" src={Logo} alt="DT Icon" />
        </button>
      </Link>

      {/* Navigation */}
      <ul
        className={`absolute top-20 left-0 z-50 flex w-screen flex-col gap-y-4 bg-[#1F2133] py-5 px-6 duration-700 ease-in-out md:static md:ml-20 md:translate-x-0 md:flex-row md:gap-x-14 md:bg-[#1A1C2B] md:transition-none lg:ml-48 ${
          expandNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="list-none text-xl font-semibold 2xl:text-2xl">
          <Link
            href="/"
            className={`lg:duration-300 lg:ease-in-out lg:hover:text-[#208ce5]
              ${router.pathname === "/" ? "text-[#208ce5]" : "text-white"}
            `}
          >
            Home
          </Link>
        </li>
        <li className="list-none text-xl font-semibold 2xl:text-2xl">
          <Link
            href="/posts"
            className={`lg:duration-300 lg:ease-in-out lg:hover:text-[#208ce5]
              ${
                router.pathname.includes("/posts")
                  ? "text-[#208ce5]"
                  : "text-white"
              }
            `}
          >
            Posts
          </Link>
        </li>
      </ul>

      {/* Open Close Button */}
      <button
        aria-label="Menu / Close Button"
        className="flex h-[27px] w-[30px] cursor-pointer flex-col gap-y-[6px] md:hidden"
        onClick={() => setExpandNav(!expandNav)}
      >
        <span
          className={`h-[5px] w-full origin-left rounded-full bg-white opacity-100 transition duration-300 ease-in-out ${
            expandNav ? "rotate-45 scale-x-105" : "rotate-0 scale-x-100"
          }`}
        />
        <span
          className={`h-[5px] w-full rounded-full bg-white opacity-100 transition duration-300 ease-in-out ${
            expandNav ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-[5px] w-full origin-left rounded-full bg-white opacity-100 transition duration-300 ease-in-out ${
            expandNav ? "rotate-[-45deg] scale-x-105" : "rotate-0 scale-x-100"
          }`}
        />
      </button>
    </nav>
  );
};

export default NavBar;
