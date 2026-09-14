import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sacrament Meeting Planner',
  description: 'Plan and review sacrament meeting programs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} min-h-screen bg-slate-100 text-slate-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}