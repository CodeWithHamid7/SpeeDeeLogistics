import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock } from "lucide-react";

const TrackingCTA = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackOrder = () => {
    console.log("Tracking order:", trackingNumber);
    // Placeholder for tracking functionality
  };

  return (
    <section id="tracking-cta-section" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Track Your Shipment in Real-Time
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12">
            Get instant updates on your package location and delivery status with our advanced tracking system
          </p>

          <Card className="bg-background/95 backdrop-blur shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input
                    placeholder="Enter your tracking number or mobile number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="h-14 text-lg border-2 border-border focus:border-primary"
                  />
                </div>
                <Button 
                  onClick={handleTrackOrder}
                  size="lg"
                  className="bg-primary hover:bg-primary-glow h-14 px-8"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Track Now
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Real-Time Location</h3>
                  <p className="text-sm text-muted-foreground">
                    See exactly where your package is at any moment
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Delivery Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant notifications about delivery progress
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Detailed History</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete tracking history from pickup to delivery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-primary-foreground/80">
            <p className="mb-4">Need help with tracking? Our support team is here 24/7</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="outline" 
                className="border-white/50 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm"
              >
                Contact Support
              </Button>
              <Button 
                variant="outline"
                className="border-white/50 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingCTA;