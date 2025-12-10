import { Layout } from "@/components/Layout";
import { SEO, OrganizationSchema, SoftwareApplicationSchema } from "@/components/SEO";
import Home from "./Home";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="OptiBay AI | Smart Automotive Scheduling & Auto Shop Scheduling Software"
        description="OptiBay AI is smart automotive scheduling software built for modern repair shops. Manage technicians, bays, waiters, and workflow with real-time, AI-powered clarity."
        path="/"
        keywords="smart automotive scheduling, auto shop scheduling software, repair shop management, bay optimization, technician scheduling"
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <Home />
    </Layout>
  );
};

export default Index;
