import Image from 'next/image';

function WhyChooseUs({ data }) {
   const { description, description_title, image_one, image_two } = data.data;

   return (
      <section className="home-about who-we-are bg-white approach-description">
         <div className="container">
            <div className="home-about-top">
               <div className="home-about-top-left">
                  <div className="mission-content">
                     <h2 className="heading-h2">
                        Why Our Approach Delivers Better Results
                     </h2>
                     <div className="mission-description">
                        <p>
                           A real estate title is a legal document proving
                           property ownership, outlining rights,
                           responsibilities, and history. It ensures lawful
                           transfer, protects buyers from disputes, and confirms
                           clear, marketable ownership.
                        </p>
                        <ul className="list-disc">
                           <li>
                              Adaptive to diverse industries and project types
                           </li>
                           <li>
                              Strong focus on risk mitigation and
                              cost-efficiency
                           </li>
                           <li>In-depth regulatory and compliance knowledge</li>
                           <li>
                              Experienced, multidisciplinary team of experts
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="home-about-top-right">
                  <Image
                     width={500}
                     height={550}
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Mask-group.png"
                     className="image-01"
                  />
                  <Image
                     width={500}
                     height={550}
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Frame-2147223735.png"
                     className="image-02"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default WhyChooseUs;
