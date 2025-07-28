import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Package, 
  Plane, 
  MapPin, 
  Clock, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Globe
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const services = [
    {
      id: "ptl",
      title: "Part Truckload (PTL)",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
      description: "Cost-effective shipping solution for medium-sized consignments that don't require a full truck.",
      features: [
        "Optimized routing for multiple shipments",
        "Real-time tracking and updates",
        "Flexible pickup and delivery windows",
        "Insurance coverage included",
        "Cost-effective for 1-10 pallets"
      ],
      benefits: [
        "Reduced shipping costs",
        "Environmentally friendly",
        "Reliable delivery timelines",
        "Professional handling"
      ]
    },
    {
      id: "ftl",
      title: "Full Truckload (FTL)",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      description: "Dedicated truck service for large shipments requiring exclusive transportation.",
      features: [
        "Dedicated truck for your shipment",
        "Direct delivery without stops",
        "Priority handling and faster transit",
        "Suitable for large volumes",
        "Enhanced security and safety"
      ],
      benefits: [
        "Faster delivery times",
        "No intermediate handling",
        "Maximum security",
        "Cost-effective for large shipments"
      ]
    },
    {
      id: "express",
      title: "Express Parcel",
      icon: Package,
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop",
      description: "Fast and reliable parcel delivery service for urgent shipments across the country.",
      features: [
        "Same-day and next-day delivery",
        "Real-time tracking",
        "Proof of delivery",
        "Insurance coverage",
        "Pick-up scheduling"
      ],
      benefits: [
        "Quick delivery",
        "Reliable service",
        "Easy booking",
        "Affordable rates"
      ]
    },
    {
      id: "cross-border",
      title: "Cross Border",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "International shipping solutions with customs clearance and documentation support.",
      features: [
        "International shipping",
        "Customs clearance assistance",
        "Documentation support",
        "Multi-modal transportation",
        "Duty and tax calculation"
      ],
      benefits: [
        "Global reach",
        "Simplified documentation",
        "Customs expertise",
        "Competitive rates"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Service inquiry submitted:", { service: selectedService, ...formData });
    alert("Thank you for your inquiry! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Logistics Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Comprehensive shipping solutions tailored to your business needs
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Clock className="w-4 h-4 mr-2" />
                Fast Delivery
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Shield className="w-4 h-4 mr-2" />
                Secure & Insured
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <MapPin className="w-4 h-4 mr-2" />
                Pan-India Network
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="w-8 h-8 mb-2" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setSelectedService(service.id)}
                    className="w-full group"
                  >
                    Get Quote for {service.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      {selectedService && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Get a Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a customized quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Required</label>
                      <select 
                        className="w-full p-3 border border-border rounded-md bg-background"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your shipping requirements..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Why Choose SpeeDee Logistics?
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
              Experience the difference with our professional logistics services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced logistics professionals dedicated to your success"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Advanced security measures and insurance coverage for peace of mind"
              },
              {
                icon: Clock,
                title: "Time-Critical Delivery",
                description: "Meeting your deadlines with precision and reliability"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;