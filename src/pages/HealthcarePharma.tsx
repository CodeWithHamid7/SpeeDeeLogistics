import { useState } from "react";
import { Heart, Shield, Thermometer, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useFormEmail } from "@/hooks/useFormEmail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import HealthCarePharma from "../assets/HealthCareAndPharma.jpg"

const HealthcarePharma = () => {
  const { toast } = useToast();
  const { sendFormEmail } = useFormEmail();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      console.log("Healthcare & Pharma Request:", formData);
      
      // Send email
      const emailSent = await sendFormEmail(
        "Healthcare & Pharma Quote",
        formData,
        "New Healthcare & Pharma Quote Request"
      );

      if (emailSent) {
        toast({
          title: "Thanks For Showing Interest in SpeeDee Logistics, Our Team Will Contact You Soon"
        });
        
        setFormData({ name: "", phone: "", email: "", company: "", requirements: "" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Healthcare & <span className="text-accent">Pharma Logistics</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Specialized cold chain and temperature-controlled logistics for healthcare and pharmaceutical products.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src={HealthCarePharma}
                alt="Healthcare Logistics"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Healthcare Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Medical Compliance", description: "FDA and regulatory compliant handling" },
              { icon: Shield, title: "Secure Transport", description: "High-security transportation protocols" },
              { icon: Thermometer, title: "Cold Chain", description: "Temperature-controlled storage and delivery" },
              { icon: Clock, title: "Emergency Delivery", description: "24/7 priority delivery services" }
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
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get Healthcare Solutions Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    placeholder="Company/Organization Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Textarea
                    placeholder="Your Requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    rows={4}
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get Quote"
                    )}
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

export default HealthcarePharma;