import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="py-20 max-sm:pt-20 max-sm:!pb-10 bg-purple-primary">
      <div className="container mx-auto px-4">
        <div className="flex max-sm:justify-center justify-between items-center">
          <Logo className="h-[107px] w-[306px] max-sm:h-[178px]" />
          <div className="max-md:hidden flex items-center space-x-8">
            <a
              href="#home"
              className="nav-item text-white hover:text-orange-primary"
            >
              Home
            </a>
            <a
              href="#services"
              className="nav-item text-white hover:text-orange-primary"
            >
              Our Services
            </a>
            <a
              href="#about"
              className="nav-item text-white hover:text-orange-primary"
            >
              About
            </a>
            <a
              href="#whychooseus"
              className="nav-item text-white hover:text-orange-primary"
            >
              Why Choose Us?
            </a>
            <a
              href="#contact"
              className="bg-orange-primary text-white px-6 py-2 rounded hover:bg-orange-400 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
