import Head from "next/head";

interface typePageHead {
  pageTitle: string;
  pageDescription: string;
  pageTag: string[];
  linkPreviewImage: string;
}

const PageHead = ({
  pageTitle,
  pageDescription,
  pageTag,
  linkPreviewImage,
}: typePageHead) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="shortcut icon" href="logo.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta charSet="UTF-8" />
      <meta name="keywords" content={pageTag.join(", ")} />
      <meta name="author" content="Dewantoro Triatmojo" />

      {/* Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dewodt.com/" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={linkPreviewImage} />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default PageHead;
