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

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dewodt.com/" />
      <meta property="og:title" content="Dewantoro Triatmojo" />
      <meta property="og:description" content="Dewantoro Triatmojo's personal website containing profile, contact, and other more!" />
      <meta property="og:image" content="https://dewodt.com/linkpreview.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dewodt.com/" />
      <meta property="twitter:title" content="Dewantoro Triatmojo" />
      <meta property="twitter:description" content="Dewantoro Triatmojo's personal website containing profile, contact, and other more!" />
      <meta property="twitter:image" content="https://dewodt.com/linkpreview.png" />
    </Head>
  )
}