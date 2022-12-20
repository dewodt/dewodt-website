import Head from "next/head";

export default function PageHead() {
  return(
    <Head>
      <title>Dewantoro Triatmojo</title>
      <link rel="shortcut icon" href="logo.svg" />
      <meta name="title" content="Dewantoro Triatmojo" />
      <meta name="description" content="Dewantoro Triatmojo's personal website containing profile, contact, and other more!" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content="Dewantoro Triatmojo, Dewo, dewodt" />
      <meta name="author" content="Dewantoro Triatmojo" />

      {/* Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dewodt.com/" />
      <meta property="og:title" content="Dewantoro Triatmojo" />
      <meta property="og:description" content="Dewantoro Triatmojo's personal website containing profile, contact, and other more!" />
      <meta property="og:image" content="https://dewodt.com/linkpreview.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  )
}