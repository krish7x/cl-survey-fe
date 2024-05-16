import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const sourceSans = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CL Survey Application',
  description: 'Caratlane Survey Page application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
