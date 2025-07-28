import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useFormEmail } from "@/hooks/useFormEmail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import { 
  ShoppingCart, 
  Heart, 
  Car, 
  Shirt, 
  Package2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  Loader2
} from "lucide-react";

const Solutions = () => {
  const { toast } = useToast();
  const { sendFormEmail } = useFormEmail();
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: ""
  });

  const industries = [
    {
      id: "ecommerce",
      title: "E-commerce",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Comprehensive logistics solutions for online retailers and marketplace sellers.",
      challenges: [
        "Last-mile delivery optimization",
        "Return management",
        "Peak season handling",
        "Multi-channel fulfillment"
      ],
      solutions: [
        "Same-day and next-day delivery",
        "Reverse logistics for returns",
        "Scalable warehouse solutions",
        "Real-time inventory tracking"
      ],
      benefits: [
        "Improved customer satisfaction",
        "Reduced delivery costs",
        "Faster order processing",
        "Enhanced brand reputation"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare & Pharma",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      description: "Specialized logistics for pharmaceutical and medical device companies.",
      challenges: [
        "Temperature-controlled storage",
        "Regulatory compliance",
        "Product integrity",
        "Time-sensitive deliveries"
      ],
      solutions: [
        "Cold chain management",
        "GDP-compliant facilities",
        "Serialization tracking",
        "Emergency delivery services"
      ],
      benefits: [
        "Regulatory compliance",
        "Product safety assurance",
        "Reduced waste",
        "Patient safety"
      ]
    },
    {
      id: "automotive",
      title: "Automotive",
      icon: Car,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      description: "Just-in-time logistics solutions for automotive manufacturers and suppliers.",
      challenges: [
        "Just-in-time delivery",
        "Heavy cargo handling",
        "Supply chain coordination",
        "Quality preservation"
      ],
      solutions: [
        "Synchronized supply chains",
        "Specialized equipment handling",
        "Real-time tracking systems",
        "Quality control processes"
      ],
      benefits: [
        "Reduced inventory costs",
        "Minimized production delays",
        "Enhanced efficiency",
        "Quality assurance"
      ]
    },
    {
      id: "fashion",
      title: "Fashion & Lifestyle",
      icon: Shirt,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Fast fashion logistics with seasonal flexibility and global reach.",
      challenges: [
        "Seasonal demand fluctuations",
        "Fast fashion cycles",
        "Global sourcing",
        "Brand protection"
      ],
      solutions: [
        "Flexible warehousing",
        "Express delivery options",
        "Global distribution network",
        "Brand-compliant packaging"
      ],
      benefits: [
        "Market responsiveness",
        "Global reach",
        "Brand consistency",
        "Customer satisfaction"
      ]
    },
    {
      id: "fmcg",
      title: "FMCG",
      icon: Package2,
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=600&h=400&fit=crop",
      description: "High-volume distribution solutions for fast-moving consumer goods.",
      challenges: [
        "High volume distribution",
        "Product shelf life",
        "Market penetration",
        "Cost optimization"
      ],
      solutions: [
        "Mass distribution networks",
        "FIFO inventory management",
        "Rural reach programs",
        "Cost-effective solutions"
      ],
      benefits: [
        "Market expansion",
        "Reduced wastage",
        "Cost efficiency",
        "Brand availability"
      ]
    }
  ];

  const handleGetSolution = (industryId: string) => {
    setSelectedIndustry(industryId);
    const selectedIndustryData = industries.find(industry => industry.id === industryId);
    if (selectedIndustryData) {
      setFormData(prev => ({ ...prev, industry: selectedIndustryData.title }));
    }
    // Scroll to consultation form
    setTimeout(() => {
      const consultationForm = document.getElementById('industry-consultation');
      if (consultationForm) {
        consultationForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setFormData({...formData, phone: value});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate mobile number
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Please enter a valid 10-digit mobile number",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Industry solution inquiry:", { industry: selectedIndustry, ...formData });
      
      // Send email
      const emailSent = await sendFormEmail(
        "Industry Consultation",
        { industry: selectedIndustry, ...formData },
        "New Industry Consultation Request"
      );

      if (emailSent) {
        toast({
          title: "Thanks for Showing Interest In SpeeDee Logistics, Our Team Will Contact You Soon !"
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          message: ""
        });
        setSelectedIndustry(null);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Tailored logistics solutions for every industry's unique challenges
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <TrendingUp className="w-4 h-4 mr-2" />
                Scalable Solutions
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Globe className="w-4 h-4 mr-2" />
                Industry Expertise
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Shield className="w-4 h-4 mr-2" />
                Compliance Ready
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card 
                key={industry.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      console.log(`Failed to load image for ${industry.title}: ${industry.image}`);
                      // Fallback to a solid color background if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <industry.icon className="w-8 h-8 mb-2" />
                    <h3 className="text-2xl font-bold">{industry.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  
                  <div className="grid gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Industry Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Benefits</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleGetSolution(industry.id)}
                    className="w-full group"
                  >
                    Get Industry Solution
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Consultation Form */}
      {selectedIndustry && (
        <section id="industry-consultation" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Industry Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Let our industry experts design a custom solution for your business
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
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="Enter 10-digit mobile number"
                          maxLength={10}
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Enter company name"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Industry</label>
                      <select 
                        className="w-full p-3 border border-border rounded-md bg-background"
                        value={selectedIndustry}
                        disabled={isSubmitting}
                        onChange={(e) => {
                          setSelectedIndustry(e.target.value);
                          const selectedIndustryData = industries.find(industry => industry.id === e.target.value);
                          if (selectedIndustryData) {
                            setFormData(prev => ({ ...prev, industry: selectedIndustryData.title }));
                          }
                        }}
                      >
                        {industries.map(industry => (
                          <option key={industry.id} value={industry.id}>
                            {industry.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Requirements</label>
                      <Textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Describe your logistics challenges and requirements..."
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Industry Consultation"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <StickyButtons />
    </div>
  );
};

export default Solutions;
