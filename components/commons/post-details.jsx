import React from 'react';

function PostDetails({ dummyRichtext }) {
   return (
      <div className="insights-description-details">
         <div
            className="insights-description-details-job"
            dangerouslySetInnerHTML={{ __html: dummyRichtext }}
         />
      </div>
   );
}

export default PostDetails;
