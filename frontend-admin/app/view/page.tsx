
import Link from 'next/link';
import styles from './Navbar.module.css';

// membuat style navbar
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
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
