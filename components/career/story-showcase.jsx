'use client';

import { getLinkTarget } from '@/utils/utility';
import Image from 'next/image';
import Link from 'next/link';

const StoryCard = ({ story }) => (
   <div className="career-promo-card" data-aos="fade-up">
      <div className="career-promo-card-inner">
         <Image
            width={500}
            height={400}
            className="feature-bg-image"
            src={story.feature_image || ''}
            alt={story.title || 'Story image'}
         />
         {story.top_title && <p className="top-title">{story.top_title}</p>}
         {story.title && (
            <p className="title lead-text-one text-white">{story.title}</p>
         )}
         {story.url && (
            <Link
               target={getLinkTarget(story.open_in_new_tab)}
               className="cards-url-item"
               href={story.url || '#'}
               aria-label={`Read story: ${story.title || 'Story'}`}
            />
         )}
      </div>
   </div>
);

function StoryShowcase({ data }) {
   const { title = '', lifes = [] } = data?.data || {};

   return (
      <section className="career-promo-list bg-white">
         <div className="container">
            <h4 className="heading-h4 career-promo-title">{title}</h4>
            <div className="career-promo-cards">
               {lifes.map((story) => (
                  <StoryCard key={story._id || story.title} story={story} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default StoryShowcase;
