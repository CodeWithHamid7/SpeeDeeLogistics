import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFormEmail } from "@/hooks/useFormEmail";

const Contact = () => {
  const { toast } = useToast();
  const { sendFormEmail } = useFormEmail();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Please enter a valid 10-digit mobile number",
        variant: "destructive"
      });
      return;
    }

    console.log("Contact form submitted:", formData);
    
    // Send email
    const emailSent = await sendFormEmail(
      "Contact Us",
      formData,
      "New Contact Form Submission"
    );

    if (emailSent) {
      toast({
        title: "Thanks for Showing Interest In SpeeDee Logistics, Our Team Will Contact You Soon !"
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto animate-slide-down">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200">
                Get in touch with our logistics experts and let us help transform your supply chain
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-light-bg">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-slide-left">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p className="text-muted-foreground">+91 83690 50863</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Mail className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-muted-foreground">speedeelogisticsindia@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Address</h3>
                          <p className="text-muted-foreground">Ulwe, Navi Mumbai 410206</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Clock className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Business Hours</h3>
                          <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-slide-right">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name" 
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@company.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          placeholder="Enter 10-digit mobile number" 
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          maxLength={10}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          placeholder="Your company name" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your logistics requirements..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary-glow"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
};

export default Contact;
