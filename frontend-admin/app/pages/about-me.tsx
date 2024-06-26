import ButtonLink from '../view/buttonlink';
import Navbar from '../view/page';
import styles from './aboutme.module.css';

const AboutMe: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        {/* menambahkan pengenalan */}
      <h1>About Me</h1>
        <div className={styles.profile}>
          <p>Halo! Kami dari Cattoz Team, kumpulan dari 3 orang yang menjadi seam untuk membuat website tentang kelautan, dalam website kami terdapat halaman konservasi laut dan juga perikanan, selamat menelusuri EDUKASEA.</p>
        </div>
        
        {/* menambahkan konten visi misi */}
        <section>
          <h2>Visi dan Misi</h2>
          <p>Visi kami adalah menciptakan dunia di mana sumber daya laut dikelola secara berkelanjutan untuk mendukung kesejahteraan masyarakat dan keanekaragaman hayati. Misi kami meliputi:</p>
          <ul>
            <li>Meningkatkan kesadaran masyarakat tentang pentingnya konservasi laut.</li>
            <li>Memfasilitasi penerapan kebijakan perikanan yang berkelanjutan.</li>
            <li>Mendorong penggunaan teknologi untuk mendukung pengelolaan sumber daya laut.</li>
          </ul>
        </section>

        <section>
          <h2>Kontak</h2>
          <p>Jika Anda tertarik untuk berdiskusi lebih lanjut atau bekerja sama dalam proyek konservasi dan pengelolaan perikanan, jangan ragu untuk menghubungi kami melalui:</p>
          <ul>
            <li>Email: [riskafia142@gmail.com]</li>
            <li>Telepon: [08979094701]</li>
          </ul>
        </section>

        <ButtonLink href="/" text="Beranda" />
        <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
      </main>
    </div>
  );
};

export default AboutMe;
