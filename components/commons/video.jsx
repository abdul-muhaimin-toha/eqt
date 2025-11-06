import Image from 'next/image';

function Video({ data }) {
  //  const background_video = data?.data?.background_video;
  const background_video =
    'https://pub-0d4fb0c791fc4e29a7b981d1115e2b4e.r2.dev/eqt/House_Interior-Design_1920x1080.mp4';
  const background_banner = data?.data?.background_banner;

  return (
    <section className="hero-section video-hero">
      {background_video ? (
        <video
          className="hero-section-background"
          autoPlay
          loop
          muted
          playsInline
          poster={background_banner || undefined}
        >
          <source src={background_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        background_banner && (
          <Image
            src={background_banner}
            fill
            alt="Hero background"
            className="hero-section-background"
          />
        )
      )}
    </section>
  );
}

export default Video;
