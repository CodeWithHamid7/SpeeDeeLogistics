import { useState } from "react";
import { Truck, DollarSign, Clock, Shield, Package, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import FormPopup from "@/components/FormPopup";
import ParticalTruck from "../assets/PartialTruckload.jpg"
import partialTrucload from "../assets/part_truck_load2.jpg"

const PartTruckload = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Pay only for the space you use, not the entire truck"
    },
    {
      icon: Clock,
      title: "Flexible Transit",
      description: "2-5 days delivery time depending on distance"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional handling with complete cargo protection"
    },
    {
      icon: Route,
      title: "Multiple Routes",
      description: "Extensive network covering all major cities"
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
                Part Truck Load <span className="text-accent">(PTL)</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Cost-effective solution for smaller shipments that don't require a full truck. Share transportation costs with other shippers while maintaining security and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get PTL Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-secondary hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Calculate Cost
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={ParticalTruck}
                alt="Part Truck Load Service"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose PTL Service?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart logistics solution for medium-sized shipments with optimal cost efficiency
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

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">PTL Service Specifications</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Package className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Weight Range</h3>
                    <p className="text-muted-foreground">100kg to 10,000kg per shipment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Truck className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vehicle Types</h3>
                    <p className="text-muted-foreground">Open trucks, closed containers, and specialized vehicles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Insurance</h3>
                    <p className="text-muted-foreground">Comprehensive insurance coverage for all cargo types</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get PTL Quote
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img 
                src={partialTrucload}
                alt="PTL Transportation"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
      <FormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default PartTruckload;