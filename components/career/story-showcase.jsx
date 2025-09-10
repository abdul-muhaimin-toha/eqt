'use client';

import Image from 'next/image';

const storyData = [
   {
      img: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/feature-01.webp',
      topTitle: 'Team Hangout',
      title: 'EQT team members fun activities',
      url: '/',
   },
   {
      img: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/feature-02.webp',
      topTitle: 'Team Hangout',
      title: 'EQT team members fun activities',
      url: '/',
   },
   {
      img: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/feature-03.webp',
      topTitle: 'Team Hangout',
      title: 'EQT team members fun activities',
      url: '/',
   },
   {
      img: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/feature-04.webp',
      topTitle: 'Team Hangout',
      title: 'EQT team members fun activities',
      url: '/',
   },
];

const StoryCard = ({ story }) => (
   <div className="career-promo-card">
      <div className="career-promo-card-inner">
         <Image
            width={500}
            height={400}
            className="feature-bg-image"
            src={story.img}
            alt=""
         />
         <p className="top-title">{story.topTitle}</p>
         <p className="title lead-text-one text-white">{story.title}</p>
         <a target="_blank" className="cards-url-item" href={story.url} />
      </div>
   </div>
);

function StoryShowcase() {
   return (
      <section className="career-promo-list bg-white">
         <div className="container">
            <h4 className="heading-h4 career-promo-title">
               We don’t just work side by side; we collaborate. Our diverse
               expertise, skills, and experiences allow us to learn from each
               other and produce exceptional, effective results.
            </h4>
            <div className="career-promo-cards">
               {storyData.map((story, idx) => (
                  <StoryCard key={idx} story={story} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default StoryShowcase;
