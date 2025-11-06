import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Wrench, BarChart3, Clock, Zap, Bell, Shield, Smartphone, Cloud } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent calendar system with drag-and-drop interface, automated conflict detection, and optimal bay allocation.",
      benefits: ["Visual bay timeline", "Automated reminders", "Recurring appointments", "Waitlist management"]
    },
    {
      icon: Users,
      title: "Customer Portal",
      description: "Self-service portal for customers to book appointments, view service history, and track repair status in real-time.",
      benefits: ["Online booking 24/7", "Service history access", "Real-time updates", "Digital invoices"]
    },
    {
      icon: Wrench,
      title: "Technician Workspace",
      description: "Streamlined interface for technicians to manage jobs, update status, and communicate with service advisors.",
      benefits: ["Mobile-friendly interface", "Job checklists", "Parts tracking", "Photo documentation"]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and analytics to track shop performance, identify trends, and make data-driven decisions.",
      benefits: ["Revenue tracking", "Technician efficiency", "Customer insights", "Custom reports"]
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Accurate time tracking for labor billing, job costing, and improving future estimates.",
      benefits: ["Automated timers", "Labor cost analysis", "Estimate accuracy", "Billing integration"]
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Connect OptiBay with your existing tools including accounting software, parts suppliers, and payment processors.",
      benefits: ["QuickBooks sync", "Parts catalogs", "Payment gateways", "Email/SMS"]
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Automated notifications keep everyone informed with email and SMS alerts for appointments, updates, and reminders.",
      benefits: ["Appointment reminders", "Status updates", "Team alerts", "Custom triggers"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption, role-based access control, and compliance with industry standards.",
      benefits: ["Data encryption", "User permissions", "Audit logs", "Backup & recovery"]
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Responsive design works perfectly on any device, allowing you to manage your shop from anywhere.",
      benefits: ["iOS & Android", "Offline mode", "Push notifications", "Camera integration"]
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "No servers to maintain. Access your data from anywhere with automatic backups and updates.",
      benefits: ["Always up-to-date", "Automatic backups", "99.9% uptime", "Scalable infrastructure"]
    }
  ];

  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Powerful Features for Modern Auto Shops
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to streamline operations, delight customers, and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
