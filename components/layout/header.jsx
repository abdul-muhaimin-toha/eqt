'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';

import PointerDown from '../icons/pointer-down';
import ArrowRight from '../icons/arrow-right';
import Search from '../icons/search';
import Hamburger from '../icons/hamburger';
import HamburgerClose from '../icons/hamburger-close';
import SearchResultArrow from '../icons/search-result-arrow';
import { makeMenuTree } from '@/utils/utility';
import { useRouter } from 'next/navigation';

function Header({ menuItems, crbThemeOptions }) {
   const [mobileOpen, setMobileOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState(null);
   const [activeSubMenu, setActiveSubMenu] = useState(null);
   const [searchOpen, setSearchOpen] = useState(false);

   const { companyLogo, joinNow } = crbThemeOptions || {};

   const formatedMenu = useMemo(() => makeMenuTree(menuItems), [menuItems]);

   return (
      <>
         <HeaderLarge
            setSearchOpen={setSearchOpen}
            setMobileOpen={setMobileOpen}
            menu={formatedMenu}
            companyLogo={companyLogo}
            joinNow={joinNow}
         />
         <MobileMenu
            mobileOpen={mobileOpen}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            activeSubMenu={activeSubMenu}
            setActiveSubMenu={setActiveSubMenu}
            setMobileOpen={setMobileOpen}
            menu={formatedMenu}
            companyLogo={companyLogo}
            joinNow={joinNow}
         />
         <SearchModal
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            crbThemeOptions={crbThemeOptions}
         />
      </>
   );
}

export default Header;

function HeaderLarge({
   setSearchOpen,
   setMobileOpen,
   menu,
   companyLogo,
   joinNow,
}) {
   // Recursive function to render menu items
   const renderMenu = (items, depth = 0) => {
      return items.map((item, idx) => {
         const hasChildren = item.childItems?.nodes?.length > 0;

         return (
            <li
               key={idx}
               className={`menu-item ${
                  hasChildren ? 'menu-item-has-children' : ''
               }`}
            >
               <Link href={item.url}>{item.label}</Link>

               {hasChildren && (
                  <span className={`dropdown-icon dropdown-depth-${depth}`}>
                     {depth === 0 ? <PointerDown /> : <ArrowRight />}
                  </span>
               )}

               {hasChildren && (
                  <ul className="sub-menu">
                     {renderMenu(item.childItems.nodes, depth + 1)}
                  </ul>
               )}
            </li>
         );
      });
   };

   return (
      <header className="header-top">
         <div className="header-top-wrapper">
            {/* Logo */}
            <Link href="/" className="header-logo">
               <Image
                  src={companyLogo}
                  alt="EQT Logo"
                  width={120}
                  height={40}
                  priority
               />
            </Link>

            {/* Mobile Buttons */}
            <div className="mobile-hamburger">
               <button
                  className="search-btn-mobile cursor-pointer"
                  onClick={() => setSearchOpen((prev) => !prev)}
               >
                  <Search />
               </button>
               <button
                  onClick={() => setMobileOpen(true)}
                  className="hamburger-menu cursor-pointer"
               >
                  <Hamburger />
               </button>
            </div>

            {/* Desktop Menu */}
            <div className="header-right-area">
               <div className="header-menu">
                  <div className="menu-primary-menu-container">
                     <ul className="menu">{renderMenu(menu)}</ul>
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
               <Link href={joinNow} className="btn-primary">
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
   menu,
   companyLogo,
   joinNow,
}) {
   const toggleMenu = (menuKey) => {
      setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
      setActiveSubMenu(null);
   };

   const toggleSubMenu = (submenuKey, e) => {
      e.stopPropagation();
      setActiveSubMenu((prev) => (prev === submenuKey ? null : submenuKey));
   };

   const renderSubMenu = (isActive, children) => (
      <ul className={`eqt-menu__submenu ${isActive ? 'activated' : ''}`}>
         {children}
      </ul>
   );

   return (
      <div className={`mobile-search-item ${mobileOpen ? 'activated' : ''}`}>
         <div className="mobile-search-item-inner">
            {/* Logo & Close */}
            <div className="mobile-fixed-item">
               <Link
                  onClick={() => setMobileOpen(false)}
                  className="header-logo"
                  href="/"
               >
                  <Image
                     src={companyLogo}
                     alt="EQT Logo"
                     width={120}
                     height={40}
                  />
               </Link>
               <div className="mobile-hamburger">
                  <button
                     onClick={() => setMobileOpen(false)}
                     className="hamburger-menu cursor-pointer"
                  >
                     <HamburgerClose />
                  </button>
               </div>
            </div>

            {/* Menu */}
            <div className="header-menu-mobile">
               <ul className="eqt-menu">
                  {menu.map((item, idx) => {
                     const topKey = item.id || `top-${idx}`;
                     const hasChildren = item.childItems?.nodes?.length > 0;

                     return (
                        <li
                           key={topKey}
                           onClick={
                              hasChildren ? () => toggleMenu(topKey) : undefined
                           }
                           className={`menu-item cursor-pointer eqt-menu__item
                              ${hasChildren ? 'menu-item-has-children' : ''}
                              ${
                                 activeMenu === topKey
                                    ? 'eqt-menu__item--active'
                                    : ''
                              }`}
                        >
                           {hasChildren ? (
                              <>
                                 <a role="button">{item.label}</a>
                                 <span className="eqt-menu__dropdown-icon">
                                    <PointerDown />
                                 </span>
                                 <span className="dropdown-icon dropdown-depth-0">
                                    <PointerDown />
                                 </span>
                              </>
                           ) : (
                              <Link
                                 href={item.url}
                                 onClick={() => setMobileOpen(false)}
                              >
                                 {item.label}
                              </Link>
                           )}

                           {hasChildren &&
                              renderSubMenu(
                                 activeMenu === topKey,
                                 item.childItems.nodes.map((child, cidx) => {
                                    const subKey =
                                       child.id || `sub-${idx}-${cidx}`;
                                    const hasSubChildren =
                                       child.childItems?.nodes?.length > 0;

                                    return (
                                       <li
                                          key={subKey}
                                          onClick={
                                             hasSubChildren
                                                ? (e) =>
                                                     toggleSubMenu(subKey, e)
                                                : undefined
                                          }
                                          className={`menu-item eqt-menu__item
                                             ${
                                                hasSubChildren
                                                   ? 'menu-item-has-children'
                                                   : ''
                                             }
                                             ${
                                                activeSubMenu === subKey
                                                   ? 'eqt-menu__item--active'
                                                   : ''
                                             }`}
                                       >
                                          {hasSubChildren ? (
                                             <>
                                                <a role="button">
                                                   {child.label}
                                                </a>
                                                <span
                                                   className={`eqt-menu__dropdown-icon ${
                                                      activeSubMenu === subKey
                                                         ? 'eqt-menu__dropdown-icon--rotated'
                                                         : ''
                                                   }`}
                                                >
                                                   <ArrowRight />
                                                </span>
                                                <span className="dropdown-icon dropdown-depth-1">
                                                   <ArrowRight />
                                                </span>
                                             </>
                                          ) : (
                                             <Link
                                                href={child.url}
                                                onClick={() =>
                                                   setMobileOpen(false)
                                                }
                                             >
                                                {child.label}
                                             </Link>
                                          )}

                                          {/* Subchildren */}
                                          {hasSubChildren &&
                                             renderSubMenu(
                                                activeSubMenu === subKey,
                                                child.childItems.nodes.map(
                                                   (subChild, sidx) => (
                                                      <li
                                                         key={
                                                            subChild.id ||
                                                            `subchild-${idx}-${cidx}-${sidx}`
                                                         }
                                                         className="menu-item eqt-menu__item"
                                                      >
                                                         <Link
                                                            href={subChild.url}
                                                            onClick={() =>
                                                               setMobileOpen(
                                                                  false
                                                               )
                                                            }
                                                         >
                                                            {subChild.label}
                                                         </Link>
                                                      </li>
                                                   )
                                                )
                                             )}
                                       </li>
                                    );
                                 })
                              )}
                        </li>
                     );
                  })}
               </ul>
            </div>

            {/* CTA */}
            <div className="mobile-right-btn">
               <Link
                  onClick={() => setMobileOpen(false)}
                  href={joinNow}
                  className="btn-primary"
               >
                  <span>Get in Touch</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

function SearchModal({ searchOpen, setSearchOpen, crbThemeOptions }) {
   const router = useRouter();
   const [searchTerm, setSearchTerm] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
         router.push(
            `/search?searchTerm=${encodeURIComponent(
               searchTerm.trim().toLowerCase()
            )}`
         );
         setSearchOpen(false);
      }
   };

   const handleSuggestionClick = (term) => {
      router.push(
         `/search?searchTerm=${encodeURIComponent(term.toLowerCase())}`
      );
      setSearchOpen(false);
   };

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
                  <form className="search-heading" onSubmit={handleSubmit}>
                     <input
                        type="search"
                        className="search-input"
                        id="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                        {crbThemeOptions.popularSearchSuggestion.map((item) => (
                           <a
                              key={item.title}
                              href={`/search?q=${encodeURIComponent(
                                 item.title
                              )}`}
                              className="suggestion-tag"
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleSuggestionClick(item.title);
                              }}
                           >
                              <SearchResultArrow />
                              <span>{item.title}</span>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
