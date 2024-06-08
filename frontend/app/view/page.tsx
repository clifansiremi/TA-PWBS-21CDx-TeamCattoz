// import module/package "swr"
import useSWR from 'swr';

// definisi "fetcher"
const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function View() {
  // definisi "swr"
  const { data } = useSWR('http://localhost:8000/api/view', fetcher);
  return (
    <div>
      <table className="w-full">
        {/* judul tabel */}
        

        {/* isi tabel */}
      </table>
    </div>
  );
}
