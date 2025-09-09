import { Goldman, Montserrat } from 'next/font/google';
import './styles/globals.scss';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header';

const goldMan = Goldman({
   variable: '--font-goldman-serif',
   subsets: ['latin'],
   weight: ['400', '700'],
});

const montserrat = Montserrat({
   variable: '--font-montserrat-serif',
   subsets: ['latin'],
});

export const metadata = {
   title: 'EQT Real State',
   description: 'Discover Your Dream Home with EQT',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${goldMan.variable} ${montserrat.variable}`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
