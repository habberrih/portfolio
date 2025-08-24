export const metadata = {
  title: 'Abdullah Habberrih',
  description: 'Personal website of Abdullah Habberrih',
};

import '../src/index.css';
import '../src/App.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

