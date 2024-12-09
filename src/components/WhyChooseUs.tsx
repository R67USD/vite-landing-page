const WhyChooseUs = () => {
  return (
    <section className="bg-orange-primary max-sm:py-[120px] py-[320px] relative overflow-hidden">
      {/* Large Question Mark Background */}
      <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <img
          src="/images/question-mark.png"
          alt="Why Choose Us?"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center items-center">
          <h2 className="petrov-sans max-sm:text-[45px] text-[86.66px] font-bold leading-[104.41px] text-center text-purple-950 mb-10">
            Why Choose Us?
          </h2>
          <p className="dm-sans text-[27.98px] font-medium leading-[33.71px] text-center text-purple-950">
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
