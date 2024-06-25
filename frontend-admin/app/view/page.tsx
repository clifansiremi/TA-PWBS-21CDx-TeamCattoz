// navbar
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

// membuat style navbar
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>

      // menambahkan logo
      <div className={styles.logo}>
        <Link href="/">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Beranda</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/konservasi-laut">Konservasi Laut</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/pengelolaan-perikanan">Pengelolaan Perikanan</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about-me">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
