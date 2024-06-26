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
          <Image
            src={images[currentImageIndex]}
            alt="Slideshow Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <hr className={styles.divider} />
        <section className={styles.infoSection}>
          <h2>Informasi Penting</h2>
          <p>
            Situs ini didedikasikan untuk konservasi laut dan pengelolaan perikanan yang berkelanjutan. Kami percaya bahwa dengan upaya bersama, kita dapat melindungi dan melestarikan keanekaragaman hayati laut untuk generasi mendatang. Di halaman ini, Anda akan menemukan informasi tentang proyek kami, kebijakan terbaru, serta berita dan acara yang berkaitan dengan konservasi laut dan perikanan.
          </p>
        </section>

        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
        <ButtonLink href="/about-me" text="About Me" />
        
        
      </main>
    </div>
  );
};

export default Home;
