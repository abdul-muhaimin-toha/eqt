import parse from 'html-react-parser';
import Link from 'next/link';

function PostDetails({ dummyRichtext, applyLink }) {
   return (
      <div className="insights-description-details">
         <div className="insights-description-details-job">
            {dummyRichtext
               ? parse(dummyRichtext, {
                    replace: (domNode) => {
                       if (domNode.name === 'script') return null;
                    },
                 })
               : null}
            {applyLink && (
               <Link class="btn-transparent text-uppercase" href={applyLink}>
                  <span>Apply Now</span>
               </Link>
            )}
         </div>
      </div>
   );
}

export default PostDetails;
