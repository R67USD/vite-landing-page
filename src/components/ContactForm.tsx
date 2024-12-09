const ContactForm = () => {
  return (
    <section className="bg-maroon-darker h-[1099px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl pt-[300px] contact-form mx-auto">
          <div className="bg-maroon-dark max-sm:w-[350px] backdrop-blur-sm rounded-3xl p-12">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
              {/* Left Form Section - Second on mobile */}
              <div className="space-y-6 order-2 md:order-1">
                <div className="flex flex-col gap-y-4">
                  <h2 className="connect-text text-white">Let's connect</h2>
                  <p className="text-gray-300 connect-text-desc">
                    Ready to elevate your brand? Contact us today to
                    <br />
                    discuss how we can help you achieve your goals
                    <br />
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
              <div className="flex flex-col gap-y-3 bg-yellow-gradient from-yellow-start to-yellow-end rounded-2xl p-12 justify-center order-1 md:order-2">
                <h2 className="get-in-touch text-purple-primary">
                  Get in
                  <br />
                  touch
                </h2>
                <p className="get-in-touch-desc">
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
