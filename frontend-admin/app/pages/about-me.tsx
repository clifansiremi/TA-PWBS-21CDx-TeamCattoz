import Link from 'next/link';
import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';

const AboutMe: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>About Me</h1>
        <ButtonLink href="/" text="Beranda" />
        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
      </main>
    </div>
  );
}


export default AboutMe;
