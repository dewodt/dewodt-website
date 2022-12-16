import Link from "next/link";

export default function Item({ url, page, onPage }: { url: string, page: string, onPage: string }) {
	const onPageStyle = "list-none text-[#208ce5] pb-[0.46vh] border-b-[0.46vh] divide-solid border-[#208ce5]";
	const notOnPageStyle = "list-none text-[white] pb-[0.46vh] border-b-[0.46vh] divide-solid border-[#23253a]";
	
	return (
		<li className={page === onPage ? onPageStyle : notOnPageStyle}>
			<Link href={url}>{page}</Link>
		</li>
	)
}