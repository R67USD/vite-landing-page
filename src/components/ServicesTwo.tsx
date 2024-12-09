const ServiceCard = ({ title, description, image, name }: any) => (
  <div className="bg-purple-card rounded-[33.81px] p-8 relative">
    <div className="max-sm:w-[62.2px] w-[96.6px] max-sm:h-[62.2px] h-[96.6px] bg-orange-500 rounded-full absolute max-sm:-top-[2rem] -top-12 right-8">
      <img
        src={image}
        alt={name}
        className="max-sm:w-[40px] w-[60px] max-sm:h-[40px] h-[60px] mt-[17px] ml-[17px] max-sm:mt-[12px] max-sm:ml-[12px]"
      />
    </div>
    <h3 className="text-white card-title mt-[63px] mb-4">{title}</h3>
    <p className="text-gray-300 card-desc">{description}</p>
  </div>
);
const ServicesTwo = () => {
  return (
    <section className="bg-purple-darker py-16">
      <div className="container mx-auto pt-[153px] pb-[212px]">
        <h2 className="text-[86.66px] font-bold leading-[104.41px] petrov-sans max-sm:text-[55px] text-center">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-8 petrov-sans md:mb-16 px-4">
          Boost Your Brand's Presence With Targeted Social Media Strategies
          Designed To Engage, Grow, And Convert Audiences Across All Platforms.
          Let Us Help You Connect Authentically And Drive Impactful Results.
        </p>
        <div className="max-w-[1100px] max-sm:max-w-[320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46.18px]">
          <ServiceCard
            title="Political Campaigns"
            description="In The Fast-Paced World Of Politics, Every Connection Counts. We Help You Create Campaigns That Resonate With Constituents And Drive Voter Engagement."
            image="images/campaign.png"
          />
          <ServiceCard
            title="Meta Ads"
            description="Maximize Your ROI With Our Expertise In Meta Ads. We Create And Manage Targeted Campaigns That Reach Your Core Audience And Convert Leads Into Loyal Customers."
            image={"images/online-advertising.png"}
          />
          <ServiceCard
            title="Lead Generation"
            description="Turn Potential Customers Into Lifelong Advocates. Our Lead Generation Strategies Are Designed To Attract, Nurture, And Convert Leads Effectively."
            image={"images/user-management.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
