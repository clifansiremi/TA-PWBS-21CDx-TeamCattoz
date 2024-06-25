// pages/konservasi-laut.tsx

import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';

const KonservasiLaut: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Konservasi Laut</h1>
        <ButtonLink href="/" text="Beranda" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
        <ButtonLink href="/about-me" text="About Me" />
      </main>
    </div>
  );
};

export default KonservasiLaut;
