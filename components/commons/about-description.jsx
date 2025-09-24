import { getLinkTarget } from '@/utils/utility';
import Link from 'next/link';
import parse from 'html-react-parser';

function AboutDescription({ data }) {
   const { btn_custom_url, btn_title, description, open_in_new_tab, title } =
      data.data;

   return (
      <section className="eqt-description">
         <div className="container">
            <div className="eqt-description-inner">
               <h2 className="heading-h2" data-aos="fade-up">
                  {title}
               </h2>
               <div className="description-wrapper">
                  <div data-aos="fade-up" data-aos-delay="100">
                     {description
                        ? parse(description, {
                             replace: (domNode) => {
                                if (domNode.name === 'script') return null;
                             },
                          })
                        : null}
                  </div>
                  {btn_custom_url && btn_title && (
                     <Link
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="btn-transparent text-uppercase !mt-10"
                        href={btn_custom_url}
                        target={getLinkTarget(open_in_new_tab)}
                     >
                        <span>{btn_title}</span>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutDescription;
