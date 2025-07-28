import { useState } from "react";
import { ShoppingCart, Package, Truck, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import FormPopup from "@/components/FormPopup";
import ecommercelogisitics from "../assets/ecommercelogisitics.jpg"

const EcommerceSolutions = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                E-commerce <span className="text-accent">Logistics Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Complete fulfillment solutions for your online business. From warehousing to last-mile delivery, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-secondary hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg shadow-lg"
                  onClick={() => setIsFormOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={ecommercelogisitics}
                alt="E-commerce Solutions"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">E-commerce Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingCart, title: "Order Management", description: "Seamless integration with your online store" },
              { icon: Package, title: "Inventory Management", description: "Real-time stock tracking and management" },
              { icon: Truck, title: "Same Day Delivery", description: "Fast delivery options for your customers" },
              { icon: BarChart, title: "Analytics Dashboard", description: "Detailed insights and reporting" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
              onClick={() => setIsFormOpen(true)}
            >
              Get E-commerce Solutions Quote
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

export default EcommerceSolutions;