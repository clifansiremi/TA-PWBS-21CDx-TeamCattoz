import Navbar from '../view/page';
import ButtonLink from '../view/buttonlink';
import styles from './pengelolaanperikanan.module.css';
import Image from 'next/image';
import { useState } from 'react';

const PengelolaanPerikanan: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        {/* menambahkan konten pengelolaan perikanan */}
      <h1>Pengelolaan Perikanan</h1>
      <p>
          Pengelolaan perikanan merupakan salah satu aspek penting dalam menjaga keberlanjutan sumber daya laut. Di Indonesia, pengelolaan perikanan dilakukan dengan berbagai upaya yang mencakup kebijakan, teknologi, dan pemberdayaan masyarakat. Berikut adalah beberapa contoh upaya pengelolaan perikanan di Indonesia:
        </p>
        <h2>Kebijakan Pengelolaan Perikanan</h2>
        <p>
          Pemerintah Indonesia telah menerapkan berbagai kebijakan untuk mengelola perikanan secara berkelanjutan. Kebijakan ini mencakup penetapan kuota penangkapan ikan, pembatasan alat tangkap yang ramah lingkungan, serta pengawasan dan penegakan hukum terhadap praktik perikanan ilegal.
        </p>
        <h2>Penerapan Teknologi</h2>
        <p>
          Teknologi memainkan peran penting dalam pengelolaan perikanan. Penggunaan teknologi pemantauan dan pengawasan, seperti sistem pelacakan kapal (Vessel Monitoring System/VMS) dan penggunaan drone, membantu dalam mengawasi aktivitas penangkapan ikan dan mencegah praktik perikanan ilegal.
        </p>
        <h2>Pemberdayaan Masyarakat</h2>
        <p>
          Pemberdayaan masyarakat pesisir menjadi salah satu fokus utama dalam pengelolaan perikanan. Program-program pelatihan dan edukasi mengenai praktik perikanan berkelanjutan diberikan kepada nelayan dan komunitas pesisir untuk meningkatkan kesadaran dan keterampilan mereka dalam mengelola sumber daya laut.
        </p>
        <h2>Pendekatan Ekosistem</h2>
        <p>
          Pengelolaan perikanan di Indonesia juga menggunakan pendekatan ekosistem untuk memastikan keberlanjutan ekosistem laut dan pesisir. Pendekatan ini melibatkan perlindungan habitat penting, seperti terumbu karang dan mangrove, yang berperan sebagai tempat pemijahan dan pembesaran ikan.
        </p>
        <h2>Pengembangan Perikanan Budidaya</h2>
        <p>
          Perikanan budidaya atau akuakultur menjadi alternatif yang semakin berkembang untuk memenuhi kebutuhan ikan secara berkelanjutan. Pemerintah dan sektor swasta bekerja sama untuk mengembangkan teknologi dan praktik budidaya yang ramah lingkungan serta mengurangi tekanan terhadap sumber daya ikan di alam liar.
        </p>
        <h2>Penelitian dan Inovasi</h2>
        <p>
          Penelitian dan inovasi terus dilakukan untuk meningkatkan efektivitas pengelolaan perikanan. Penelitian mengenai stok ikan, dinamika populasi, dan ekosistem laut membantu dalam merumuskan kebijakan yang lebih baik dan berbasis ilmiah.
        </p>
        <h2>Wilayah Pengelolaan Perikanan (WPP) Indonesia</h2>
        <p>
          Wilayah perairan Indonesia dibagi menjadi 11 wilayah pengelolaan perikanan berdasarkan Peraturan Menteri Kelautan dan Perikanan Nomor 18 Tahun 2014. Pembagian ini didasarkan pada kondisi fisik, ekologi, dan oseanografi perairan Indonesia, serta mengacu pada kodefikasi Food and Agriculture Organization (FAO) untuk digunakan secara regional dan internasional.
        </p>
        <h2>Pengelolaan Sumberdaya Ikan</h2>
        <p>
          Pengelolaan sumberdaya ikan di Indonesia masih banyak berbasis pada pemerintah pusat, dengan pemerintah bertindak sebagai pelaksana mulai dari perencanaan, pelaksanaan, sampai pengawasan. Kelompok masyarakat pengguna hanya menerima informasi tentang produk-produk kebijakan dari pemerintah. Pengelolaan perikanan harus mempertimbangkan aspek biologi, ekonomi, dan sosial serta memperhatikan nilai-nilai yang berkembang di masyarakat. Kebijakan harus dapat diterima oleh semua stakeholder dan mempertimbangkan aspek social, politik, dan ekonomi.
        </p>
        <h2>Kegiatan IUU Fishing</h2>
        <p>
          Kegiatan IUU (Illegal, Unreported, and Unregulated) fishing di Indonesia adalah ancaman bagi upaya pengelolaan sumberdaya ikan. Penyebab maraknya aktivitas IUU fishing di Indonesia adalah rentang kendali dan luasnya wilayah pengawasan tidak sebanding dengan kemampuan pengawasan yang ada, terbatasnya kemampuan sarana dan prasarana pengawasan di laut, kemampuan sumberdaya manusia (SDM) nelayan Indonesia yang masih rendah, dan penegakan hukum yang belum berjalan secara optimal.
        </p>
        <h2>Pembangunan Perikanan</h2>
        <p>
          Pembangunan perikanan di Indonesia dilakukan melalui upaya peningkatan produktivitas dan efisiensi usaha, yang diharapkan dapat meningkatkan produksi perikanan dan pendapatan petani nelayan. Peningkatan produksi tersebut dilakukan dengan tetap memperhatikan kelestarian sumber daya dan lingkungan hidup.
        </p>
        <h2>Peraturan dan Kebijakan</h2>
        <p>
          Peraturan terkait penelitian dan pengembangan sumberdaya perikanan di Indonesia diatur dalam Pasal 55. Peraturan ini menetapkan bahwa setiap orang yang memperoleh manfaat langsung dari sumberdaya ikan dan lingkungannya di wilayah pengelolaan perikanan RI dikenakan pungutan perikanan, kecuali nelayan kecil dan pembudidaya kecil.
        </p>
        <h2>Organisasi dan Tata Kerja</h2>
        <p>
          Peraturan Menteri Kelautan dan Perikanan Nomor 48/PERMEN-KP/2020 tentang Organisasi dan Tata Kerja Kementerian Kelautan dan Perikanan menetapkan bahwa pengelolaan perikanan adalah semua upaya yang terintegrasi dalam pengumpulan informasi, analisis, perencanaan, konsultasi, pembuatan keputusan, alokasi sumber daya ikan, dan implementasi serta penegakan hukum dari peraturan perundang-undangan di bidang Perikanan.
        </p>
        <h2>Aspek Lain dalam Pengelolaan Perikanan</h2>
        <p>
          Dalam pengelolaan perikanan di Indonesia, penting untuk memperhatikan kelestarian sumber daya dan lingkungan hidup serta mempertimbangkan aspek biologi, ekonomi, dan sosial. Kebijakan harus dapat diterima oleh semua stakeholder dan mempertimbangkan aspek social, politik, dan ekonomi. Selain itu, perlu diupayakan peningkatan produktivitas dan efisiensi usaha serta penegakan hukum yang efektif untuk mengatasi kegiatan IUU fishing.
        </p>
      <ButtonLink href="/" text="Beranda" />
      <ButtonLink href="/konservasi-laut" text="Konservasi Laut" />
      <ButtonLink href="/about-me" text="About Me" />
      </main>
    </div>
  );
};

export default PengelolaanPerikanan;
