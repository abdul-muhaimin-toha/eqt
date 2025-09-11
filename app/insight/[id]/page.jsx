import PostDetails from '@/components/commons/post-details';
import { Facebook, Instagram, X } from '@/components/icons/social-media';
import InsightDetailsHeader from '@/components/insight/insight-details-header';
import MoreInsights from '@/components/insight/more-insights';

const dummyRichtext = `
                  <p>
                     The cement industry is a cornerstone of modern construction
                     but also a significant contributor to global carbon dioxide
                     emissions, accounting for around 7% of total emissions. To
                     address this challenge, researchers and industry leaders
                     are exploring sustainable solutions that minimize
                     environmental impact while maintaining cement’s essential
                     role in infrastructure development.
                  </p>
                  <h4>Why Sustainability in Building</h4>
                  <p>
                     Environmental Impact: Traditional cement production relies
                     heavily on energy-intensive processes and raw materials
                     like limestone, which release substantial amounts of CO₂
                     during calcination.
                  </p>
                  <p>
                     Global Demand: With urbanization accelerating worldwide,
                     cement production is expected to rise, making
                     sustainability a critical focus.
                  </p>
                  <p>
                     <img src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-5.webp" alt="" width="{1164}" height="{500}" sizes="(max-width: 1164px) 100vw, 1164px" />
                  </p>
                  <h4>Key Innovations in Sustainable Building</h4>
                  <p>
                     Geopolymer cement is produced using industrial by-products
                     such as fly ash and blast furnace slag, eliminating the
                     need for traditional Portland cement. This alternative not
                     only reduces CO₂ emissions but also repurposes waste
                     materials, contributing to a circular economy.
                  </p>
                  <p>
                     Researchers at the Massachusetts Institute of Technology
                     have developed an electrochemical method for cement
                     production that operates at room temperature. This process
                     significantly reduces emissions by avoiding the
                     high-temperature kilns traditionally used in cement
                     manufacturing.
                  </p>
                  <p>
                     <img src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-5.webp" alt="" width="{1164}" height="{500}" sizes="(max-width: 1164px) 100vw, 1164px" />
                  </p>
                  <h4>Benefits of Sustainable Building</h4>
                  <p>
                     Innovations in carbon-negative cement involve integrating
                     CO₂ capture into the production process, resulting in a net
                     reduction of atmospheric CO₂. Companies like Eco Material
                     Technologies have pioneered methods to produce cement that
                     absorbs more CO₂ than it emits during its lifecycle.
                  </p>
                  <h5>Carbon-Negative Cement</h5>
                  <ul>
                     <li>
                        Captures and stores CO₂ during production, achieving
                        net-negative emissions.
                     </li>
                     <li>
                        Provides a long-term solution for mitigating climate
                        change.
                     </li>
                  </ul>
                  <p>
                     Utilizing alternative fuels such as waste biomass and
                     incorporating recycled materials like demolition waste into
                     cement production can lower emissions and reduce reliance
                     on virgin resources. This approach not only mitigates
                     environmental impact but also promotes resource efficiency.
                  </p>
                  <blockquote>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 26.6072H44.898L56.2245 7.85718H44.898L33.5714 26.6072V52.8572H60V26.6072Z" fill="#E6AF2E"></path>
        <path d="M26.4297 52.8572V26.6072H11.3276L22.6542 7.85718H11.3276L0.00111389 26.6072V52.8572H26.4297Z" fill="#E6AF2E"></path>
        </svg>
    <p>Utilizing alternative fuels such as waste biomass and incorporating recycled materials like demolition waste into cement production can lower emissions and reduce reliance on virgin resources. This approach not only mitigates environmental impact but also promotes resource efficiency.</p></blockquote>
                  <h4>Real-World Applications</h4>
                  <p>
                     Innovations in carbon-negative cement involve integrating
                     CO₂ capture into the production process, resulting in a net
                     reduction of atmospheric CO₂. Companies like Eco Material
                     Technologies have pioneered methods to produce cement that
                     absorbs more CO₂ than it emits during its lifecycle.
                  </p>
                  <p>
                     Utilizing alternative fuels such as waste biomass and
                     incorporating recycled materials like demolition waste into
                     cement production can lower emissions and reduce reliance
                     on virgin resources. This approach not only mitigates
                     environmental impact but also promotes resource efficiency.
                  </p>
`;

export default function InsightDetailsPage() {
   return (
      <>
         <section className="insights-description-wrapper bg-white">
            <div className="container">
               <InsightDetailsHeader
                  headingDetails={{
                     date: '5 August 2025',
                     title: 'How this founder created the first hanger worthy of Vogue',
                     postLink:
                        'https://staging.hellonotionhive.com/wordpress/eqt/how-this-founder-created-the-first-hanger-worthy-of-vogue-9/',
                     image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
                     socials: [
                        { href: '/', icon: <Facebook /> },
                        { href: '/', icon: <Instagram /> },
                        { href: '/', icon: <X /> },
                     ],
                  }}
               />

               <PostDetails dummyRichtext={dummyRichtext} />
            </div>
         </section>
         <MoreInsights />
      </>
   );
}
