import { ChangeEvent } from "react";
import SearchIcon from "./icons/SearchIcon";
import XIcon from "./icons/XIcon";

interface SearchBox {
  searchValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

const SearchBox = ({ searchValue, handleChange, handleReset }: SearchBox) => {
  return (
    <div className="flex h-10 w-72 items-center rounded-xl bg-white font-semibold sm:w-[25rem] lg:w-[40rem]">
      <div className="mx-3 h-1/2">
        <SearchIcon style="h-full fill-[#1A1C2B]" />
      </div>
      <input className="w-full bg-white text-lg text-[#1A1C2B] focus:outline-none 2xl:text-xl" placeholder="Search Posts" value={searchValue} onChange={handleChange}
      />
      <button
        aria-label="Clear Button"
        className="mx-3 h-2/3"
        onClick={handleReset}
      >
        <XIcon style="h-full fill-[#1A1C2B]" />
      </button>
    </div>
  );
};

export default SearchBox;
