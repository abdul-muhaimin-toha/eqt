import Image from 'next/image';
import SocialShare from './social-share';

function InsightDetailsHeader({ headingDetails }) {
   const { date, title, image } = headingDetails;

   return (
      <header className="insights-description-header">
         {date && <p className="color-two date">{date}</p>}
         {title && <h2 className="heading-h2 post-title">{title}</h2>}

         <div className="sassy-social-share-wraper">
            <div className="heateor_sss_sharing_container heateor_sss_horizontal_sharing">
               <SocialShare />
            </div>
         </div>

         {image && (
            <div className="blog-thumbnail">
               <Image
                  src={image}
                  alt={title || 'Insight featured image'}
                  width={1395}
                  height={700}
                  className="blog-featured-image object-cover wp-post-image aspect-square md:aspect-video"
               />
            </div>
         )}
      </header>
   );
}

export default InsightDetailsHeader;
