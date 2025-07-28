import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

const StickyButtons = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.open('tel:+918369050863', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+918369050863?text=Hello%20SpeeDee%20Logistics,%20I%20am%20interested%20in%20your%20service%20,%20can%20we%20connect%20?', '_blank');
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Left Side Buttons */}
      <div className="fixed left-4 bottom-4 z-50 flex flex-col gap-3">
        <Button
          onClick={handleCall}
          size="lg"
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
          title="Call Us"
        >
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform"/>
        </Button>
        
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Right Side Circular Scroll to Top with Orange Progress Ring */}
      {showScrollTop && (
        <div className="fixed right-4 bottom-4 z-50">
          <div className="relative w-14 h-14">
            {/* Progress Ring SVG */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 transform"
              viewBox="0 0 44 44"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle - light gray */}
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                fill="none"
                className="opacity-30"
              />
              {/* Progress circle - orange 3px ring */}
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="#FF6B00"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
                style={{ 
                  filter: 'drop-shadow(0 0 4px rgba(255, 107, 0, 0.5))'
                }}
              />
            </svg>
            
            {/* Circular Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              className="absolute inset-1 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group p-0 flex items-center justify-center"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyButtons;