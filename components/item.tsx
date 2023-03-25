import Link from "next/link";

interface typeItem {
  url: string;
  page: string;
  onPage: string;
}

export default function Item({ url, page, onPage }: typeItem) {
  const onPageStyle =
    "text-[#208ce5] md:border-solid md:border-b-4 md:border-[#208ce5] md:pb-1";
  const notOnPageStyle = "text-white";

  return (
    <li className="list-none text-xl font-semibold 2xl:text-2xl">
      <Link
        className={page === onPage ? onPageStyle : notOnPageStyle}
        href={url}
      >
        {page}
      </Link>
    </li>
  );
}
