// src/components/Footer.jsx
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-purple-primary pt-[235px]">
      <div className="mx-auto px-[252px] gap-x-[250px]  flex gap-12 mb-12">
        {/* Logo and Email Section */}
        <div>
          <Logo />
          <div className="mt-[90px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-white rounded px-4 py-2 text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white text-4xl font-semibold mb-4">
            Our Services
          </h3>
          <div className="grid grid-cols-2 text-md gap-x-24 gap-y-2">
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Brand Identity
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Meta Ads
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Social Media Marketing
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Lead Generation
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Influencer Marketing
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              PR And Publicity
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Political Campaigns
            </a>
            <a href="#" className="text-gray-300 footer-links hover:text-white">
              Brand Films And Advertising
            </a>
          </div>
          <div className="md:col-span-4 mt-[16px]">
            <div className="flex  gap-x-[240px]">
              <div>
                <h3 className="text-white text-3xl font-medium mb-4">About</h3>
              </div>
              <div>
                <h3 className="text-white text-3xl font-medium mb-4">
                  Why Choose Us?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t bg-purple-dark border-gray-800">
        <p className="text-gray-400 text-center footer-text">
          Copyright © Purple Haze Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
