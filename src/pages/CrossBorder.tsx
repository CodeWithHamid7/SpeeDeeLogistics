import { useState } from "react";
import { Globe, FileText, Shield, Clock, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import FormPopup from "@/components/FormPopup";
import CrossBorderimg from "../assets/CrossBorder.jpg"

const CrossBorder = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive network covering 200+ countries worldwide"
    },
    {
      icon: FileText,
      title: "Customs Clearance",
      description: "Expert handling of all customs and documentation"
    },
    {
      icon: Shield,
      title: "Secure Transit",
      description: "End-to-end security with comprehensive insurance"
    },
    {
      icon: Clock,
      title: "Time Definite",
      description: "Guaranteed delivery timeframes for urgent shipments"
    }
  ];

  const services = [
    {
      title: "Export Services",
      description: "Complete export documentation and customs clearance",
      features: ["Export documentation", "Customs clearance", "Freight forwarding", "Insurance coverage"]
    },
    {
      title: "Import Services", 
      description: "Seamless import process with door-to-door delivery",
      features: ["Import permits", "Duty calculation", "Warehouse facilities", "Last mile delivery"]
    },
    {
      title: "Trade Compliance",
      description: "Regulatory compliance and trade documentation",
      features: ["FIDR compliance", "Trade regulations", "Documentation", "Regulatory updates"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Cross Border <span className="text-accent">Logistics</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Seamless international shipping solutions with expert customs clearance, documentation, and door-to-door delivery across 200+ countries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-secondary hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Track Shipment
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={CrossBorderimg}
                alt="Cross Border Logistics"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Cross Border Service?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive international logistics solutions with expert compliance and documentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Cross Border Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete end-to-end international logistics solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
              onClick={() => setIsFormOpen(true)}
            >
              Get Cross Border Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
      <FormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default CrossBorder;