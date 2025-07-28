import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Package,
      title: "Express Parcel",
      description: "Fast and reliable parcel delivery services across India with real-time tracking and guaranteed delivery times.",
      path: "/services/express-parcel"
    },
    {
      icon: Truck,
      title: "Part Truckload (PTL)",
      description: "Cost-effective shared transportation for smaller shipments with flexible pickup and delivery options.",
      path: "/services/part-truckload"
    },
    {
      icon: Zap,
      title: "Full Truckload (FTL)",
      description: "Dedicated truck service for large shipments with direct delivery and premium security features.",
      path: "/services/full-truckload"
    },
    {
      icon: Globe,
      title: "Cross Border",
      description: "International shipping solutions with expert customs clearance and documentation support.",
      path: "/services/cross-border"
    },
  ];

  const handleLearnMore = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Comprehensive logistics solutions tailored to meet your business needs with cutting-edge technology and reliable service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105 group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleLearnMore(service.path)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;