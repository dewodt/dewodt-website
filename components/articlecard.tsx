import Image from "next/image";
import Link from "next/link";
import { StructuredText } from 'react-datocms';

export default function ArticleCard({ data }: any) {
  const publishedDate = (new Date(data._firstPublishedAt)).toLocaleString('en-UK', { dateStyle: "long" });

  return (
    <Link href={`posts/${data.id}`}>
      <button className="w-72 h-fit p-4 bg-[white] rounded-3xl xl:w-96 duration-300 hover:-translate-y-1 hover:scale-105">
        <Image className="w-full mb-3 rounded-xl" priority={false} src={data.image.url} alt={data.image.alt} width={data.image.width} height={data.image.height} />
        <div className="flex flex-row flex-wrap justify-start gap-x-3 mb-2">
          {
            data.tags.map( (item: string) => 
              <div className="py-1 px-3 bg-[#208ce5] text-xs xl:text-sm text-white rounded-md font-semibold" key={item}>{item}</div>
            )
          }
        </div>
        <div className="text-[#1A1C2B] text-left text-xl leading-tight xl:text-2xl xl:leading-tight line-clamp-1 font-bold">{data.title}</div>
        <div className="text-[#1A1C2B] text-left text-sm leading-tight xl:text-base xl:leading-tight mb-2 font-semibold">{publishedDate}</div>
        <div className="text-[#1A1C2B] text-justify text-sm leading-tight xl:text-base xl:leading-tight line-clamp-3"><StructuredText data={data.content} /></div>
      </button>
    </Link>
  );
}