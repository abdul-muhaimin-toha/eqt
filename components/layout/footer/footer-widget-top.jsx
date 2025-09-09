'use client';

import PointerDown from '@/components/icons/pointer-down';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const FOOTER_MENUS = [
   {
      key: 'about-us',
      title: 'About Us',
      links: [
         { label: 'Who We Are', href: '/' },
         { label: 'Our Approach', href: '/' },
      ],
   },
   {
      key: 'quick-links',
      title: 'Quick Links',
      links: [
         { label: 'Career', href: '/' },
         { label: 'Contact Us', href: '/' },
      ],
   },
   {
      key: 'projects',
      title: 'Projects',
      links: [
         { label: 'Real Estate', href: '/' },
         { label: 'Consultation', href: '/' },
      ],
   },
];

const SOCIAL_LINKS = [
   { label: 'Facebook', href: '/', icon: '/social-icons/facebook.svg' },
   { label: 'LinkedIn', href: '/', icon: '/social-icons/linkedin.svg' },
   { label: 'Twitter', href: '/', icon: '/social-icons/x.svg' },
];

const FooterWidgetTop = () => {
   const [openMenu, setOpenMenu] = useState(null);
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
                           src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/logo.svg"
                           alt="EQT Logo"
                           width={120}
                           height={40}
                        />
                     </Link>
                  </div>
                  <p className="footer-address">
                     Unit-A2, House-73, Rd. No. 4, Banani, Dhaka-1212
                  </p>
                  <div className="footer-contact-address">
                     <p className="text-uppercase">Contact</p>
                     <Link
                        className="font-primary heading-h5 font-weight-400 color-two"
                        href="tel:+88029882107"
                     >
                        +88 02 9882107-8
                     </Link>
                  </div>
                  <Link href="mailto:info@eqtbd.com" className="email">
                     info@eqtbd.com
                  </Link>
               </div>

               {/* Dynamic Footer Menus */}
               {FOOTER_MENUS.map(({ key, title, links }) => (
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
                     {SOCIAL_LINKS.map(({ label, href, icon }) => (
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
