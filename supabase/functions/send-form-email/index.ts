import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("re_J7HxnpQn_3ZSWdvkne1uBY2dXn4sjrE3i"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormEmailRequest {
  formType: string;
  formData: any;
  subject: string;
}

const formatFormData = (formData: any, formType: string): string => {
  let html = `<h2>${formType} Form Submission</h2>`;
  html += `<p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>`;
  html += `<hr>`;
  
  Object.entries(formData).forEach(([key, value]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    html += `<p><strong>${label}:</strong> ${value}</p>`;
  });
  
  return html;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, formData, subject }: FormEmailRequest = await req.json();

    console.log(`Processing ${formType} form submission:`, formData);

    const emailHtml = formatFormData(formData, formType);

    const emailResponse = await resend.emails.send({
      from: "SpeeDee Logistics <onboarding@resend.dev>",
      to: ["speedeelogisticsindia@gmail.com"],
      subject: `${subject} - SpeeDee Logistics`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);