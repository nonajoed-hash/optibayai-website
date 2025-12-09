import { Layout } from "@/components/Layout";
import { SEO, OrganizationSchema, SoftwareApplicationSchema } from "@/components/SEO";
import Home from "./Home";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="OptiBay AI - Intelligent Auto Shop Scheduling Software"
        description="AI-powered scheduling and dispatch for high-velocity auto repair shops. Optimize bays, balance technician workloads, and eliminate scheduling chaos."
        path="/"
        keywords="auto shop scheduling software, repair shop management, bay optimization, technician scheduling, automotive shop AI, shop dispatch software"
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <Home />
    </Layout>
  );
};

export default Index;
