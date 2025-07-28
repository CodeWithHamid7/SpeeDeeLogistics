import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useFormEmail } from "@/hooks/useFormEmail";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { sendFormEmail } = useFormEmail();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Send email
    const emailSent = await sendFormEmail(
      "Newsletter Subscription",
      { email },
      "New Newsletter Subscription"
    );

    if (emailSent) {
      toast({
        title: "Subscription Successful",
        description: "Thanks For Subscribing SpeeDee Logistics, We Will Be In Touch !",
      });
      
      setEmail("");
    }
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        "Express Parcel",
        "Part Truckload (PTL)",
        "Full Truckload (FTL)",
        "Cross Border",
        "Supply Chain Solutions",
        "Warehousing",
        "Last Mile Delivery",
        "Reverse Logistics"
      ]
    },
    {
      title: "Solutions",
      links: [
        "E-commerce Logistics",
        "Healthcare & Pharma",
        "Automotive",
        "Fashion & Lifestyle",
        "FMCG",
        "Enterprise Solutions",
        "SME Solutions",
        "Startup Solutions"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Leadership Team",
        "Careers",
        "Newsroom",
        "Investor Relations",
        "CSR",
        "Awards & Recognition",
        "Contact Us"
      ]
    },
    {
      title: "Support",
      links: [
        "Track Your Shipment",
        "Customer Support",
        "Help Center",
        "Service Updates",
        "Billing Support",
        "Technical Support",
        "Partner Portal",
        "Developer APIs"
      ]
    }
  ];

  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="text-2xl font-bold mb-6">
              SPEEDEE LOGISTICS
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's largest fully integrated logistics services provider, powering agile supply chains across industries.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+91 83690 50863</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">speedeelogisticsindia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Ulwe, Navi Mumbai 410206</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <h3 className="text-lg font-semibold mb-6 text-accent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-16 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with <span className="text-accent">SpeeDee Logistics</span>
              </h3>
              <p className="text-gray-300">
                Get the latest news, updates, and industry insights delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 flex-1"
              />
              <Button 
                type="submit"
                className="bg-accent hover:bg-accent/90 px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 SpeeDee Logistics. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;