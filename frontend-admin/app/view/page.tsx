// import module/package "swr"
import useSWR from 'swr';

// definisi "fetcher"
const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function View() {
  // definisi "swr"
  return (
    <div>
      <table className="w-full">
        {/* judul tabel */}


        {/* isi tabel */}
      </table>
    </div>
  );
}
