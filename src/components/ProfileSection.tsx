const ProfileSection = () => {
  return (
    <section className="bg-purple-primary relative overflow-hidden">
      <div className="container mx-auto px-4 pt-32 relative">
        {/* Background Watermark Text */}
        <div
          className="absolute inset-0 bottom-24 flex items-center opacity-30 text-purple-card"
          style={{
            fontSize: "168px",
            fontWeight: 900,
            lineHeight: "160px",
            fontFamily: "Petrov Sans",
            zIndex: 1,
            textShadow: "0 0 1px #5D2B5D", // Makes text slightly thicker
            WebkitTextStroke: "2px #5D2B5D", // Makes text thicker for webkit browsers
          }}
        >
          YOGESH
          <br />
          PAWAR
        </div>

        {/* Rest of the code remains the same */}
        <div className="flex flex-col lg:flex-row justify-between items-center relative">
          <div className="relative" style={{ zIndex: 2 }}>
            <img
              src="/images/yogesh-pawar.png"
              alt="Yogesh Pawar"
              className="w-[600px] h-auto object-cover object-top"
            />
          </div>

          <div className="max-w-[45%] z-20">
            <h2 className="text-orange-primary text-6xl font-bold mb-4">
              Yogesh Pawar
            </h2>
            <h3 className="text-white text-2xl mb-8">
              Founder - Purple Haze Media
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
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
