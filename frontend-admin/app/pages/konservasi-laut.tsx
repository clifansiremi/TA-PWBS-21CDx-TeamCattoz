// pages/konservasi-laut.tsx

import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';
import styles from './konservasilaut.module.css';

const KonservasiLaut: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Konservasi Laut</h1>
        <p>
          Konservasi laut adalah upaya yang sangat penting untuk melindungi keanekaragaman hayati laut dan pesisir. Di Indonesia, misalnya, dua per tiga wilayahnya adalah laut yang sangat kaya keanekaragaman hayati. Untuk mencapai tujuan ini, konservasi dilakukan melalui pendirian kawasan seperti taman dan suaka laut, serta penerapan kebijakan yang dikombinasikan dengan kuota dan insentif pasar. Ada lebih dari 170 kawasan konservasi laut yang tersebar dari Sabang sampai Merauke, dengan luas sekitar 19 juta hektar. Manfaat ekonominya nyata karena sebagian besar kegiatan wisata bahari dan perikanan terjadi di dalam kawasan konservasi laut, seperti di Wakatobi dan Raja Ampat. Teknologi revolusi industri 4.0 seperti advanced sensor platforms, kecerdasan buatan, pesawat nirawak, dan bioteknologi juga digunakan untuk memperkuat pelindungan terhadap spesies dan habitat serta menyokong perikanan berkelanjutan.
        </p>
        <h2>Konservasi laut di Indonesia telah dilakukan melalui beberapa upaya yang terintegrasi dan berkelanjutan. Berikut adalah beberapa contoh:</h2>
        <ol>
          <li>
            <strong>Pendirian Kawasan Konservasi Laut</strong><br />
            Ada lebih dari 170 kawasan konservasi laut yang tersebar dari Sabang sampai Merauke dengan luas sekitar 19 juta hektar. Manfaat ekonominya nyata karena sebagian besar kegiatan wisata bahari dan perikanan terjadi di dalam kawasan konservasi laut, seperti di Wakatobi dan Raja Ampat.
          </li>
          <li>
            <strong>Penerapan Kebijakan dan Insentif</strong><br />
            Kebijakan konservasi laut diatur melalui penerapan kuota dan insentif pasar untuk konservasi spesies. Kebijakan ini dilakukan untuk memastikan bahwa pemanfaatan sumber daya laut berkelanjutan dan tidak mengganggu keberlanjutan pasokan jasa keanekaragaman hayati.
          </li>
          <li>
            <strong>Penggunaan Teknologi Revolusi Industri 4.0</strong><br />
            Teknologi seperti advanced sensor platforms, kecerdasan buatan (AI), pesawat nirawak dan wahana otonom, serta bioteknologi digunakan untuk melindungi spesies dan habitat serta menyokong perikanan berkelanjutan. Kajian PricewaterhouseCoopers (PwC) dan Universitas Stanford untuk WEF pada 2017 menunjukkan bahwa delapan dari 14 gugus teknologi revolusi industri 4.0 dapat digunakan untuk konservasi laut.
          </li>
          <li>
            <strong>Pemberdayaan Masyarakat</strong><br />
            Yayasan Konservasi Laut (YKL) Indonesia fokus pada isu konservasi dan rehabilitasi ekosistem, pemberdayaan masyarakat, dan penerapan teknologi alternatif ramah lingkungan di wilayah pesisir dan laut. Mereka mendorong perlindungan melalui pemanfaatan berkelanjutan dan pemulihan ekosistem yang terdegradasi.
          </li>
          <li>
            <strong>Pengelolaan Kawasan Konservasi Maritim</strong><br />
            Kawasan konservasi laut dibagi menjadi tiga kategori: Taman, Suaka, dan Kawasan Konservasi Maritim. Pengelolaan kawasan konservasi dilakukan dengan menggunakan sistem zonasi dan dilakukan oleh Menteri Kelautan dan Perikanan untuk kawasan nasional dan Gubernur untuk kawasan daerah.
          </li>
          <li>
            <strong>Pembangunan Ekonomi Hijau</strong><br />
            Pembangunan ekonomi hijau di wilayah pesisir dan laut dilakukan dengan mendorong kemandirian ekonomi masyarakat melalui pemanfaatan sumber daya pesisir dan laut berkelanjutan. Mereka juga membangun Spirit Environmentalism generasi muda dan pelaku pengelolaan pesisir dan laut.
          </li>
          <li>
            <strong>Rehabilitasi Ekosistem</strong><br />
            Rehabilitasi ekosistem laut, seperti padang lamun, dilakukan untuk mempertahankan dan meningkatkan kualitas keanekaragaman hayati. Indonesia memiliki padang lamun terluas di dunia dan ekosistem ini berperan penting dalam mitigasi perubahan iklim.
          </li>
          <li>
            <strong>Target Pembentukan Kawasan Konservasi Laut</strong><br />
            Kementerian Kelautan dan Perikanan Republik Indonesia memajukan target pembentukan kawasan konservasi laut seluas 20 juta hektare maksimal pada 2018. Percepatan ini dilakukan untuk mencapai target lebih cepat dari rencana semula pada 2020.
          </li>
        </ol>
        <p>
          Dengan demikian, konservasi laut di Indonesia dilakukan melalui pendirian kawasan, penerapan kebijakan, penggunaan teknologi, pemberdayaan masyarakat, pengelolaan kawasan, pembangunan ekonomi hijau, rehabilitasi ekosistem, dan target pembentukan kawasan konservasi laut yang lebih cepat.
        </p>
        
        <div className={styles.buttonContainer}>
        <ButtonLink href="/" text="Beranda" />
        <ButtonLink href="/pengelolaan-perikanan" text="Pengelolaan Perikanan" />
        <ButtonLink href="/about-me" text="About Me" />
        </div>
        
      </main>
    </div>
  );
};

export default KonservasiLaut;
