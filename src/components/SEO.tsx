import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

const BASE_URL = "https://optibayai.com";

function updateMetaTag(name: string, content: string, isProperty = false) {
  const attribute = isProperty ? "property" : "name";
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute("href", href);
}

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

  useEffect(() => {
    document.title = fullTitle;
    
    // Primary Meta Tags
    updateMetaTag("title", fullTitle);
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "OptiBay AI");
    updateMetaTag("theme-color", "#0a1929");
    updateLinkTag("canonical", fullUrl);

    // Open Graph / Facebook
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", fullImage, true);
    updateMetaTag("og:site_name", "OptiBay AI", true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", fullUrl);
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullImage);
  }, [fullTitle, description, keywords, fullUrl, fullImage, type]);

  return null;
}

// Helper to inject JSON-LD schema
function injectSchema(id: string, schema: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(schema);
}

// Structured Data Components
export function OrganizationSchema() {
  useEffect(() => {
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
    
    injectSchema("org-schema", schema);
  }, []);

  return null;
}

export function SoftwareApplicationSchema() {
  useEffect(() => {
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
    
    injectSchema("software-schema", schema);
  }, []);

  return null;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  useEffect(() => {
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
    
    injectSchema("faq-schema", schema);
  }, [faqs]);

  return null;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  useEffect(() => {
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
    
    injectSchema("breadcrumb-schema", schema);
  }, [items]);

  return null;
}
