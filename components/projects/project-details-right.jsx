import Link from 'next/link';
import Location from '../icons/location';
import Whatsapp from '../icons/whatsapp';
import Image from 'next/image';
import parse from 'html-react-parser';

const whatsappNumber = '8801839642956'; // remove '+' for wa.me link
const message = 'Hello! I would like to know more about your services.';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
   message
)}`;

function ProjectDetailsRight({ project }) {
   if (!project) return null;

   const {
      amenities,
      googleMapIframe,
      overview,
      projectDetailsCards = [],
      projectLocation,
      projectStatus,
      projectStatusColor,
      projectType,
      title,
      youtubeVideo,
   } = project;

   const safeParse = (html) =>
      html
         ? parse(html, {
              replace: (domNode) =>
                 domNode.name === 'script' ? null : undefined,
           })
         : null;

   return (
      <div className="single-product-right">
         <div className="single-product-right-inner">
            <div className="single-product-right-inner-top">
               <ul className="product-type-list">
                  {projectStatus && (
                     <li
                        className="text-white"
                        style={{
                           background: projectStatusColor || '#000',
                           borderColor: projectStatusColor || '#000',
                        }}
                     >
                        {projectStatus}
                     </li>
                  )}
                  {projectType && (
                     <li
                        style={{ background: '#fff', borderColor: '#1F51261A' }}
                     >
                        {projectType}
                     </li>
                  )}
               </ul>
               <h1 className="heading-h3">{title}</h1>
               <div className="project-location">
                  <Location />
                  <span className="body-two-caps text-uppercase">
                     {projectLocation}
                  </span>
               </div>
               <div className="product-btn-group">
                  <Link
                     href="/contact-us"
                     className="btn-primary text-uppercase"
                  >
                     <span>interested to buy</span>
                  </Link>
                  <Link
                     className="btn-transparent"
                     href={whatsappLink}
                     rel="noopener noreferrer"
                     target="_blank"
                  >
                     <Whatsapp />
                     <span className="text-uppercase">Chat with us</span>
                  </Link>
               </div>
            </div>

            <div className="single-product-right-inner-bottom">
               {/* Overview Section */}
               {overview && (
                  <div className="overview-section">
                     <h4 className="heading-h4 font-weight-400 overview-title color-two font-primary">
                        Overview
                     </h4>
                     <div className="overview-description">
                        {safeParse(overview)}
                     </div>
                  </div>
               )}

               {/* Project Details Cards */}
               {projectDetailsCards.length > 0 && (
                  <ul className="project-details-feature-cards">
                     {projectDetailsCards.map((card, idx) => (
                        <div
                           key={idx}
                           className={`details-card-item ${
                              (idx + 1) % 3 === 0 ? 'no-border' : ''
                           }`}
                        >
                           <div className="details-card-item-inner">
                              <p className="top-cards-title">
                                 {card.top_title}
                              </p>
                              <div className="item">
                                 <Image
                                    width={24}
                                    height={24}
                                    src={card.image}
                                    alt={card.title || 'Card image'}
                                 />
                                 <p className="title inter-body-one">
                                    {card.title}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </ul>
               )}

               {/* Amenities Section */}
               {amenities && (
                  <div className="amenities-section">
                     <h4 className="heading-h4">Amenities</h4>
                     <div className="amenities-description">
                        {safeParse(amenities)}
                     </div>
                  </div>
               )}

               {/* Preview Video */}
               {youtubeVideo && (
                  <div className="preview-video-section">
                     <h4 className="heading-h4">Preview Video</h4>
                     <div className="video-section">
                        {safeParse(youtubeVideo)}
                     </div>
                  </div>
               )}

               {/* Location Map */}
               {googleMapIframe && (
                  <div className="preview-video-section">
                     <h4 className="heading-h4">Location</h4>
                     <div className="map-section">
                        {safeParse(googleMapIframe)}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default ProjectDetailsRight;
