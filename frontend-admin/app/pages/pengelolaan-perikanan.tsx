import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';

const PengelolaanPerikanan: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Pengelolaan Perikanan</h1>
      <ButtonLink href="/" text="Beranda" />
      <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
      <ButtonLink href="/about-me" text="About Me" />
    </div>
  );
};

export default PengelolaanPerikanan;
