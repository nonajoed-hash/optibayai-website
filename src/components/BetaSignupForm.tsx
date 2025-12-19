import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { BACKEND_CONFIG } from "@/config/backend";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  shop_name: z.string().trim().min(1, "Shop name is required").max(200, "Shop name must be less than 200 characters"),
  phone: z.string().trim().max(50, "Phone must be less than 50 characters").optional(),
  role: z.string().min(1, "Please select your role"),
  shop_size: z.coerce.number().min(1, "Shop size must be at least 1").max(1000, "Shop size must be less than 1000"),
  country: z.string().trim().min(1, "Country is required").max(100, "Country must be less than 100 characters"),
  notes: z.string().trim().max(1000, "Notes must be less than 1000 characters").optional(),
  honeypot: z.string().max(0, "Invalid submission"),
});

type FormData = z.infer<typeof formSchema>;

export const BetaSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      shop_name: "",
      phone: "",
      role: "",
      shop_size: 1,
      country: "",
      notes: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // DEBUG: Log the endpoint to verify env var injection
    console.log('=== BETA SIGNUP DEBUG ===');
    console.log('BETA_SIGNUP_ENDPOINT:', BACKEND_CONFIG.BETA_SIGNUP_ENDPOINT);
    console.log('Endpoint is empty:', !BACKEND_CONFIG.BETA_SIGNUP_ENDPOINT);
    console.log('=========================');
    
    setIsSubmitting(true);
    
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Direct fetch - no Supabase client, no env vars required
      const response = await fetch(BACKEND_CONFIG.BETA_SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          shopName: data.shop_name,
          phone: data.phone || undefined,
          role: data.role,
          shopSize: data.shop_size.toString(),
          country: data.country,
          timezone,
          notes: data.notes || undefined,
          source: 'website',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Request not allowed from this origin.');
        }
        if (response.status === 429) {
          throw new Error(result.error || 'Too many attempts. Please try again later.');
        }
        if (response.status === 400) {
          throw new Error(result.error || 'Please check your input and try again.');
        }
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      toast.success("Thank you for your interest in the OptiBay experience. If selected for beta, you'll receive an email within 24 hours.");
      form.reset();
    } catch (error: any) {
      console.error("Beta signup error:", error);
      toast.error(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Thank you for your interest in the OptiBay experience.</h2>
          <p className="text-lg text-muted-foreground">
            Due to high demand, beta seats are limited. If you are selected as one of our beta testers, you will receive an email with the next steps within 24 hours.
          </p>
        </div>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Response
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          {...form.register("honeypot")}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="shop_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shop Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Auto Repair Shop" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Role *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="service-advisor">Service Advisor</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shop_size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shop Size (Bays) *</FormLabel>
                <FormControl>
                  <Input type="number" min="1" placeholder="5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

                <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your shop's needs or any questions you have..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Join Beta Program"
          )}
        </Button>
      </form>
    </Form>
  );
};
