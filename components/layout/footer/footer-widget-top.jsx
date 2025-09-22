'use client';

import PointerDown from '@/components/icons/pointer-down';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const FooterWidgetTop = ({ footerMenu = [], crbThemeOptions = {} }) => {
   const [openMenu, setOpenMenu] = useState(null);
   const {
      facebookLink,
      footerAddress,
      footerCompanyLogo,
      footerEmailAddress,
      footerPhoneAddress,
      linkedinLink,
      xLink,
   } = crbThemeOptions;

   const socialLinks = [
      {
         label: 'Facebook',
         href: facebookLink,
         icon: '/social-icons/facebook.svg',
      },
      {
         label: 'LinkedIn',
         href: linkedinLink,
         icon: '/social-icons/linkedin.svg',
      },
      { label: 'Twitter', href: xLink, icon: '/social-icons/x.svg' },
   ].filter(({ href }) => href);

   const toggleMenu = (menuKey) =>
      setOpenMenu(openMenu === menuKey ? null : menuKey);

   return (
      <div className="footer-widget-top">
         <div className="container">
            <div className="footer-widget-list">
               {/* Logo & Contact */}
               <div className="footer-widget-item">
                  <div className="footer-logo">
                     <Link className="footer-logo-image" href="/">
                        <Image
                           src={footerCompanyLogo}
                           alt="EQT Logo"
                           width={120}
                           height={40}
                        />
                     </Link>
                  </div>
                  <p className="footer-address">{footerAddress}</p>
                  <div className="footer-contact-address">
                     <p className="text-uppercase">Contact</p>
                     <Link
                        className="font-primary heading-h5 font-weight-400 color-two"
                        href="tel:+88029882107"
                     >
                        {footerPhoneAddress}
                     </Link>
                  </div>
                  <Link href={`mailto:${footerEmailAddress}`} className="email">
                     {footerEmailAddress}
                  </Link>
               </div>

               {/* Dynamic Footer Menus */}
               {footerMenu.map(({ key, title, links }) => (
                  <div key={key} className="footer-widget-item">
                     <h3
                        onClick={() => toggleMenu(key)}
                        className="lead-text-two font-inter"
                     >
                        <span>{title}</span>
                        <div
                           className={`arrow ${
                              openMenu === key ? 'active' : ''
                           }`}
                        >
                           <PointerDown />
                        </div>
                     </h3>
                     <div
                        className="footer-menu"
                        style={{ display: openMenu === key ? 'block' : '' }}
                     >
                        <ul>
                           {links.map(({ label, href }) => (
                              <li key={label} className="menu-item">
                                 <Link href={href}>{label}</Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

               {/* Social Links */}
               <div className="footer-widget-item">
                  <h3 className="lead-text-two font-inter">
                     <span>Follow Us</span>
                  </h3>
                  <div className="social-list">
                     {socialLinks.map(({ label, href, icon }) => (
                        <Link
                           key={label}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Image
                              src={icon}
                              alt={label}
                              width={20}
                              height={20}
                           />
                           <span>{label}</span>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FooterWidgetTop;
