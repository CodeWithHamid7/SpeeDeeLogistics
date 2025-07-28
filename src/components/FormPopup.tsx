import { useState } from "react";
import { X, Package, User, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useFormEmail } from "@/hooks/useFormEmail";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup = ({ isOpen, onClose }: FormPopupProps) => {
  const { toast } = useToast();
  const { sendFormEmail } = useFormEmail();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

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
      console.log("Ship Now Form:", formData);
      
      // Send email
      const emailSent = await sendFormEmail(
        "Ship Now Inquiry",
        formData,
        "New Ship Now Request"
      );

      if (emailSent) {
        toast({
          title: "Thanks For Showing Interest in SpeeDee Logistics, Our Team Will Contact You Soon !"
        });
        setFormData({ name: "", phone: "", email: "" });
        onClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-primary mb-2">
            <Package className="w-8 h-8 mr-3 text-accent" />
            Ship With SpeeDee
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Get started with India's most trusted logistics partner
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-10 h-12"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="10-digit Mobile Number"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="pl-10 h-12"
              maxLength={10}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10 h-12"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;