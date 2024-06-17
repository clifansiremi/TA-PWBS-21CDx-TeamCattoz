
const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function View() {
  return (
    <div>
      <table className="w-full">
        {/* judul tabel */}
        <thead>
          <tr>
            <th className="w-1/12 border-solid border-2 border-red-700 p-2.5 bg-gray-200">Beranda</th>
            <th className="w-2/12 border-solid border-2 border-red-700 p-2.5 bg-gray-200">Konservasi Laut</th>
            <th className="w-4/12 border-solid border-2 border-red-700 p-2.5 bg-gray-200">Pengelolaan Perikanan</th>
            <th className="w-3/12 border-solid border-2 border-red-700 p-2.5 bg-gray-200">Tentang Kami</th>
            <th className="w-4/12 border-solid border-2 border-red-700 p-2.5 bg-gray-200">Jurusan</th>
          </tr>
        </thead>
        {/* isi tabel */}
        <tbody>
          
              <tr>
                <td className="border-solid border-2 border-red-700 p-1.5 text-center">1</td>
                <td className="border-solid border-2 border-red-700 p-1.5 text-center">21312073</td>
                <td className="border-solid border-2 border-red-700 p-1.5">Pia</td>
                <td className="border-solid border-2 border-red-700 p-1.5">0897</td>
                <td className="border-solid border-2 border-red-700 p-1.5">Informatika</td>
              </tr>
          
        </tbody>
      </table>
    </div>
  );
}
