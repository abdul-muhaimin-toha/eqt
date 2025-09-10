'use client';

import Image from 'next/image';
import Link from 'next/link';

function Cta() {
   return (
      <section className="banner-section get-in-touch">
         <Image
            src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Frame-2147223601-1.webp"
            alt=""
            className="feature-bg-image"
            fill
            priority
         />
         <div className="get-in-touch-content">
            <h2 className="heading-h2 text-white">
               Ready to Work With a Partner Who Understands Your Vision?
            </h2>
            <Link className="btn-primary text-uppercase" href="/">
               <span>Let’s Talk</span>
            </Link>
         </div>
      </section>
   );
}

export default Cta;
