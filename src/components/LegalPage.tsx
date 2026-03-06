import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

interface LegalPageProps {
  title: string;
  description: string;
  path: string;
  lastUpdated?: string;
  keywords?: string;
  children: React.ReactNode;
}

export function LegalPage({ title, description, path, lastUpdated, keywords, children }: LegalPageProps) {
  return (
    <Layout>
      <SEO
        title={`${title} - OptiBay AI`}
        description={description}
        path={path}
        keywords={keywords}
      />
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">{title}</h1>

          {lastUpdated && (
            <p className="text-lg text-muted-foreground mb-8">
              <em>Last updated: {lastUpdated}</em>
            </p>
          )}

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:text-left [&_th]:text-foreground [&_th]:bg-muted [&_td]:border [&_td]:border-border [&_td]:p-3 [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}
