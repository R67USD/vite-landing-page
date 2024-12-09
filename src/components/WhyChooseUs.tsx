const WhyChooseUs = () => {
  return (
    <section className="bg-orange-primary py-[320px] relative overflow-hidden">
      {/* Large Question Mark Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/images/question-mark.png" alt="Why Choose Us?" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center items-center">
          <h2 className="why-choose-us-title text-purple-950 mb-10">
            Why Choose Us?
          </h2>
          <p className="text-purple-950 why-choose-us-desc">
            At Purple Haze Media, We Believe In Bold Ideas And Smart Execution.
            <br />
            Our Team Of Experienced Professionals Is Dedicated To Delivering
            <br />
            Results That Matter. Whether You're Launching A New Brand, Running
            <br />
            A Political Campaign, Or Enhancing Your Online Presence, We Have
            <br />
            The Tools And Expertise To Help You Succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
