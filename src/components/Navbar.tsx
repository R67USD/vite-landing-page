import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="pt-[75px] z-50 bg-purple-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="nav-item text-white hover:text-orange-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="nav-item text-white hover:text-orange-primary"
            >
              Our Services
            </a>
            <a
              href="#"
              className="nav-item text-white hover:text-orange-primary"
            >
              About
            </a>
            <a
              href="#"
              className="nav-item text-white hover:text-orange-primary"
            >
              Why Choose Us?
            </a>
            <button className="bg-orange-primary text-white px-6 py-2 rounded hover:bg-orange-400 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
