import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FormPopup from "./FormPopup";
import logo from "../assets/logo.png"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleTrackClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to tracking section
      const trackingSection = document.querySelector('#tracking-cta-section');
      if (trackingSection) {
        trackingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll to tracking section
      navigate('/');
      setTimeout(() => {
        const trackingSection = document.querySelector('#tracking-cta-section');
        if (trackingSection) {
          trackingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigation = [
    {
      name: "Services",
      items: [
        { name: "Express Parcel", href: "/services/express-parcel" },
        { name: "Part Truckload (PTL)", href: "/services/part-truckload" },
        { name: "Full Truckload (FTL)", href: "/services/full-truckload" },
        { name: "Cross Border", href: "/services/cross-border" },
        { name: "Supply Chain Solutions", href: "/services/supply-chain-solutions" },
        { name: "Warehousing", href: "/services/warehousing" }
      ]
    },
    {
      name: "Solutions", 
      items: [
        { name: "E-commerce", href: "/solutions/ecommerce" },
        { name: "Healthcare & Pharma", href: "/solutions/healthcare-pharma" },
        { name: "Automotive", href: "/solutions" },
        { name: "Fashion & Lifestyle", href: "/solutions" },
        { name: "FMCG", href: "/solutions" }
      ]
    },
    {
      name: "Partner",
      items: [
        { name: "Become a Partner", href: "/contact" },
        { name: "Partner Portal", href: "/contact" },
        { name: "Seller Onboarding", href: "/contact" }
      ]
    },
    {
      name: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Newsroom", href: "/about" },
        { name: "Investor Relations", href: "/about" }
      ]
    }
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Service Updates Banner */}
      <div className="bg-destructive text-destructive-foreground text-xs py-2 px-4 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="mx-8">SERVICE UPDATES: Beware of emails or communications from any other website except speedeelogistics.com</span>
          <span className="mx-8">Please do not transfer money to payment links that are not shared from SpeeDee's official accounts</span>
          <span className="mx-8">SpeeDee does not require OTP or credentials for address confirmation for your delivery</span>
          <span className="mx-8">SERVICE UPDATES: Beware of emails or communications from any other website except speedeelogistics.com</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <img src={logo} alt="SpeeDee Logistics Logo" width={230} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative group"
              >
                <button className="flex items-center text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-all duration-200 hover:pl-6 hover:shadow-sm border-l-2 border-transparent hover:border-primary"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              onClick={handleTrackClick}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Track
            </button>
            <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Support
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => setShowFormPopup(true)}
            >
              Ship Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="font-medium text-foreground py-2 border-b border-border">
                    {item.name}
                  </div>
                  <div className="ml-4 space-y-2 mt-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => {
                    handleTrackClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm text-muted-foreground hover:text-primary py-2"
                >
                  Track
                </button>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary"
                  onClick={() => {
                    setShowFormPopup(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Ship Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <FormPopup isOpen={showFormPopup} onClose={() => setShowFormPopup(false)} />
    </header>
  );
};

export default Header;