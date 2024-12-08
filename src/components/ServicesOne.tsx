const ServiceCard = ({ title, description, image, name }: any) => (
  <div className="w-[90%] md:w-[355.82px] h-auto md:h-[355.82px] bg-purple-card rounded-[33.81px] p-6 md:p-8 relative mb-16 md:mb-0 mx-auto">
    <div className="w-[60px] md:w-[96.6px] h-[60px] md:h-[96.6px] bg-orange-500 rounded-full absolute -top-8 md:-top-12 right-8">
      <img
        src={image}
        alt={name}
        className="w-full h-full"
        style={{
          width: "60px",
          height: "60px",
          marginTop: "17px",
          marginLeft: "17px",
        }}
      />
    </div>
    <h3 className="text-white card-title mt-[40px] md:mt-[63px] mb-4">
      {title}
    </h3>
    <p className="text-gray-300 card-desc">{description}</p>
  </div>
);

const ServicesOne = () => {
  return (
    <section className="bg-orange-primary min-h-screen md:h-[1099px]">
      <div className="mx-auto pt-[80px] md:pt-[153px]">
        <div className="h-auto md:h-[360px] px-4 md:px-0">
          <h2 className="services-title text-center">
            <span className="text-purple-950">Our </span>
            <span className="text-purple-950">Services</span>
          </h2>
          <p className="text-center text-purple-950 max-w-3xl mx-auto mb-8 md:mb-16 px-4">
            Boost Your Brand's Presence With Targeted Social Media Strategies
            Designed To Engage, Grow, And Convert Audiences Across All
            Platforms. Let Us Help You Connect Authentically And Drive Impactful
            Results.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[695px] pb-[72px] md:pb-[144px] items-center bg-purple-primary justify-center md:gap-[46.18px]">
          <ServiceCard
            title="Brand Identity"
            description="Your Brand Is More Than Just A Logo - It's Your Story. We Help You Position Your Brand With Visual Brand Identities That Resonate With Your Audience And Tell Your Story Authentically."
            image="images/brand.png"
            name="brand"
          />
          <ServiceCard
            title="Social Media Marketing"
            description="Harness The Power Of Social Media To Connect With Your Target Audience. Our Tailored Strategies Drive Traffic And Build Community Around Your Brand."
            image="images/advertising.png"
            name="marketing"
          />
          <ServiceCard
            title="Influencer Marketing"
            description="Leverage The Power Of Targeted Creative To Amplify Your Message. We Identify The Right Influencers To Reach Your Target Market And Drive Connections With Your Target Market."
            image="images/popularity.png"
            name="influencer"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
