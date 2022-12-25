import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ data }: any) {
  const publishedDate = (new Date(data._firstPublishedAt)).toLocaleString("id-ID", { dateStyle: "long" });
  return (
    <Link href={`posts/${data.id}`}>
      <button className="w-[75vw] h-fit p-[2.3vh] bg-[white] rounded-[2.78vh] sm:w-[41.67vh] duration-300 hover:-translate-y-1 hover:scale-105">
        <Image className="w-[100%] mb-[1.38vh] rounded-[1.85vh]" priority={false} src={data.image.url} alt={data.image.alt} width={data.image.width} height={data.image.height} />
        <div className="flex flex-row flex-wrap justify-start gap-x-[4vw] mb-[0.92vh] sm:gap-x-[0.78vw]">
          {
            data.tags.map( (item: string) => 
              <div className="py-[0.55vh] px-[3vw] w-fit bg-[#208ce5] text-[1.4vh] rounded-[0.925vh] sm:px-[0.7vw]" key={item}>{item}</div>
            )
          }
        </div>
        <p className="text-[#1A1C2B] text-left text-[2.78vh] leading-tight line-clamp-1">{data.title}</p>
        <p className="text-[#1A1C2B] text-left text-[1.39vh] leading-tight mb-[0.92vh]">{publishedDate}</p>
        <p className="text-[#1A1C2B] text-justify text-[1.85vh] leading-tight line-clamp-3">{data.content}</p>
      </button>
    </Link>
  );
}