import Image from 'next/image';

function HeroBanner({ data }) {
   const feature_image = data?.data?.feature_image;
   const title = data?.data?.title;

   return (
      <section
         data-aos="fade-up"
         data-aos-delay="100"
         className="banner-section relative w-full h-[60vh] flex items-center justify-center"
      >
         {feature_image && (
            <Image
               src={feature_image}
               alt={title}
               fill
               priority
               className="feature-bg-image object-cover"
            />
         )}

         {/* Overlay (optional, if you want to darken image for better text visibility) */}
         <div className="absolute inset-0 bg-black/40"></div>

         {/* Content */}

         <h1 className="relative z-10 large-h1 text-white">{title}</h1>
      </section>
   );
}

export default HeroBanner;
