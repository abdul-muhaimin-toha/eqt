import Link from 'next/link';
import ArrowUp from '../../icons/arrow-up';
import FooterWidgetTop from './footer-widget-top';
import { getFooterData } from '@/graphql/components/get-menu-data';
import { transformFooterMenu } from '@/utils/utility';

const ScrollToTop = () => (
   <Link href="/" className="scroll-to-top">
      <ArrowUp />
   </Link>
);

const FooterBottom = () => (
   <div className="footer-bottom">
      <div className="container">
         <div className="copyright-inner">
            <div className="copyright">
               © {new Date().getFullYear()} EQT. All rights reserved.
            </div>
            <div className="site-by">
               <span>
                  Site by{' '}
                  <Link href="https://notionhive.com" target="_blank">
                     Notionhive.
                  </Link>
               </span>
            </div>
         </div>
      </div>
   </div>
);

async function Footer() {
   const { firstMenu, secondMenu, thirdMenu, crbThemeOptions } =
      await getFooterData('dGVybTo1', 'dGVybTo2', 'dGVybTo3');

   const footerMenu = [firstMenu, secondMenu, thirdMenu]
      .map(transformFooterMenu)
      .filter(Boolean);

   return (
      <div className="footer-widget-wrapper">
         <FooterWidgetTop
            footerMenu={footerMenu}
            crbThemeOptions={crbThemeOptions}
         />
         <FooterBottom />
         <ScrollToTop />
      </div>
   );
}

export default Footer;
