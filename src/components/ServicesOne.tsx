const ServiceCard = ({ title, description, image, name }: any) => (
  <div className="bg-purple-card rounded-[33.81px] p-8 relative">
    <div className="w-[96.6px] h-[96.6px] bg-orange-500 rounded-full absolute -top-12 right-8">
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
    <h3 className="text-white card-title mt-[63px] mb-4">{title}</h3>
    <p className="text-gray-300 card-desc">{description}</p>
  </div>
);

const ServicesOne = () => {
  return (
    <>
      <section className="bg-orange-primary">
        <div className="mx-auto pt-[80px] md:pt-[153px]">
          <div className="h-auto md:h-[360px] px-4 md:px-0">
            <h2 className="text-[86.66px] font-bold leading-[104.41px] petrov-sans max-sm:text-[55px] text-center">
              <span className="text-purple-950">Our </span>
              <span className="text-purple-950">Services</span>
            </h2>
            <p className="text-center text-purple-950 max-w-3xl mx-auto mb-8 petrov-sans md:mb-16 px-4">
              Boost Your Brand's Presence With Targeted Social Media Strategies
              Designed To Engage, Grow, And Convert Audiences Across All
              Platforms. Let Us Help You Connect Authentically And Drive
              Impactful Results.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[194px] mb-[144px]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[46.18px] bg-purple-primary">
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
      </section>
    </>
  );
};

export default ServicesOne;
