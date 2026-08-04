export default function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="background-video"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="background-overlay"></div>
    </>
  );
}