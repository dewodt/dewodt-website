import Image from "next/image";
import PageHead from "components/PageHead";
import { StructuredText } from "react-datocms";
import Layout from "components/Layout";
import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

interface ArticleData {
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
  pageTitle: string;
  pageDescription: string;
  pageTags: string[];
  imageLinkPreview: {
    url: string;
  };
}

const Article: NextPage<{ articleData: ArticleData }> = ({ articleData }) => {
  return (
    <>
      <PageHead
        pageTitle={articleData.pageTitle}
        pageDescription={articleData.pageDescription}
        pageTag={articleData.pageTags}
        linkPreviewImage={articleData.image.url}
      />
      <Layout>
        <div className="flex h-fit min-h-[calc(100vh-5rem)] w-full flex-col items-center pt-6 pb-12">
          <article className="w-[80vw] sm:w-[60vw] lg:w-[50vw] 2xl:w-[40vw]">
            <h1 className="mb-2 text-3xl font-bold text-[#208ce5] 2xl:text-4xl">
              {articleData.title}
            </h1>
            <p className="mb-2 text-base font-semibold 2xl:text-lg">
              {new Date(articleData._firstPublishedAt).toLocaleString("en-UK", {
                dateStyle: "long",
              })}
            </p>
            <div className="mb-7 flex flex-row flex-wrap justify-start gap-x-4 gap-y-3">
              {articleData.tags.map((item: string) => (
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
              src={articleData.image.url}
              alt={articleData.image.alt}
              width={articleData.image.width}
              height={articleData.image.height}
              priority={true}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 40vw"
            />
            <p className="text-justify text-lg leading-relaxed 2xl:text-xl 2xl:leading-relaxed">
              <StructuredText data={articleData.content} />
            </p>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await (
    await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          allPostsContents(orderBy: _firstPublishedAt_DESC) {
            id
          }
        }
        `,
      }),
    })
  ).json();

  const postIds = res.data.allPostsContents.map((item: ArticleData) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths: postIds,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  articleData: ArticleData;
}> = async (context: GetStaticPropsContext) => {
  const res = await (
    await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          allPostsContents(orderBy: _firstPublishedAt_DESC) {
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
            _firstPublishedAt
            pageTitle
            pageDescription
            pageTags
            imageLinkPreview {
              url
            }
          }
        }
        `,
      }),
    })
  ).json();

  const [data] = res.data.allPostsContents.filter(
    (item: ArticleData) => item.id === context.params?.id
  );

  // If page is deleted or unpublished
  if (!data) {
    return {
      notFound: true,
    };
  }

  // If page is available
  return {
    props: { articleData: data },
  };
};
