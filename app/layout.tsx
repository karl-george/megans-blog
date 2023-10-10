import type { Metadata } from 'next';
import AuthProvider from '@/providers/AuthProvider';
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Megans Blog',
  description: 'Hi, Welcome!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-poppins'>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
