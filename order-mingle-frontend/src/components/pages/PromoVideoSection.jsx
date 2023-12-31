const PromoVideoSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video background */}
      <iframe
        title="YouTube Video"
        className="object-cover w-full h-full"
        src="https://www.youtube.com/embed/AvZzlw6izMw?autoplay=1&controls=0&mute=1&loop=1&playlist=AvZzlw6izMw"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold tracking-tighter text-center md:text-5xl lg:text-6xl">
          Check our Promo Video!
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Discover how Order Mingle can revolutionize your online shopping
          experience.
        </p>
      </div>
    </div>
  );
};

export default PromoVideoSection;
