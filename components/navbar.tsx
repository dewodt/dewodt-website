import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/navbar.module.css'
import Logo from 'public/logo.svg'

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Image src={Logo} alt="dewodt's logo" className={styles.logo}/>
      <ul className={styles.list}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/comingsoon">Coming Soon</Link></li>
      </ul>
    </div>
  )
}
