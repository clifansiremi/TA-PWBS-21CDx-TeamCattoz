import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// import tailwind
import 'tailwindcss/tailwind.css';
export const metadata: Metadata = {
  title: 'View Mahasiswa',
  description: 'Halaman Tampil Data Mahasiswa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-5">{children}</body>
    </html>
  );
}
