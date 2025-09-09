import Link from 'next/link';
import ArrowUp from '../../icons/arrow-up';
import FooterWidgetTop from './footer-widget-top';

const ScrollToTop = () => (
   <Link href="/" className="scroll-to-top">
      <ArrowUp />
   </Link>
);

const FooterBottom = () => (
   <div className="footer-bottom">
      <div className="container">
         <div className="copyright-inner">
            <div className="copyright">© 2025 EQT. All right reserved.</div>
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

function Footer() {
   return (
      <div className="footer-widget-wrapper">
         <FooterWidgetTop />
         <FooterBottom />
         <ScrollToTop />
      </div>
   );
}

export default Footer;
