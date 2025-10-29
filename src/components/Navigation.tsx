import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";




const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers" },
    // { name: "About us", path: "/aboutus" },

    { name: "Contact us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (

    
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
         <Link to="/" className="flex items-center">
  <div className="flex items-center justify-center w-12 h-12 objectfit-cover">
    <img
      src="src/assets/Machine Mechanics LOGO (5).png"
      alt="Logo"
      // className="w-10 h-10 object-contain"
    />
  </div>
 <div style={{ fontFamily: '"Exo 2", sans-serif' }}>
  <span className="font-bold uppercase tracking-wider text-black text-4xl">
    MACHINE{" "}
    <span className="font-light uppercase tracking-wider text-gray-400 text-4xl">
      MECHANICS
    </span>
  </span>
</div>




  
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 font-display font-medium text-sm transition-smooth relative group ${
                  isActive(item.path) ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform origin-left ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            {/* <Button variant="cta" size="sm" className="ml-4">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-smooth"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-display font-medium text-base rounded-lg transition-smooth ${
                    isActive(item.path)
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="cta" className="mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
