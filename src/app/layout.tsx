import Aside from '@components/Aside';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Nav from '@components/Nav';
import '@styles/css/styles.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>ProSCI</title>
      </head>
      <body>
        <Header />
        <Nav />
        {children}
        <Aside />
        <Footer />
      </body>
    </html>
  );
}
