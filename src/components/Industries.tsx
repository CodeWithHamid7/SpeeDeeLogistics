import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Car, Shirt, Package2, Users } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      title: "E-commerce Logistics Solutions",
      description: "Comprehensive fulfillment solutions for online retailers",
      features: [
        "Last-mile delivery optimization",
        "Reverse logistics for returns", 
        "Cash on delivery support",
        "Multi-channel integration",
        "Peak season scalability"
      ],
      benefits: "Reduce delivery time by 30% and improve customer satisfaction"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      title: "Healthcare & Pharma Logistics",
      description: "Temperature-controlled and compliant healthcare logistics",
      features: [
        "Cold chain management",
        "Regulatory compliance",
        "Specialized packaging",
        "Track & trace capabilities",
        "Emergency delivery services"
      ],
      benefits: "Ensure 100% product integrity with temperature monitoring"
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: Car,
      title: "Automotive Supply Chain",
      description: "Just-in-time delivery for automotive components",
      features: [
        "JIT delivery systems",
        "Parts tracking",
        "Vendor management",
        "Quality assurance",
        "Cross-docking services"
      ],
      benefits: "Reduce inventory costs by 25% with optimized supply chain"
    },
    {
      id: "fashion",
      name: "Fashion",
      icon: Shirt,
      title: "Fashion & Lifestyle",
      description: "Seasonal inventory and fast fashion logistics",
      features: [
        "Seasonal flexibility",
        "Style-wise segregation",
        "Quality checks",
        "Rapid deployment",
        "Trend-based distribution"
      ],
      benefits: "Get products to market 40% faster with agile logistics"
    },
    {
      id: "fmcg",
      name: "FMCG",
      icon: Package2,
      title: "FMCG Distribution",
      description: "Wide reach distribution for consumer goods",
      features: [
        "Rural penetration",
        "Bulk distribution",
        "Inventory optimization",
        "Route planning",
        "Demand forecasting"
      ],
      benefits: "Expand market reach to 95% of Indian pin codes"
    }
  ];

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industry-Specific <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored logistics solutions designed for the unique needs of different industries
          </p>
        </div>

        <Tabs defaultValue="ecommerce" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-background">
            {industries.map((industry) => (
              <TabsTrigger 
                key={industry.id}
                value={industry.id}
                className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <industry.icon className="w-6 h-6 mb-2" />
                <span className="text-xs font-medium">{industry.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-xl text-muted-foreground">
                    {industry.description}
                  </p>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <div className="text-lg font-semibold text-foreground mb-2">
                      Key Benefits:
                    </div>
                    <p className="text-accent font-medium">
                      {industry.benefits}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-primary hover:bg-primary-glow">
                      Get Started
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </div>

                <Card className="shadow-primary">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-foreground mb-6">
                      Key Features
                    </h4>
                    
                    <ul className="space-y-4">
                      {industry.features.map((feature, index) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent-foreground text-sm font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-foreground font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground font-medium">
                          Trusted by 10,000+ businesses in {industry.name.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Industries;