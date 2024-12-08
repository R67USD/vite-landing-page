const ProfileSection = () => {
  return (
    <section className="bg-purple-darker min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 h-screen relative">
        {/* Content Container */}
        <div className="flex flex-col items-start pt-20 ml-[15%]">
          {/* Text Content */}
          <div className="max-w-2xl z-20">
            <h2 className="text-orange-500 text-6xl font-bold mb-4">
              Yogesh Pawar
            </h2>
            <h3 className="text-white text-2xl font-light mb-8">
              Founder - Purple Haze Media
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With A Passion For Marketing And A<br />
              Strategic Approach To Business, I<br />
              Specialize In Creating Impactful
              <br />
              Solutions That Drive Growth And Elevate
              <br />
              Brands. My Experience Spans Market
              <br />
              Research, Innovative Campaign
              <br />
              Strategies, And Data-Driven Decision-
              <br />
              Making, All Aimed At Connecting
              <br />
              Businesses With Their Ideal Audience.
            </p>
          </div>
        </div>

        {/* Image Container - Positioned Absolutely */}
        <div className="absolute bottom-0 right-0 z-10">
          <img
            src="/images/Yogesh.png"
            alt="Yogesh Pawar"
            className="w-[700px] h-auto object-contain grayscale"
          />
        </div>

        {/* Background Text Effect */}
        <div className="absolute h-[322px] bottom-[10px] left-1/2 transform -translate-x-1/2 opacity-50 select-none pointer-events-none">
          <div className="profile-text" style={{ lineHeight: "0.8" }}>
            YOGESH
          </div>
          <div className="profile-text" style={{ lineHeight: "0.8" }}>
            PAWAR
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
