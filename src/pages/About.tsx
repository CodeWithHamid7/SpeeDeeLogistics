import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto animate-slide-down">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About SpeeDee Logistics
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                India's largest fully integrated logistics services provider, transforming supply chains across industries with innovative solutions and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-light-bg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="animate-slide-left">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To revolutionize logistics in India by providing reliable, efficient, and technology-driven supply chain solutions that empower businesses to grow and thrive in the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-slide-right">
                <CardContent className="p-8">
                  <Globe className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted logistics partner globally, connecting businesses and consumers through seamless, sustainable, and intelligent supply chain networks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-down">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-muted-foreground">Numbers that speak for our commitment</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10M+", label: "Shipments Delivered" },
                { number: "500+", label: "Cities Covered" },
                { number: "50,000+", label: "Happy Clients" },
                { number: "99.5%", label: "On-Time Delivery" }
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
};

export default About;