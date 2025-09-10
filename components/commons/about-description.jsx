import Link from 'next/link';

function AboutDescription({ title, descriptions, buttonDetails }) {
   return (
      <section className="eqt-description">
         <div className="container">
            <div className="eqt-description-inner">
               <h2 className="heading-h2">{title}</h2>
               <div className="description-wrapper">
                  {descriptions.map((descriptions, idx) => (
                     <p key={idx}>{descriptions}</p>
                  ))}
                  {buttonDetails && (
                     <Link
                        className="btn-transparent text-uppercase"
                        href={buttonDetails.link}
                        target="_blank"
                     >
                        <span>{buttonDetails.title}</span>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutDescription;
