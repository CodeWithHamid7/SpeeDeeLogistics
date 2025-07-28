import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useFormEmail = () => {
  const { toast } = useToast();

  const sendFormEmail = async (formType: string, formData: any, subject: string) => {
    try {
      console.log(`Sending ${formType} form data:`, formData);

      const { data, error } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType,
          formData,
          subject
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Email Error",
          description: "There was an issue sending your form. Please try again.",
          variant: "destructive"
        });
        return false;
      }

      console.log('Email sent successfully:', data);
      return true;
    } catch (error) {
      console.error('Error in sendFormEmail:', error);
      toast({
        title: "Email Error",
        description: "There was an issue sending your form. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  return { sendFormEmail };
};