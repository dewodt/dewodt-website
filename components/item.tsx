import Link from "next/link";

export default function Item({ url, page, onPage }: { url: string, page: string, onPage: string }) {
	const onPageStyle = "list-none text-[#208ce5] text-[2.3vh] sm:text-[2.78vh] sm:border-b-[0.46vh] sm:border-solid sm:border-[#208ce5]";
	const notOnPageStyle = "list-none text-[white] text-[2.3vh] sm:text-[2.78vh]";
	
	return (
		<li className={page === onPage ? onPageStyle : notOnPageStyle}>
			<Link href={url}>{page}</Link>
		</li>
	)
}