import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import '@/components/Header/Header.css';
import '@/components/Hero/Hero.css';
import '@/components/About/About.css';
import '@/components/Portfolio/Portfolio.css';
import '@/components/Services/Services.css';
import '@/components/News/News.css';
import '@/components/Contact/Contact.css';
import '@/components/Footer/Footer.css';

export const metadata: Metadata = {
  title: 'Abdullah Habberrih',
  description: 'Personal website of Abdullah Habberrih',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
