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

const ServicesThree = () => {
  return (
    <section className="bg-purple-primary py-16 h-[1099px]">
      <div className="container mx-auto pt-[153px]">
        <h2 className="services-title">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="services-desc-three">
          Boost Your Brand's Presence With Targeted Social Media Strategies
          Designed To Engage, Grow, And Convert Audiences Across All Platforms.
          Let Us Help You Connect Authentically And Drive Impactful Results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-[115px]">
          <ServiceCard
            title="PR And Publicity"
            description="Build A Strong Public Image With Our Comprehensive PR Services. We Manage Your Media Relations And Foster Positive Relationships With The Media."
            image={"images/video-marketing.png"}
          />
          <ServiceCard
            title="Brand Films & Advertising"
            description="Tell Your Story Through Powerful Brand Films. Our Creative Team Delivers High-Quality Brand Films And Advertising That Connects With Your Audience Emotionally."
            image={"images/video-cut.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesThree;
