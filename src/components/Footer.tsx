import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-purple-primary pt-16 max-sm:pt-[235px]">
      <div className="container mx-auto px-4 max-sm:px-8">
        <div className="flex max-sm:flex-col gap-x-[240px] max-sm:gap-8">
          {/* Logo and Email Section */}
          <div className="w-full max-w-[300px]">
            <Logo className="" />
            <div className="mt-8">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-white rounded px-4 py-2 text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-8">
            <h3 className="text-white text-3xl max-sm:text-xl font-bold mb-6">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-16 gap-y-2">
              {/* Left Column */}
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Brand Identity
                </a>
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Social Media Marketing
                </a>
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Influencer Marketing
                </a>
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Political Campaigns
                </a>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Meta Ads
                </a>
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Lead Generation
                </a>
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  PR And Publicity
                </a>
                <a
                  href="#"
                  className="text-gray-300 lg:font-['DM_Sans'] lg:text-[21.98px] lg:font-medium lg:leading-[26.48px] hover:text-white"
                >
                  Brand Films And Advertising
                </a>
              </div>
            </div>
            <div className="mt-8 flex justify-between max-w-[300px]">
              <a href="#" className="text-white text-xl font-medium">
                About
              </a>
              <a href="#" className="text-white text-xl font-medium">
                Why Choose Us?
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center py-4 mt-8 border-t bg-purple-dark w-full border-gray-800">
        <p className="text-gray-400 text-sm max-sm:text-xs">
          Copyright © Purple Haze Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
