function Video() {
   return (
      <section className="hero-section video-hero">
         <video
            className="hero-section-background"
            autoPlay
            loop
            muted
            playsInline
         >
            <source
               src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/6026291_House_Interior-Design_1920x1080.mp4"
               type="video/mp4"
            />
         </video>
      </section>
   );
}

export default Video;
