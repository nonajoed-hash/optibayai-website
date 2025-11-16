import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import optibayLogo from "@/assets/optibay-logo.png";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={optibayLogo} 
                  alt="OptiBay AI" 
                  className="h-12 w-auto" 
                />
              </Link>
              
              <nav className="hidden md:flex gap-6">
                <Link
                  to="/features"
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive("/features") 
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive("/pricing") 
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Pricing
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button asChild variant="pill" size="sm">
                <a href="https://app.optibayai.com/auth" target="_blank" rel="noopener noreferrer">
                  See Live Demo
                </a>
              </Button>
              <Button asChild size="sm">
                <Link to="/beta">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">{children}</main>
      
      <footer className="relative border-t border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={optibayLogo} 
                  alt="OptiBay AI" 
                  className="h-12 w-auto" 
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Modern scheduling platform for auto repair shops
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/beta" className="text-muted-foreground hover:text-primary transition-colors">
                    Beta Program
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/legal/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/legal/beta-agreement" className="text-muted-foreground hover:text-primary transition-colors">
                    Beta Agreement
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} OptiBay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
