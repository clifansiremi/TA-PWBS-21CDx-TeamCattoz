import ButtonLink from '../view/buttonlink';
import Navbar from '../view/page';
import styles from './aboutme.module.css';

const AboutMe: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
      <h1>About Me</h1>
        <div className={styles.profile}>
          <p>Halo! Kami dari Cattoz Team, kumpulan dari 3 orang yang menjadi seam untuk membuat website tentang kelautan, dalam website kami terdapat halaman konservasi laut dan juga perikanan, selamat menelusuri EDUKASEA.</p>
        </div>
        
        <ButtonLink href="/" text="Beranda" />
        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
      </main>
    </div>
  );
};

export default AboutMe;
