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
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Award,
  Heart,
  Briefcase,
  GraduationCap,
  Target,
  Loader2
} from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const { sendFormEmail } = useFormEmail();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: "",
    message: ""
  });

  const jobOpenings = [
    {
      id: "ops-manager",
      title: "Operations Manager",
      department: "Operations",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead operational excellence and drive efficiency across our logistics network.",
      requirements: [
        "Bachelor's degree in Operations/Supply Chain",
        "5+ years in logistics operations",
        "Strong analytical and leadership skills",
        "Experience with WMS/TMS systems"
      ]
    },
    {
      id: "sales-exec",
      title: "Sales Executive",
      department: "Sales",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description: "Drive business growth by acquiring new clients and managing key accounts.",
      requirements: [
        "Bachelor's degree in Business/Marketing",
        "2+ years in B2B sales",
        "Excellent communication skills",
        "Experience in logistics industry preferred"
      ]
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      department: "Technology",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      description: "Analyze logistics data to drive insights and operational improvements.",
      requirements: [
        "Bachelor's degree in Analytics/Statistics",
        "Proficiency in SQL, Python, R",
        "Experience with visualization tools",
        "Supply chain analytics experience"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths and skill development opportunities"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative and inclusive work environment"
    }
  ];

  const handleApplyClick = (jobId: string) => {
    setSelectedJob(jobId);
    const selectedJobData = jobOpenings.find(job => job.id === jobId);
    if (selectedJobData) {
      setFormData(prev => ({ ...prev, position: selectedJobData.title }));
    }
    // Scroll to form
    setTimeout(() => {
      const formElement = document.getElementById('application-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
      console.log("Job application submitted:", formData);
      
      // Send email
      const emailSent = await sendFormEmail(
        "Job Application",
        formData,
        "New Job Application"
      );

      if (emailSent) {
        toast({
          title: "Thanks For Applying In SpeeDee Logistics, Will Get Back To You Soon !"
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          resume: "",
          message: ""
        });
        setSelectedJob(null);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setFormData({...formData, phone: value});
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
              Build Your Career with SpeeDee
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Join India's fastest-growing logistics company and shape the future of supply chain
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-4 h-4 mr-2" />
                5000+ Employees
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <MapPin className="w-4 h-4 mr-2" />
                50+ Locations
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Award className="w-4 h-4 mr-2" />
                Great Place to Work
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Why Choose SpeeDee as Your Career Partner?
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
              We believe in nurturing talent and creating opportunities for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
              Find your perfect role and take the next step in your career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card 
                key={job.id} 
                className="hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <Badge variant="secondary" className="mr-2">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <Target className="w-3 h-3 text-accent mr-2 mt-1 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={() => handleApplyClick(job.id)}
                    className="w-full"
                  >
                    Apply for this Position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section id="application-form" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Apply Now</CardTitle>
                  <p className="text-muted-foreground">
                    Take the first step towards an exciting career with SpeeDee Logistics
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
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Position Applied</label>
                        <select 
                          className="w-full p-3 border border-border rounded-md bg-background"
                          value={selectedJob}
                          disabled={isSubmitting}
                          onChange={(e) => {
                            setSelectedJob(e.target.value);
                            const selectedJobData = jobOpenings.find(job => job.id === e.target.value);
                            if (selectedJobData) {
                              setFormData(prev => ({ ...prev, position: selectedJobData.title }));
                            }
                          }}
                        >
                          {jobOpenings.map(job => (
                            <option key={job.id} value={job.id}>
                              {job.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Years of Experience</label>
                        <Input 
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          placeholder="e.g., 3 years"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Resume/CV Link</label>
                      <Input 
                        value={formData.resume}
                        onChange={(e) => setFormData({...formData, resume: e.target.value})}
                        placeholder="Link to your resume (Google Drive, LinkedIn, etc.)"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Letter</label>
                      <Textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us why you're interested in this position..."
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setSelectedJob(null)}
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </div>
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

export default Careers;
