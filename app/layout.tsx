import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import '../src/components/Header/Header.css';
import '../src/components/Hero/Hero.css';
import '../src/components/About/About.css';
import '../src/components/Portfolio/Portfolio.css';
import '../src/components/Services/Services.css';
import '../src/components/News/News.css';
import '../src/components/Contact/Contact.css';
import '../src/components/Footer/Footer.css';

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
