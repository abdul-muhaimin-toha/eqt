import { Goldman, Montserrat } from 'next/font/google';
import './global.css';
import './styles/style.scss';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header';
import { getHeaderData } from '@/graphql/components/get-menu-data';
import { Bounce, ToastContainer } from 'react-toastify';
import AOSWrapper from '@/utils/aos-wrapper';

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
   title: 'EQT Real Estate',
   description: 'Discover Your Dream Home with EQT',
};

export default async function RootLayout({ children }) {
   const { menuItems, crbThemeOptions } = await getHeaderData('dGVybToy');

   return (
      <html lang="en">
         {/* <ReactLenis root> */}
         <body className={`${goldMan.variable} ${montserrat.variable}`}>
            <AOSWrapper>
               <Header
                  crbThemeOptions={crbThemeOptions}
                  menuItems={menuItems}
               />
               {children}
               <Footer />
               <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition={Bounce}
                  toastClassName={`!bg-[#1f5126] !text-white !rounded-none !p-4 !shadow-lg !border  !border-gray-700`}
                  bodyClassName="!flex !items-center !gap-2 !font-medium"
               />
            </AOSWrapper>
         </body>
         {/* </ReactLenis> */}
      </html>
   );
}
