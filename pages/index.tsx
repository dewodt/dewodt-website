import Head from 'next/head';
import NavBar from 'components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dewo</title>
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <NavBar />
    </>
  )
}
