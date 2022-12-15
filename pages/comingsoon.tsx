import Head from 'next/head';
import NavBar from 'components/navbar'
import styles from 'styles/comingsoon.module.css'

export default function ComingSoon() {
	return (
		<>
			<Head>
				<title>Dewo</title>
				<link rel="shortcut icon" href="logo.ico" />
			</Head>
			<NavBar onPage={"comingsoon"} />
			<div className={styles.soonDiv}>
				<div>This page <span className={styles.blueSpan}>will be<br /></span> released <span className={styles.blueSpan}>soon!</span></div>
			</div>
		</>
	)
}
  