const ContactForm = () => {
  return (
    <section className="relative bg-maroon-darker">
      <div className="container pt-[140px] pb-[80px] mx-auto px-4">
        <div className="max-w-[1219px] mx-auto rounded-tl-[34px] relative p-[1px] ">
          <div className="bg-maroon-dark backdrop-blur-sm rounded-3xl max-sm:p-8 p-12">
            <div className="flex flex-col md:grid md:grid-cols-2 max-sm:gap-4 gap-8">
              {/* Left Form Section - Second on mobile */}
              <div className="space-y-6 order-2 md:order-1">
                <div className="flex flex-col gap-y-4">
                  <h2 className=" text-[33.24px] font-semibold leading-[40.23px] tracking-[-0.02em] text-left text-white">
                    Let's connect
                  </h2>
                  <p className="text-sm sm:text-[17.73px] font-normal leading-[21.46px] tracking-[-0.01em] text-left text-gray-300">
                    Ready to elevate your brand? Contact us today to
                    <br className="max-sm:hidden" />
                    discuss how we can help you achieve your goals
                    <br className="max-sm:hidden" />
                    through innovative strategies and creative solutions.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
                ></textarea>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Send Message
                </button>
              </div>

              {/* Right Display Section - First on mobile */}
              <div className="flex flex-col gap-y-3 bg-yellow-gradient from-yellow-start to-yellow-end md:rounded-xl rounded-2xl max-sm:p-6 p-12 justify-center order-1 md:order-2">
                <h2 className="text-left font-bold text-[134.6px] max-sm:text-[52.6px] leading-[111.34px] max-sm:leading-[48.6px] text-purple-primary">
                  Get in
                  <br />
                  touch
                </h2>
                <p className=" text-[17.73px] font-normal leading-[21.46px] tracking-[-0.01em] text-left">
                  Ready to elevate your brand? Contact us today to
                  <br />
                  discuss how we can help you achieve your goals
                  <br />
                  through innovative strategies and creative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
