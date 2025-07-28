import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, MapPin, Smartphone, Users, Award } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Clock,
      title: "99.8% On-Time Delivery",
      description: "Reliable delivery performance with industry-leading on-time rates",
      stats: "99.8%"
    },
    {
      icon: MapPin,
      title: "Pan-India Coverage", 
      description: "Extensive network covering 18,000+ pin codes across India",
      stats: "18,000+"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Advanced security measures and insurance coverage for your shipments",
      stats: "100%"
    },
    {
      icon: Smartphone,
      title: "Real-Time Tracking",
      description: "Track your shipments 24/7 with our advanced tracking technology",
      stats: "24/7"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated customer support team available round the clock",
      stats: "24x7"
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Trusted by 100,000+ businesses across various industries",
      stats: "100k+"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">SpeeDee Logistics</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to powering agile supply chains with innovative logistics solutions 
            that drive business growth and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title}
              className="group hover:shadow-accent transition-all duration-300 border border-border hover:border-accent/30"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="text-3xl font-bold text-accent mb-2">
                  {reason.stats}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-8">
            Powering Growth Across Industries
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25M+</div>
              <div className="text-primary-foreground">Monthly Shipments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">18,000+</div>
              <div className="text-primary-foreground">Pin Codes Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2,500+</div>
              <div className="text-primary-foreground">Service Centers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100,000+</div>
              <div className="text-primary-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;