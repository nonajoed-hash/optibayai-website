import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { BACKEND_CONFIG } from "@/config/backend";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  company: z.string().trim().max(200, "Company name too long").optional(),
  subject: z.enum(
    [
      "General Question",
      "Technical Support",
      "Billing",
      "Privacy or Data Request",
      "Other",
    ],
    { required_error: "Please select a subject" }
  ),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Manual honeypot check (not in zod schema)
    const honeypot = document.getElementById("website") as HTMLInputElement;
    if (honeypot?.value) return; // Silent reject for bots

    setIsSubmitting(true);

    try {
      const response = await fetch(BACKEND_CONFIG.CONTACT_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || undefined,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 429) {
          toast.error("Too many requests. Please try again later.");
        } else if (response.status === 400) {
          toast.error(result.error || "Please check your information and try again.");
        } else if (response.status === 403) {
          toast.error("Request blocked. Please try again.");
        } else {
          toast.error("Something went wrong. Please email us directly at support@optibayai.com");
        }
        return;
      }

      setIsSuccess(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us | OptiBay AI"
        description="Have questions about OptiBay Core, scheduling, or account access? Reach out to our team and we'll get back to you as soon as possible."
        path="/contact"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contact OptiBay AI
              </h1>
              <p className="text-muted-foreground text-lg">
                Have questions about OptiBay Core, scheduling, or account access?
                <br />
                We're here to help. Reach out and our team will get back to you as soon as possible.
              </p>
            </div>

            {isSuccess ? (
              /* Success State */
              <div className="text-center py-12 px-6 bg-card/50 border border-primary/20 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Thank you for contacting OptiBay AI</h2>
                <p className="text-muted-foreground mb-6">
                  We'll be in touch shortly.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              /* Contact Form */
              <div className="bg-card/50 border border-primary/20 rounded-lg p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field - hidden from users, catches bots */}
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute -left-[9999px] opacity-0 h-0 w-0"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isSubmitting}
                                placeholder="Your name"
                              />
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
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                disabled={isSubmitting}
                                placeholder="you@example.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company / Repair Shop Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isSubmitting}
                              placeholder="Your shop or company name (optional)"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={isSubmitting}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General Question">General Question</SelectItem>
                              <SelectItem value="Technical Support">Technical Support</SelectItem>
                              <SelectItem value="Billing">Billing</SelectItem>
                              <SelectItem value="Privacy or Data Request">Privacy or Data Request</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              disabled={isSubmitting}
                              placeholder="How can we help you?"
                              rows={5}
                              className="resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Privacy Notice */}
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you acknowledge that OptiBay AI may collect and process
                      the information you provide for the purpose of responding to your inquiry, in
                      accordance with our{" "}
                      <Link
                        to="/legal/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            )}

            {/* Email Contact Section */}
            <div className="mt-12 text-center">
              <h2 className="text-lg font-semibold mb-4">Prefer email?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="mailto:support@optibayai.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  support@optibayai.com
                </a>
                <a
                  href="mailto:privacy@optibayai.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  privacy@optibayai.com
                </a>
                <a
                  href="mailto:legal@optibayai.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  legal@optibayai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
