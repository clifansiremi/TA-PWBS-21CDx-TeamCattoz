import ButtonLink from '../view/buttonlink';
import Navbar from '../view/page';
import styles from './aboutme.module.css';

const AboutMe: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        

        <ButtonLink href="/" text="Beranda" />
        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
      </main>
    </div>
  );
};

export default AboutMe;
