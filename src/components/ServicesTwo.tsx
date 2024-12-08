const ServiceCard = ({ title, description, image, name }: any) => (
  <div
    style={{
      width: "355.82px",
      height: "355.82px",
    }}
    className="bg-purple-card rounded-[33.81px] p-8 relative"
  >
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
const ServicesTwo = () => {
  return (
    <section className="bg-purple-darker py-16 h-[1099px]">
      <div className="container mx-auto pt-[153px]">
        <h2 className="services-title">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="services-desc-two">
          Boost Your Brand's Presence With Targeted Social Media Strategies
          Designed To Engage, Grow, And Convert Audiences Across All Platforms.
          Let Us Help You Connect Authentically And Drive Impactful Results.
        </p>
        <div className="flex items-center justify-center gap-[46.18px]">
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
