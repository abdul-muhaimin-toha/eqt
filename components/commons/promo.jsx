import Image from 'next/image';

function Promo({ data }) {
   const {
      background_image,
      feature_cards = [],
      title = '',
      top_title = '',
   } = data?.data || {};

   return (
      <section className="home-promo-section">
         <div className="container">
            {/* Background with overlay */}
            <div className="background-container">
               <div
                  className="background-image"
                  style={{
                     backgroundImage: `url(${background_image})`,
                  }}
               />
               <div className="background-overlay" />
            </div>

            {/* Content */}
            <div className="content-container">
               {/* Section Titles */}
               <div className="titles-wrapper">
                  <div className="top-title text-center text-white body-two-caps text-uppercase">
                     {top_title}
                  </div>
                  <h2 className="section-title text-white text-center font-regular heading-h2">
                     {title}
                  </h2>
               </div>

               {/* Feature Cards */}
               <div className="cards-container d-flex">
                  {feature_cards.map((feature) => (
                     <FeatureCard feature={feature} key={feature._id} />
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
               src={feature.card_image}
               alt={feature.card_title}
               width={64}
               height={64}
               className="card-img"
            />
         </div>
         <h3 className="card-title lead-text-one">{feature.card_title}</h3>
         <p className="card-description">{feature.card_description}</p>
      </div>
   );
}
