import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "TechCart E-commerce",
      role: "Logistics Head",
      content: "SpeeDee Logistics has transformed our delivery operations. Their real-time tracking and 99.8% on-time delivery rate has significantly improved our customer satisfaction. The team is responsive and understands our business needs perfectly.",
      rating: 5,
      industry: "E-commerce"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "MediCare Pharma",
      role: "Supply Chain Manager",
      content: "For our pharmaceutical products, temperature control and timely delivery are critical. SpeeDee's cold chain solutions have been exceptional, maintaining product integrity throughout the supply chain. Highly recommended!",
      rating: 5,
      industry: "Healthcare"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "AutoParts India",
      role: "Operations Director",
      content: "The just-in-time delivery system by SpeeDee has helped us reduce inventory costs by 25%. Their automotive logistics expertise and reliable service have made them our preferred logistics partner.",
      rating: 5,
      industry: "Automotive"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      company: "Fashion Forward",
      role: "CEO",
      content: "In the fast fashion industry, speed is everything. SpeeDee gets our products to market 40% faster than our previous logistics partner. Their seasonal flexibility during peak times is outstanding.",
      rating: 5,
      industry: "Fashion"
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "FreshGoods FMCG",
      role: "Distribution Head",
      content: "SpeeDee's extensive network covering 18,000+ pin codes has helped us reach rural markets we never thought possible. Their bulk distribution capabilities are unmatched in the industry.",
      rating: 5,
      industry: "FMCG"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our logistics solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-primary border-0 bg-gradient-to-br from-background to-light-bg">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl text-foreground leading-relaxed text-center mb-8 min-h-[120px] flex items-center justify-center">
                "{testimonials[currentSlide].content}"
              </blockquote>

              <div className="text-center">
                <div className="font-bold text-lg text-foreground">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-primary font-medium">
                  {testimonials[currentSlide].role}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentSlide].company}
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {testimonials[currentSlide].industry}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Customer Logos */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Trusted by 100,000+ Businesses
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['TechCart', 'MediCare', 'AutoParts', 'Fashion Forward', 'FreshGoods'].map((company) => (
              <div key={company} className="text-center">
                <div className="bg-muted rounded-lg p-6 h-20 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;