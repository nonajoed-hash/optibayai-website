import { Layout } from "@/components/Layout";
import { SEO, OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema } from "@/components/SEO";
import Home from "./Home";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="OptiBay AI | The Intelligent Automotive Ecosystem"
        description="OptiBay AI connects automotive shop operations, professional Passports, career opportunities and continuous learning. Explore Core and the OptiBay ecosystem."
        path="/"
        keywords="automotive scheduling, shop workflow, technician scheduling, automotive professional passport, automotive training, shop operations"
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <WebSiteSchema />
      <Home />
    </Layout>
  );
};

export default Index;
