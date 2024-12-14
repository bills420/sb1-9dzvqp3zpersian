import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/layout/skip-link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bills Co. LTD',
  description: 'Specializing in Labour, Beautification, and Web Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}