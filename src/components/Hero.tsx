import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroImage from "../assets/hero-logistics.jpg.jpg";
import FormPopup from "./FormPopup";

const Hero = () => {
  const [trackingInput, setTrackingInput] = useState("");
  const [trackingMethod, setTrackingMethod] = useState("mobile");
  const [showFormPopup, setShowFormPopup] = useState(false);

  const handleGetOTP = () => {
    console.log("Getting OTP for:", trackingInput);
    // Placeholder for OTP functionality
  };

  return (
    <section id="tracking-section" className="relative min-h-[600px] bg-gradient-hero text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6 animate-slide-right">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              We are India's largest fully integrated{" "}
              <span className="text-accent">logistics services</span> provider
            </h1>
            
            <div className="flex flex-wrap gap-4 text-lg">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Express Parcel
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                PTL
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                FTL
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Cross Border
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Supply Chain
              </span>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 transition-all duration-300 hover:scale-105"
                onClick={() => setShowFormPopup(true)}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Tracking Card */}
          <div className="lg:ml-auto animate-slide-left">
            <Card className="bg-background text-foreground p-6 shadow-2xl max-w-md">
              <Tabs value={trackingMethod} onValueChange={setTrackingMethod} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="mobile" className="text-xs">Mobile</TabsTrigger>
                  <TabsTrigger value="awb" className="text-xs">AWB</TabsTrigger>
                  <TabsTrigger value="order" className="text-xs">Order ID</TabsTrigger>
                  <TabsTrigger value="lrn" className="text-xs">LRN</TabsTrigger>
                </TabsList>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Track your order through</h3>
                  
                  <TabsContent value="mobile" className="space-y-4">
                    <Input
                      placeholder="Enter your mobile number"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      className="border-border"
                    />
                    <Button 
                      onClick={handleGetOTP}
                      className="w-full bg-primary hover:bg-primary-glow"
                    >
                      Get OTP
                    </Button>
                  </TabsContent>

                  <TabsContent value="awb" className="space-y-4">
                    <Input
                      placeholder="Enter AWB number"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      className="border-border"
                    />
                    <Button 
                      onClick={handleGetOTP}
                      className="w-full bg-primary hover:bg-primary-glow"
                    >
                      Track Order
                    </Button>
                  </TabsContent>

                  <TabsContent value="order" className="space-y-4">
                    <Input
                      placeholder="Enter Order ID"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      className="border-border"
                    />
                    <Button 
                      onClick={handleGetOTP}
                      className="w-full bg-primary hover:bg-primary-glow"
                    >
                      Track Order
                    </Button>
                  </TabsContent>

                  <TabsContent value="lrn" className="space-y-4">
                    <Input
                      placeholder="Enter LRN"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      className="border-border"
                    />
                    <Button 
                      onClick={handleGetOTP}
                      className="w-full bg-primary hover:bg-primary-glow"
                    >
                      Track Order
                    </Button>
                  </TabsContent>

                  <p className="text-sm text-muted-foreground text-center">
                    Live tracking updates & extra support on our App
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <div className="text-xs bg-muted rounded px-3 py-2">
                      📱 Google Play
                    </div>
                    <div className="text-xs bg-muted rounded px-3 py-2">
                      🍎 App Store
                    </div>
                  </div>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      <FormPopup isOpen={showFormPopup} onClose={() => setShowFormPopup(false)} />
    </section>
  );
};

export default Hero;