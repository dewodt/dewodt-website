import PageHead from "components/PageHead";
import { useState, useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";

interface error500Data {
  line1: string;
  line2: string;
  pageTitle: string;
  pageTags: string[];
  pageDescription: string;
  imageLinkPreview: {
    url: string;
  };
}

const Custom500: NextPage<{ error500Data: error500Data }> = ({
  error500Data,
}) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <PageHead
        pageTitle={error500Data.pageTitle}
        pageDescription={error500Data.pageDescription}
        pageTag={error500Data.pageTags}
        linkPreviewImage={error500Data.imageLinkPreview.url}
      />
      <div
        className={`flex h-[100vh] flex-col items-center justify-center px-3 text-center duration-1000 ease-in-out ${
          mount ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold leading-normal text-[#208ce5] 2xl:text-5xl 2xl:leading-normal">
          {error500Data.line1}
        </h1>
        <h1 className="mb-4 text-lg font-semibold leading-normal 2xl:mb-6 2xl:text-2xl 2xl:leading-normal">
          {error500Data.line2}
        </h1>
      </div>
    </>
  );
};

export default Custom500;

export const getStaticProps: GetStaticProps<{
  error500Data: error500Data;
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
          error500Page {
            pageTitle
            pageTags
            pageDescription
            imageLinkPreview {
              url
            }
            line1
            line2
          }
        }        
        `,
      }),
    })
  ).json();

  return {
    props: { error500Data: res.data.error500Page },
  };
};
