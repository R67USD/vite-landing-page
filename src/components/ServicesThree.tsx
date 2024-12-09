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

const ServicesThree = () => {
  return (
    <section className="bg-purple-primary max-sm:!pt-[0px] py-16">
      <div className="container mx-auto max-sm:pt-[98px] pt-[153px]">
        <h2 className="text-[86.66px] font-bold leading-[104.41px] petrov-sans max-sm:text-[55px] text-center">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-8 petrov-sans md:mb-16 px-4">
          Boost Your Brand's Presence With Targeted Social Media Strategies
          Designed To Engage, Grow, And Convert Audiences Across All Platforms.
          Let Us Help You Connect Authentically And Drive Impactful Results.
        </p>

        <div className="max-w-[760px] max-sm:max-w-[320px] mt-14 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[46.18px]">
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
