const ProfileSection = () => {
  return (
    <section className="bg-purple-primary relative overflow-hidden">
      <div className="container mx-auto px-4 pt-32 relative">
        {/* Background Watermark Text */}
        <div className="absolute bottom-24 max-sm:bottom-0 max-sm:right-0 opacity-30 text-purple-card petrov-sans text-[168px] max-sm:text-[100px] font-black max-sm:leading-[120px] leading-[160px] [-webkit-text-stroke:2px_#5D2B5D] z-[1]">
          YOGESH
          <br />
          PAWAR
        </div>

        {/* Content */}
        <div className="px-[20px] flex flex-col lg:flex-row justify-between items-center relative z-[2]">
          <div className="relative max-sm:order-2">
            <img
              src="/images/yogesh-pawar.png"
              alt="Yogesh Pawar"
              className=" h-auto object-cover object-top"
            />
          </div>

          <div className="lg:max-w-[45%]  z-20 max-sm:order-1 max-sm:flex max-sm:flex-col max-sm:items-center">
            <h2 className="text-orange-primary max-sm:text-5xl text-6xl font-bold mb-4">
              Yogesh Pawar
            </h2>
            <h3 className="text-white text-2xl mb-8">
              Founder - Purple Haze Media
            </h3>
            <p className="text-gray-300 text-lg">
              With A Passion For Marketing And A Strategic Approach To Business,
              I Specialize In Creating Impactful Solutions That Drive Growth And
              Elevate Brands. My Experience Spans Market Research, Innovative
              Campaign Strategies, And Data-Driven Decision- Making, All Aimed
              At Connecting Businesses With Their Ideal Audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
