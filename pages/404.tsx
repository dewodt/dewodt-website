import Link from "next/link";
import PageHead from "components/PageHead";
import { useState, useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";

interface error404Data {
  line1: string;
  line2: string;
  buttonText: string;
  pageTitle: string;
  pageTags: string[];
  pageDescription: string;
  imageLinkPreview: {
    url: string;
  };
}

const Custom404: NextPage<{ error404Data: error404Data }> = ({
  error404Data,
}) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <PageHead
        pageTitle={error404Data.pageTitle}
        pageDescription={error404Data.pageDescription}
        pageTag={error404Data.pageTags}
        linkPreviewImage={error404Data.imageLinkPreview.url}
      />
      <main
        className={`absolute top-0 left-0 right-0 flex h-full w-full flex-col items-center justify-center px-3 text-center duration-1000 ease-in-out ${
          mount ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold leading-normal text-[#208ce5] 2xl:text-5xl 2xl:leading-normal">
          {error404Data.line1}
        </h1>
        <h1 className="mb-4 text-lg font-semibold leading-normal 2xl:mb-6 2xl:text-2xl 2xl:leading-normal">
          {error404Data.line2}
        </h1>
        <Link href="/">
          <button className="rounded-xl bg-[#208ce5] px-5 py-1 text-lg font-semibold text-white duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#208ce5] 2xl:py-2 2xl:px-8 2xl:text-2xl">
            {error404Data.buttonText}
          </button>
        </Link>
      </main>
    </>
  );
};

export default Custom404;

export const getStaticProps: GetStaticProps<{
  error404Data: error404Data;
}> = async () => {
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
          error404Page {
            pageTitle
            pageTags
            pageDescription
            imageLinkPreview {
              url
            }
            line1
            line2
            buttonText
          }
        }        
        `,
      }),
    })
  ).json();

  return {
    props: { error404Data: res.data.error404Page },
  };
};
