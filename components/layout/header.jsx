'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import PointerDown from '../icons/pointer-down';
import ArrowRight from '../icons/arrow-right';
import Search from '../icons/search';
import Hamburger from '../icons/hamburger';
import HamburgerClose from '../icons/hamburger-close';
import SearchResultArrow from '../icons/search-result-arrow';

function Header() {
   const [mobileOpen, setMobileOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState(null);
   const [activeSubMenu, setActiveSubMenu] = useState(null);
   const [searchOpen, setSearchOpen] = useState(false);

   return (
      <>
         <HeaderLarge
            setSearchOpen={setSearchOpen}
            setMobileOpen={setMobileOpen}
         />
         <MobileMenu
            mobileOpen={mobileOpen}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            activeSubMenu={activeSubMenu}
            setActiveSubMenu={setActiveSubMenu}
            setMobileOpen={setMobileOpen}
         />
         <SearchModal searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      </>
   );
}

export default Header;

function HeaderLarge({ setSearchOpen, setMobileOpen }) {
   return (
      <header className="header-top">
         <div className="header-top-wrapper">
            {/* Logo */}
            <Link href="/" className="header-logo">
               <Image
                  src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/logo.svg"
                  alt="EQT Logo"
                  width={120}
                  height={40}
                  priority
               />
            </Link>

            {/* Mobile Buttons */}
            <div className="mobile-hamburger">
               <button
                  className="search-btn-mobile"
                  onClick={() => setSearchOpen((prev) => !prev)}
               >
                  <Search />
               </button>
               <button
                  onClick={() => setMobileOpen(true)}
                  className="hamburger-menu"
               >
                  <Hamburger />
               </button>
            </div>

            {/* Desktop Menu */}
            <div className="header-right-area">
               <div className="header-menu">
                  <div className="menu-primary-menu-container">
                     <ul className="menu">
                        {/* About Us */}
                        <li className="menu-item menu-item-has-children">
                           <Link href="#">About Us</Link>
                           <span className="dropdown-icon dropdown-depth-0">
                              <PointerDown />
                           </span>
                           <ul className="sub-menu">
                              <li className="menu-item">
                                 <Link href="/">Who We Are</Link>
                              </li>
                              <li className="menu-item">
                                 <Link href="/">Our Approach</Link>
                              </li>
                           </ul>
                        </li>

                        {/* Projects */}
                        <li className="menu-item menu-item-has-children">
                           <Link href="#">Projects</Link>
                           <span className="dropdown-icon dropdown-depth-0">
                              <PointerDown />
                           </span>
                           <ul className="sub-menu">
                              <li className="menu-item menu-item-has-children">
                                 <Link href="#">Real Estate</Link>
                                 <span className="dropdown-icon dropdown-depth-1">
                                    <ArrowRight />
                                 </span>
                                 <ul className="sub-menu">
                                    <li className="menu-item">
                                       <Link href="/">Apartment</Link>
                                    </li>
                                    <li className="menu-item">
                                       <Link href="/">Land</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item">
                                 <Link href="/">Consultation</Link>
                              </li>
                           </ul>
                        </li>

                        <li className="menu-item">
                           <Link href="/">Hospital Projects</Link>
                        </li>
                        <li className="menu-item">
                           <Link href="/">Career</Link>
                        </li>
                        <li className="menu-item">
                           <Link href="/">Insight</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* CTA */}
            <div className="header-form-area">
               <button
                  type="button"
                  className="search-btn"
                  onClick={() => setSearchOpen((prev) => !prev)}
               >
                  <Search />
               </button>
               <Link href="/" className="btn-primary">
                  <span>Get in Touch</span>
               </Link>
            </div>
         </div>
      </header>
   );
}

function MobileMenu({
   mobileOpen,
   activeMenu,
   setActiveMenu,
   activeSubMenu,
   setActiveSubMenu,
   setMobileOpen,
}) {
   const toggleMenu = (menu) => {
      setActiveMenu((prev) => (prev === menu ? null : menu));
      setActiveSubMenu(null);
   };

   const toggleSubMenu = (submenu, e) => {
      e.stopPropagation();
      setActiveSubMenu((prev) => (prev === submenu ? null : submenu));
   };

   const renderSubMenu = (isActive, children) => (
      <ul className={`eqt-menu__submenu ${isActive ? 'activated' : ''}`}>
         {children}
      </ul>
   );

   return (
      <div className={`mobile-search-item ${mobileOpen ? 'activated' : ''}`}>
         <div className="mobile-search-item-inner">
            <div className="mobile-fixed-item">
               <Link className="header-logo" href="/">
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/logo.svg"
                     alt="EQT Logo"
                     width={120}
                     height={40}
                  />
               </Link>
               <div className="mobile-hamburger">
                  <button
                     onClick={() => setMobileOpen(false)}
                     className="hamburger-menu"
                  >
                     <HamburgerClose />
                  </button>
               </div>
            </div>

            <div className="header-menu-mobile">
               <ul className="eqt-menu">
                  {/* About Us */}
                  <li
                     onClick={() => toggleMenu('about')}
                     className={`menu-item eqt-menu__item menu-item-has-children ${
                        activeMenu === 'about' ? 'eqt-menu__item--active' : ''
                     }`}
                  >
                     <a role="button">About Us</a>
                     <span className="eqt-menu__dropdown-icon">
                        <PointerDown />
                     </span>
                     <span className="dropdown-icon dropdown-depth-0">
                        <PointerDown />
                     </span>
                     {renderSubMenu(
                        activeMenu === 'about',
                        <>
                           <li className="menu-item eqt-menu__item menu-item-192">
                              <Link href="/">Who We Are</Link>
                           </li>
                           <li className="menu-item eqt-menu__item menu-item-234">
                              <Link href="/">Our Approach</Link>
                           </li>
                        </>
                     )}
                  </li>

                  {/* Projects */}
                  <li
                     onClick={() => toggleMenu('project')}
                     className={`menu-item eqt-menu__item menu-item-has-children ${
                        activeMenu === 'project' ? 'eqt-menu__item--active' : ''
                     }`}
                  >
                     <a role="button">Projects</a>
                     <span className="eqt-menu__dropdown-icon eqt-menu__dropdown-icon--rotated">
                        <PointerDown />
                     </span>
                     <span className="dropdown-icon dropdown-depth-0">
                        <PointerDown />
                     </span>

                     {renderSubMenu(
                        activeMenu === 'project',
                        <>
                           {/* Real Estate */}
                           <li
                              onClick={(e) => toggleSubMenu('real-estate', e)}
                              className={`menu-item eqt-menu__item menu-item-has-children ${
                                 activeSubMenu === 'real-estate'
                                    ? 'eqt-menu__item--active'
                                    : ''
                              }`}
                           >
                              <a role="button">Real Estate</a>
                              <span className="eqt-menu__dropdown-icon eqt-menu__dropdown-icon--rotated">
                                 <ArrowRight />
                              </span>
                              <span className="dropdown-icon dropdown-depth-1">
                                 <ArrowRight />
                              </span>

                              {renderSubMenu(
                                 activeSubMenu === 'real-estate',
                                 <>
                                    <li className="menu-item eqt-menu__item menu-item-159">
                                       <Link href="/">Apartment</Link>
                                    </li>
                                    <li className="menu-item eqt-menu__item menu-item-160">
                                       <Link href="/">Land</Link>
                                    </li>
                                 </>
                              )}
                           </li>

                           <li className="menu-item eqt-menu__item menu-item-157">
                              <Link href="/">Consultation</Link>
                           </li>
                        </>
                     )}
                  </li>

                  {/* Other top-level */}
                  <li className="menu-item eqt-menu__item menu-item-8">
                     <Link href="/">Hospital Projects</Link>
                  </li>
                  <li className="menu-item eqt-menu__item menu-item-329">
                     <Link href="/">Career</Link>
                  </li>
                  <li className="menu-item eqt-menu__item menu-item-292">
                     <Link href="/">Insight</Link>
                  </li>
               </ul>
            </div>

            <div className="mobile-right-btn">
               <Link href="/" className="btn-primary">
                  <span>Get in Touch</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

function SearchModal({ searchOpen, setSearchOpen }) {
   return (
      <div
         className="footer-search-option"
         style={{
            pointerEvents: searchOpen ? 'auto' : 'none',
            opacity: searchOpen ? 1 : 0,
            transform: searchOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
         }}
      >
         <div className="footer-search-option-inner">
            <div
               role="button"
               tabIndex={0}
               className="close-search"
               onClick={() => setSearchOpen((prev) => !prev)}
            >
               <HamburgerClose />
            </div>

            <div className="container">
               <div className="search-container">
                  <h3 className="heading-h3">Search</h3>
                  <form className="search-heading">
                     <input
                        type="search"
                        className="search-input"
                        id="search-input"
                        defaultValue=""
                     />
                     <button type="submit" className="search-button">
                        <Search />
                     </button>
                  </form>

                  <div
                     className="search-suggestions"
                     style={{ display: 'block' }}
                  >
                     <p className="suggestion-title inter-body-one">
                        Popular Searches
                     </p>
                     <div className="suggestion-tags">
                        {['Apartment', 'Land', 'Consultancy'].map((item) => (
                           <Link key={item} href="/" className="suggestion-tag">
                              <SearchResultArrow />
                              <span>{item}</span>
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
