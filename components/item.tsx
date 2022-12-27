import Link from "next/link";

export default function Item({ url, page, onPage }: { url: string, page: string, onPage: string }) {
	const onPageStyle = "text-[#208ce5] sm:border-solid sm:border-b-[0.46vh] sm:border-[#208ce5] pb-[0.5vh]";
	const notOnPageStyle = "text-[white]";
	
	return (
		<li className="list-none text-[2.3vh] sm:text-[2.78vh]">
			<Link className={page === onPage ? onPageStyle : notOnPageStyle} href={url}>{page}</Link>
		</li>
	)
}