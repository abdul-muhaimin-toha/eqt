import Image from 'next/image';
import parse from 'html-react-parser';

function WhyChooseUs({ data }) {
   const {
      description = '',
      description_title = '',
      image_one = '',
      image_two = '',
   } = data?.data || {};

   return (
      <section className="home-about who-we-are bg-white approach-description">
         <div className="container">
            <div className="home-about-top">
               <div className="home-about-top-left">
                  <div className="mission-content">
                     {description_title && (
                        <h2 className="heading-h2">{description_title}</h2>
                     )}
                     {description && (
                        <div className="mission-description">
                           {description
                              ? parse(description, {
                                   replace: (domNode) => {
                                      if (domNode.name === 'script')
                                         return null;
                                   },
                                })
                              : null}
                        </div>
                     )}
                  </div>
               </div>

               <div className="home-about-top-right">
                  {image_one && (
                     <Image
                        width={500}
                        height={550}
                        src={image_one}
                        alt={description_title || 'Why choose us image one'}
                        className="image-01"
                     />
                  )}
                  {image_two && (
                     <Image
                        width={500}
                        height={550}
                        src={image_two}
                        alt={description_title || 'Why choose us image two'}
                        className="image-02"
                     />
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}

export default WhyChooseUs;
