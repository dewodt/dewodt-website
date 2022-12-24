import Image from "next/image";

export default function ArticleCard({ data }: any) {
  const publishedDate = (new Date(data._firstPublishedAt)).toLocaleString("id-ID", { dateStyle: "long" });
  return (
    <div className="w-[75vw] h-fit p-[2.3vh] bg-[white] rounded-[2.78vh] sm:w-[41.67vh]">
      <Image className="w-[37.03vh] mb-[1.38vh] rounded-[1.85vh]" src={data.image.url} alt={data.image.alt} width={data.image.width} height={data.image.height} />
      <div className="flex flex-row gap-x-[4vw] mb-[0.92vh] sm:gap-x-[0.78vw]">
        {
          data.tags.map( (item: string) => 
            <div className="py-[0.55vh] px-[3vw] w-fit bg-[#208ce5] text-[1.4vh] rounded-[0.925vh] sm:px-[0.7vw]" key={item}>{item}</div>
          )
        }
      </div>
      <p className="text-[#1A1C2B] text-[2.78vh] leading-tight line-clamp-1">{data.title}</p>
      <p className="text-[#1A1C2B] text-[1.39vh] leading-tight mb-[0.92vh]">{publishedDate}</p>
      <p className="text-[#1A1C2B] text-[1.85vh] leading-tight font-semibold line-clamp-3 text-justify">{data.content}</p>
    </div>
  );
}