import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Beranda</Link></li>
        <li><Link href="/about-me">About Me</Link></li>
        <li><Link href="/konservasi-laut">Konservasi Laut</Link></li>
        <li><Link href="/pengelolaan-perikanan">Pengelolaan Perikanan</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
