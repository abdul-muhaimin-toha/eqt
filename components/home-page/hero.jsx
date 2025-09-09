import Link from 'next/link';

function Hero() {
   return (
      <section className="hero-section">
         <video
            poster="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/hero-banner.webp"
            className="hero-section-background"
            autoPlay
            loop
            muted
         >
            <source
               src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/2173665_Aerial_City_1920x1080.mp4"
               type="video/mp4"
            />
         </video>
         <div className="hero-section-background-overlay" />
         <div className="hero-section-content">
            <div className="hero-title-wrapper">
               <h1 className="large-h1 text-white">
                  <div>Discover Your Dream</div>
                  <div>Home with EQT</div>
               </h1>
            </div>
            <div className="hero-section-description text-white">
               Luxury living, prime locations, exceptional value.
            </div>
            <div className="hero-section-btn">
               <Link href="/" className="btn-primary btn-white">
                  <span>Explore Projects</span>
               </Link>
            </div>
         </div>
      </section>
   );
}

export default Hero;
