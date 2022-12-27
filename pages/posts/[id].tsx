import Image from "next/image";
import NavBar from "components/navbar";
import PageHead from "components/pagehead";
import { request } from "../../lib/datocms";
import { StructuredText } from 'react-datocms';

export default function Article({data}: any) {
  const publishedDate = (new Date(data._firstPublishedAt)).toLocaleString("id-ID", { dateStyle: "long" });

  return(
    <>
      <PageHead />
      <NavBar onPage="Posts"/>
      <div className="flex flex-col items-center min-h-[90vh] pt-[6vh] pb-[8vh]">
        <div className="w-[75vw] xl:w-[52.08vw]">
          <p className="text-[3.8vh] text-[#208ce5] mb-[0.925vh] font-bold sm:text-[4.63vh]">{data.title}</p>
          <p className="mb-[1.39vh] text-[1.8vh] font-semibold sm:text-[2.31vh]">{publishedDate}</p>
          <div className="flex flex-row flex-wrap justify-start gap-x-[20px] mb-[4.17vh] font-semibold sm:gap-x-[1.5vw]">
            {
              data.tags.map( (item: string) => 
                <div className="py-[0.55vh] px-[3vw] w-fit bg-[#208ce5] text-[1.5vh] rounded-[0.925vh] sm:text-[1.85vh] sm:px-[1vw]" key={item}>{item}</div>
              )
            }
          </div>
          <Image className="w-[auto] max-h-[50vh] mx-auto rounded-[2.78vh] mb-[2.78vh]" src={data.image.url} alt={data.image.alt} width={data.image.width} height={data.image.height}/>
          <div className="text-justify text-[2vh] leading-[1.8] font-[] sm:text-[2.5vh]"><StructuredText data={data.content} /></div>
        </div>
      </div>
    </>
  )
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

  const postIds = dataQuery["allPosts"].map( (item: any) => {
    return {
      params: {
        id: item.id
      }
    }
  })

  return {
    paths: postIds,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const dataQuery = await request({
    query: POSTS_QUERY,
  });

  const [data] = dataQuery["allPosts"].filter( (item: any) => {
    return item.id === params.id;
  })

  return {
    props: { data }
  };
}