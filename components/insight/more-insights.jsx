import { InsightCard } from './insight-showcase';

const insights = [
   {
      title: 'How EQT Leverages Technology for Smarter Decisions',
      link: 'https://staging.hellonotionhive.com/wordpress/eqt/our-approach-to-risk-management-and-long-term-growth/',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-2.webp',
      width: 879,
      height: 680,
      date: '3 August 2025',
   },
   {
      title: 'How EQT Transforms Underperforming Properties into High-Value Assets',
      link: 'https://staging.hellonotionhive.com/wordpress/eqt/how-eqt-transforms-underperforming-properties-into-high-value-assets-2/',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle.webp',
      width: 740,
      height: 500,
      date: '3 August 2025',
   },
   {
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      link: 'https://staging.hellonotionhive.com/wordpress/eqt/how-this-founder-created-the-first-hanger-worthy-of-vogue-2/',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      width: 1395,
      height: 700,
      date: '5 August 2025',
   },
];

function MoreInsights() {
   return (
      <div className="related-posts bg-white">
         <div className="container">
            <h2 className="heading-h2">More Relevant Blogs</h2>
            <div className="related-posts-list">
               {insights.map((insight, index) => (
                  <InsightCard key={index} insight={insight} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default MoreInsights;
