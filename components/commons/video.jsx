function Video({ data }) {
   const background_video = data?.data?.background_video;

   return (
      <section className="hero-section video-hero">
         <video
            className="hero-section-background"
            autoPlay
            loop
            muted
            playsInline
         >
            <source src={background_video} type="video/mp4" />
         </video>
      </section>
   );
}

export default Video;
