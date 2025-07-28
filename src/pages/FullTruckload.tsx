import { useState } from "react";
import { Truck, Package, Clock, Shield, Route, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import FormPopup from "@/components/FormPopup";
import FullTruckLoad from "../assets/FullTruckLoad.jpg"

const FullTruckload = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Truck,
      title: "Dedicated Vehicle",
      description: "Entire truck dedicated to your shipment for maximum security"
    },
    {
      icon: Clock,
      title: "Faster Transit",
      description: "Direct delivery without multiple stops or consolidation"
    },
    {
      icon: Shield,
      title: "Premium Security",
      description: "Exclusive handling with GPS tracking and insurance"
    },
    {
      icon: Route,
      title: "Flexible Routes",
      description: "Customized routing based on your specific requirements"
    }
  ];

  const truckTypes = [
    { name: "Open Truck", capacity: "7.5T - 25T", description: "Ideal for non-fragile goods and construction materials" },
    { name: "Closed Container", capacity: "7.5T - 25T", description: "Weather protection for sensitive cargo" },
    { name: "Refrigerated Truck", capacity: "5T - 20T", description: "Temperature-controlled transport for perishables" },
    { name: "Flatbed Truck", capacity: "10T - 40T", description: "Perfect for oversized and heavy machinery" }
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
                Full Truck Load <span className="text-accent">(FTL)</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Complete truck capacity for your large shipments. Direct, secure, and fastest delivery with dedicated vehicles and professional drivers for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get FTL Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-secondary hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Book Now
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={FullTruckLoad}
                alt="Full Truck Load Service"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose FTL Service?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximum efficiency and security for your large-scale transportation needs
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

      {/* Truck Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Available Truck Types</h2>
            <p className="text-lg text-muted-foreground">
              Choose from our diverse fleet of trucks to match your cargo requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {truckTypes.map((truck, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-2">{truck.name}</h3>
                <p className="text-primary font-semibold mb-3">{truck.capacity}</p>
                <p className="text-sm text-muted-foreground">{truck.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
              onClick={() => setIsFormOpen(true)}
            >
              Get FTL Quote
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

export default FullTruckload;