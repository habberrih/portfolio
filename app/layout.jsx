export const metadata = {
  title: 'Abdullah Habberrih',
  description: 'Personal website of Abdullah Habberrih',
};

import '../src/index.css';
import '../src/App.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
          (function(){
            try {
              const html = document.documentElement;
              const apply = (t) => {
                if (t === 'dark') html.setAttribute('data-theme', 'dark');
                else html.removeAttribute('data-theme');
                try { localStorage.setItem('theme', t); } catch {}
              };
              const stored = localStorage.getItem('theme');
              const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = stored || (prefersDark ? 'dark' : 'light');
              apply(theme);
              window.__applyTheme = apply;
              window.__toggleTheme = function(){
                const cur = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                const next = cur === 'dark' ? 'light' : 'dark';
                apply(next);
                return next;
              }
            } catch {}
          })();
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
