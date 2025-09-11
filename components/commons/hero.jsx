import Image from 'next/image';

function Hero({ title, bgImage }) {
   return (
      <section className="banner-section relative w-full h-[60vh] flex items-center justify-center">
         <Image
            src={bgImage}
            alt="Who We Are Banner"
            fill
            priority
            className="feature-bg-image object-cover"
         />

         {/* Overlay (optional, if you want to darken image for better text visibility) */}
         <div className="absolute inset-0 bg-black/40"></div>

         {/* Content */}
         <h1 className="relative z-10 large-h1 text-white">{title}</h1>
      </section>
   );
}

export default Hero;
