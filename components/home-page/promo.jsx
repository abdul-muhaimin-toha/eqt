import Image from 'next/image';

const promoFeatures = [
   {
      title: 'Quality Construction',
      description:
         'EQT was established with a mission to make good people wealthy.',
      icon: '/Layer_1-3.svg',
      alt: 'Quality Construction',
   },
   {
      title: 'Prime Locations',
      description:
         'EQT was established with a mission to make good people wealthy.',
      icon: '/Layer_1-4.svg',
      alt: 'Prime Locations',
   },
   {
      title: 'Competitive Pricing',
      description:
         'EQT was established with a mission to make good people wealthy.',
      icon: '/Layer_1-5.svg',
      alt: 'Competitive Pricing',
   },
   {
      title: 'Timely Delivery',
      description:
         'EQT was established with a mission to make good people wealthy.',
      icon: '/Layer_1-6.svg',
      alt: 'Timely Delivery',
   },
];

function Promo() {
   return (
      <section className="home-promo-section">
         <div className="container">
            {/* Background with overlay */}
            <div className="background-container">
               <div
                  className="background-image"
                  style={{
                     backgroundImage:
                        'url("https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/image-7-scaled.webp")',
                  }}
               />
               <div className="background-overlay" />
            </div>

            {/* Content */}
            <div className="content-container">
               {/* Section Titles */}
               <div className="titles-wrapper">
                  <div className="top-title text-center text-white body-two-caps text-uppercase">
                     Why Choose Us
                  </div>
                  <h2 className="section-title text-white text-center font-regular heading-h2">
                     What Sets Us Apart
                  </h2>
               </div>

               {/* Feature Cards */}
               <div className="cards-container d-flex">
                  {promoFeatures.map((feature, idx) => (
                     <FeatureCard feature={feature} key={idx} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Promo;

function FeatureCard({ feature }) {
   return (
      <div className="promo-card">
         <div className="card-image">
            <Image
               src={`https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07${feature.icon}`}
               alt={feature.alt}
               width={64}
               height={64}
               className="card-img"
            />
         </div>
         <h3 className="card-title lead-text-one">{feature.title}</h3>
         <p className="card-description">{feature.description}</p>
      </div>
   );
}
