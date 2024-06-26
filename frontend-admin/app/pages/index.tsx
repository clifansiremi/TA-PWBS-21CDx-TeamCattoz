// pages/index.tsx

import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';
import styles from './home.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg', '/images/slide4.jpg', '/images/slide5.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Selamat Datang di Website Kami</h1>
        <div className={styles.slideshow}>
        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
        <ButtonLink href="/about-me" text="About Me" />
        </div>
        
      </main>
    </div>
  );
};

export default Home;
