import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-bold">About Machine Mechanics</h3>
            <p className="text-sm text-primary-foreground/80 font-body leading-relaxed">
              Your trusted Service partner for your  end to end engineering requirements
            </p>
            {/* <div className="flex space-x-3 pt-2">
              <a href="#" className="hover:text-accent transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-bold">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link to="/services" className="hover:text-accent transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent transition-smooth">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-accent transition-smooth">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-bold">Contact Us</h3>
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                 R&D Unit
Plot No:15 Beside MDR Homes Bandelguda

Patancheru Hyderabad Telangana 502319
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 7093025948</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">mmechanicspvtl@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-display font-bold">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 font-body">
              Subscribe to our newsletter for latest updates.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="hero" size="sm">
                Subscribe
              </Button>
            </div>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60 font-body">
            © {new Date().getFullYear()} Machine Mechanics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
