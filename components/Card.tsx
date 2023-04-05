import Image from "next/image";
import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";
import { render } from "datocms-structured-text-to-plain-text";

interface postsContent {
  id: string;
  title: string;
  content: any;
  tags: string[];
  image: {
    id: string;
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  _firstPublishedAt: string;
}

const Card = ({ data, index }: { data: postsContent; index: number }) => {
  const contentPreview = render(data.content) as string | undefined;

  return (
    <Link href={`posts/${data.id}`}>
      <article className="h-fit w-72 rounded-3xl bg-[white] duration-300 ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 2xl:w-96">
        <Image
            className="h-[144px] w-full rounded-t-3xl object-cover object-center 2xl:h-[192px]"
          priority={index < 6 ? true : false}
            src={data.image.url}
          alt={data.image.alt}
            width={data.image.width}
          height={data.image.height}
            sizes="(max-width: 1536px) 432px, 576px"
        />
        <div className="flex flex-col gap-y-2 px-4 pb-4 pt-3">
          <div className="flex flex-row flex-wrap justify-start gap-x-3 gap-y-2">
            {data.tags.map((item: string) => (
              <div
                className="rounded-md bg-[#208ce5] py-1 px-3 text-xs font-semibold text-white 2xl:text-sm"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-left text-xl font-bold leading-tight text-[#1A1C2B] line-clamp-1 2xl:text-2xl 2xl:leading-tight">
              {data.title}
            </h1>
            <p className="text-left text-sm font-semibold leading-tight text-[#1A1C2B] 2xl:text-base 2xl:leading-tight">
              {new Date(data._firstPublishedAt).toLocaleString("en-UK", {
                dateStyle: "long",
              })}
            </p>
          </div>
          <p>
            <LinesEllipsis
              text={contentPreview}
              maxLine="3"
              ellipsis="..."
              className="text-justify text-sm font-normal leading-tight text-[#1A1C2B] 2xl:text-base 2xl:leading-tight"
            />
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
