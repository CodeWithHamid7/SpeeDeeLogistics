import { useState } from "react";
import { Zap, Clock, Shield, Truck, Package, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import FormPopup from "@/components/FormPopup";
import expressparcel from "/src/assets/express-parcel-service.jpg"


const ExpressParcel = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Same-day and next-day delivery options for urgent parcels"
    },
    {
      icon: Clock,
      title: "Time Definite",
      description: "Guaranteed delivery within promised timeframes"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "End-to-end security with real-time tracking"
    },
    {
      icon: MapPin,
      title: "Pan India Coverage",
      description: "Delivery to 27,000+ pin codes across India"
    }
  ];

  const deliveryOptions = [
    { name: "Same Day", time: "Within 6-8 hours", price: "Starting ₹99" },
    { name: "Next Day", time: "By next day 6 PM", price: "Starting ₹79" },
    { name: "Express", time: "Within 24-48 hours", price: "Starting ₹59" },
    { name: "Standard", time: "Within 2-4 days", price: "Starting ₹39" }
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
                Express <span className="text-accent">Parcel</span> Delivery
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Lightning-fast parcel delivery across India with real-time tracking, secure handling, and guaranteed delivery times. Perfect for urgent shipments and time-sensitive deliveries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Ship Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-secondary hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg shadow-lg backdrop-blur-sm"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={expressparcel}
                alt="Express Parcel Delivery"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Express Parcel?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable, and secure parcel delivery services designed for your urgent shipping needs
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

      {/* Delivery Options Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Delivery Options</h2>
            <p className="text-lg text-muted-foreground">
              Choose the delivery speed that matches your requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-2">{option.name}</h3>
                <p className="text-muted-foreground mb-3">{option.time}</p>
                <p className="text-primary font-semibold text-lg">{option.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
              onClick={() => setIsFormOpen(true)}
            >
              Get Express Parcel Quote
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

export default ExpressParcel;