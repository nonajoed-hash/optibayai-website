import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

const BASE_URL = "https://optibayai.com";

export function SEO({
  title,
  description,
  path = "",
  image = "/og-image.png",
  type = "website",
  keywords = "auto shop scheduling, repair shop software, bay management, technician scheduling, automotive shop optimization, shop management software"
}: SEOProps) {
  const fullUrl = `${BASE_URL}${path}`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const fullTitle = title.includes("OptiBay") ? title : `${title} | OptiBay AI`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="OptiBay AI" />
      <meta name="theme-color" content="#0a1929" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="OptiBay AI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}

// Structured Data Components
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OptiBay AI",
    url: "https://optibayai.com",
    logo: "https://optibayai.com/og-image.png",
    description: "AI-powered auto shop scheduling and management platform",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Joe DeFreitas"
    },
    sameAs: [
      "https://www.tiktok.com/@optibay_ai",
      "https://x.com/OptibayAI",
      "https://www.instagram.com/optibay.ai/",
      "https://www.facebook.com/OptiBayAI",
      "https://www.youtube.com/@OptiBayAi"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "joe@optibayai.com",
      contactType: "customer service"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OptiBay AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Intelligent auto shop scheduling software that optimizes bay assignments, technician workloads, and customer appointments using AI.",
    offers: {
      "@type": "Offer",
      price: "149.00",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
