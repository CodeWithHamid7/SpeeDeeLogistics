import { useState } from "react";
import { Network, BarChart3, Warehouse, Truck, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import SupplyChain from "../assets/SupplyChain.jpg"

const SupplyChainSolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    industry: "",
    currentChallenges: "",
    monthlyVolume: "",
    locations: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Supply Chain Solutions Request:", formData);
  };

  const features = [
    {
      icon: Network,
      title: "End-to-End Visibility",
      description: "Complete supply chain visibility with real-time tracking and analytics"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights for supply chain optimization and forecasting"
    },
    {
      icon: Warehouse,
      title: "Warehouse Management",
      description: "Intelligent warehousing with automated inventory management"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide logistics network for seamless operations"
    }
  ];

  const solutions = [
    {
      title: "Inventory Optimization",
      description: "Smart inventory management with demand forecasting",
      features: ["Real-time inventory tracking", "Automated reordering", "Demand forecasting", "Stock level optimization"]
    },
    {
      title: "Distribution Network",
      description: "Optimized distribution strategy for cost-effective delivery",
      features: ["Network optimization", "Hub & spoke model", "Last-mile delivery", "Route optimization"]
    },
    {
      title: "Technology Integration",
      description: "Seamless integration with your existing systems",
      features: ["ERP integration", "API connectivity", "Real-time dashboards", "Custom reporting"]
    }
  ];

  const industries = [
    "E-commerce", "Automotive", "Healthcare & Pharma", "FMCG", "Fashion & Retail",
    "Electronics", "Manufacturing", "Food & Beverage", "Chemical", "Other"
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
                Supply Chain <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive supply chain optimization with advanced analytics, intelligent warehousing, and end-to-end visibility for maximum efficiency and cost reduction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Get Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-secondary hover:bg-white hover:text-primary">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src= {SupplyChain}
                alt="Supply Chain Solutions"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Supply Chain Solutions?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your supply chain with cutting-edge technology and expert optimization strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Supply Chain Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions designed to optimize every aspect of your supply chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                alt="Supply Chain Analytics"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Key Benefits</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cost Reduction</h3>
                    <p className="text-muted-foreground">Reduce logistics costs by up to 25% through optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Improved Efficiency</h3>
                    <p className="text-muted-foreground">Streamline operations with automated processes and analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Network className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enhanced Visibility</h3>
                    <p className="text-muted-foreground">Real-time tracking and visibility across entire supply chain</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Truck className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Faster Delivery</h3>
                    <p className="text-muted-foreground">Optimize routes and processes for faster customer delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get Supply Chain Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Let our experts analyze your supply chain and provide customized optimization solutions
              </p>
            </div>
            
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Network className="w-6 h-6 mr-2 text-primary" />
                  Supply Chain Solutions Consultation
                </CardTitle>
                <CardDescription>
                  Transform your supply chain with our expert optimization solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Industry</label>
                      <select 
                        className="w-full p-2 border border-input rounded-md bg-background"
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        required
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Monthly Volume</label>
                      <Input
                        value={formData.monthlyVolume}
                        onChange={(e) => setFormData({...formData, monthlyVolume: e.target.value})}
                        placeholder="e.g., 1000 shipments/month"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Operating Locations</label>
                    <Input
                      value={formData.locations}
                      onChange={(e) => setFormData({...formData, locations: e.target.value})}
                      placeholder="Cities/states where you operate"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Supply Chain Challenges</label>
                    <Textarea
                      value={formData.currentChallenges}
                      onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                      placeholder="Describe your current challenges: inventory management, delivery delays, cost optimization, etc."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Any specific requirements or goals for supply chain optimization"
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
};

export default SupplyChainSolutions;