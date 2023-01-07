import Image from "next/image";
import Link from "next/link";
import { StructuredText } from 'react-datocms';

export default function ArticleCard({ data }: any) {
  const publishedDate = (new Date(data._firstPublishedAt)).toLocaleString('en-UK', { dateStyle: "long" });

  return (
    <Link href={`posts/${data.id}`}>
      <button className="w-72 h-fit p-4 bg-[white] rounded-3xl 2xl:w-96 duration-300 hover:-translate-y-1 hover:scale-105">
        <Image className="w-full mb-3 rounded-xl" priority={false} src={data.image.url} alt={data.image.alt} width={data.image.width} height={data.image.height} />
        <div className="flex flex-row flex-wrap justify-start gap-x-3 gap-y-2 mb-2">
          {
            data.tags.map( (item: string) => 
              <div className="py-1 px-3 bg-[#208ce5] text-xs 2xl:text-sm text-white rounded-md font-semibold" key={item}>{item}</div>
            )
          }
        </div>
        <p className="text-[#1A1C2B] text-left text-xl leading-tight 2xl:text-2xl 2xl:leading-tight line-clamp-1 font-bold">{data.title}</p>
        <p className="text-[#1A1C2B] text-left text-sm leading-tight 2xl:text-base 2xl:leading-tight mb-2 font-semibold">{publishedDate}</p>
        <p className="text-[#1A1C2B] text-justify text-sm font-normal leading-tight 2xl:text-base 2xl:leading-tight line-clamp-3"><StructuredText data={data.content} /></p>
      </button>
    </Link>
  );
}