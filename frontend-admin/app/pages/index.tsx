// pages/index.tsx

import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Selamat Datang di Beranda</h1>
        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
        <ButtonLink href="/about-me" text="About Me" />
      </main>
    </div>
  );
};

export default Home;
