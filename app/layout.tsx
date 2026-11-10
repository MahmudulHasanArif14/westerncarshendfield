import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/layouts/parts/Header';
import Footer from '@/layouts/parts/Footer';

export const metadata: Metadata = {
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
