import Image from "next/image";
import NavBar from "components/navbar";
import PageHead from "components/pagehead";
import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms";

export default function Article({ data }: any) {
  const publishedDate = new Date(data._firstPublishedAt).toLocaleString("en-UK", { dateStyle: "long" });

  return (
    <>
      <PageHead
        headTitle={`${data.title} | Dewantoro Triatmojo`}
        headDescription={data.headDescription}
        headTag={data.tags.join(", ")}
      />
      <NavBar onPage="Posts" />
      <div className="absolute top-20 w-full min-h-[calc(100%-5rem)] flex flex-col items-center pt-6 pb-12">
        <div className="w-[80vw] sm:w-[60vw] lg:w-[50vw] 2xl:w-[40vw]">
          <p className="mb-2 text-3xl font-bold text-[#208ce5] 2xl:text-4xl">
            {data.title}
          </p>
          <p className="mb-2 text-base font-semibold 2xl:text-lg">
            {publishedDate}
          </p>
          <div className="mb-7 flex flex-row flex-wrap justify-start gap-x-4 gap-y-3">
            {data.tags.map((item: string) => (
              <div
                className="rounded-md bg-[#208ce5] py-1 px-3 text-sm font-semibold 2xl:text-base"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <Image
            className="mb-7 h-auto w-full rounded-2xl sm:rounded-3xl"
            src={data.image.url}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            loading="eager"
          />
          <div className="text-justify text-lg leading-relaxed 2xl:text-xl 2xl:leading-relaxed">
            <StructuredText data={data.content} />
          </div>
        </div>
      </div>
    </>
  );
}

const POSTS_QUERY = `query Posts {
  allPosts(orderBy: _firstPublishedAt_DESC) {
    id
    title
    content {
      value
    }
    tags
    image {
      id
      url
      alt
      width
      height
    }
    updatedAt
    _firstPublishedAt
    headDescription
  }
}`;

const PATHS_QUERY = `query Posts {
  allPosts(orderBy: _firstPublishedAt_DESC) {
    id
  }
}`;

export async function getStaticPaths() {
  const dataQuery = await request({
    query: PATHS_QUERY,
  });

  const postIds = dataQuery["allPosts"].map((item: any) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths: postIds,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const dataQuery = await request({
    query: POSTS_QUERY,
  });

  const [data] = dataQuery["allPosts"].filter((item: any) => {
    return item.id === params.id;
  });

  return {
    props: { data },
  };
}
