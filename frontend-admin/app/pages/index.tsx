import Link from 'next/link';
import Navbar from '../view/page';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Beranda</h1>
      <Navbar />
      <p>Selamat datang di halaman beranda!</p>
    </div>
  );
}


export default Home;
