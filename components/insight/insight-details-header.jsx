import Link from 'next/link';
import Image from 'next/image';

function InsightDetailsHeader({ headingDetails }) {
   const { date, title, postLink, image, socials } = headingDetails;
   return (
      <div className="insights-description-header">
         <p className="color-two date">{date}</p>
         <h2 className="heading-h2 post-title">{title}</h2>
         <div className="sassy-social-share-wraper">
            <div className="heateor_sss_sharing_container heateor_sss_horizontal_sharing">
               <div className="flex flex-row items-center justify-center gap-2.5">
                  {socials?.map((social, index) => (
                     <Link key={index} href={social.href}>
                        {social.icon}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         <div className="blog-thumbnail">
            <Link href={postLink}>
               <Image
                  width={1395}
                  height={700}
                  src={image}
                  className="blog-featured-image wp-post-image"
                  alt=""
               />
            </Link>
         </div>
      </div>
   );
}

export default InsightDetailsHeader;
