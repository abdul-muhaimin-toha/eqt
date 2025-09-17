import GetInTouchForm from './get-in-touch-form';

function GetInTouch({ data }) {
   const background_image = data?.data?.background_image;
   const title = data?.data?.title;
   const top_title = data?.data?.top_title;

   return (
      <section className="get-in-touch-section">
         <div className="container">
            <div className="background-container">
               <div
                  className="background-image"
                  style={{
                     backgroundImage: `url(${background_image})`,
                  }}
               />
               <div className="background-overlay" />
            </div>

            <div className="content-container">
               <div className="titles-wrapper">
                  <div className="section-title text-white text-center font-primary heading-h2">
                     {top_title}
                  </div>
                  <div className="top-title text-center text-white body-one-regular">
                     {title}
                  </div>

                  <div className="touch-form">
                     <GetInTouchForm />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default GetInTouch;
