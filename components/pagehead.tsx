import Head from "next/head";

interface typePageHead {
  headTitle: string;
  headDescription: string;
  headTag: string;
}

export default function PageHead({
  headTitle,
  headDescription,
  headTag,
}: typePageHead) {
  return (
    <Head>
      <title>{headTitle}</title>
      <link rel="shortcut icon" href="logo.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={headTitle} />
      <meta name="description" content={headDescription} />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content={`Dewantoro Triatmojo, Dewo, dewodt, ${headTag}`}
      />
      <meta name="author" content="Dewantoro Triatmojo" />

      {/* Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dewodt.com/" />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={headDescription} />
      <meta property="og:image" content="https://dewodt.com/linkpreview.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
}
