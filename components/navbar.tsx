import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/navbar.module.css'
import Logo from 'public/logo.svg'

export default function NavBar({ onPage }: { onPage: string }) {
  return (
    <div className={styles.navBar}>
      <Image src={Logo} alt="dewodt's logo" className={styles.logo}/>
      <ul className={styles.list}>
        <li className={onPage === "home" ? styles.onPage : styles.notOnPage}>
          <Link href="/">Home</Link>
        </li>
        <li className={onPage === "comingsoon" ? styles.onPage : styles.notOnPage}>
          <Link href="/comingsoon">Coming Soon</Link>
        </li>
      </ul>
    </div>
  );
}
