import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import './globals.css';

const sourceSans = Source_Sans_3({ subsets: ['cyrillic'] });

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
