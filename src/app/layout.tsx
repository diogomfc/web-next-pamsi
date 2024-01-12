import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { AuthProvider } from '@/contexts/AuthContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Smart Hub - Pamcary',
  description: 'Sistema smart hub da Pamcary'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={plusJakartaSans.className} lang="pt">
      <AuthProvider>
        <body className="antialiased">{children}</body>
      </AuthProvider>
    </html>
  );
}
