import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(186,77%,42%)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OB</span>
                </div>
                <span className="font-bold text-xl">OptiBay</span>
              </Link>
              
              <nav className="hidden md:flex gap-6">
                <Link
                  to="/features"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/features") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/pricing") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Pricing
                </Link>
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <a href="https://app.optibayai.com/auth" target="_blank" rel="noopener noreferrer">
                  Sign In
                </a>
              </Button>
              <Button asChild size="sm">
                <Link to="/beta">Join Beta</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">{children}</main>
      
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(186,77%,42%)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OB</span>
                </div>
                <span className="font-bold text-lg">OptiBay</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern scheduling platform for auto repair shops
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/beta" className="text-muted-foreground hover:text-foreground transition-colors">
                    Beta Program
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/legal/beta-agreement" className="text-muted-foreground hover:text-foreground transition-colors">
                    Beta Agreement
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} OptiBay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
