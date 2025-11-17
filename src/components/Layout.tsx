import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import optibayLogo from "@/assets/optibay-logo.png";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  // Generate particle positions
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 4}s`,
  }));
  
  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* Particle field */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animation: `particle-float ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}
      {/* Beta Banner */}
      <div className="w-full bg-primary/10 border-b border-primary/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse"></div>
            <span className="text-muted-foreground">
              OptiBay is currently in <span className="text-primary font-semibold">Private Beta</span> with a limited number of shops. 
              <Link to="/beta" className="ml-1 text-primary hover:underline">Apply below to join the beta program →</Link>
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with enhanced presence and hologram glow */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative">
              <div className="relative">
                {/* Hologram glow effect behind logo */}
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={optibayLogo} 
                  alt="OptiBay Logo" 
                  className="relative h-8 sm:h-10 w-8 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Brand lockup */}
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  OptiBay AI
                </span>
                <span className="hidden sm:block text-xs text-muted-foreground leading-tight">
                  AI Bay & Technician Scheduling
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Link
                  to="/"
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === "/" 
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/features"
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === "/features" 
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === "/pricing" 
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Pricing
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href="https://app.optibayai.com/auth" target="_blank" rel="noopener noreferrer">
                    See Beta Demo
                  </a>
                </Button>
                <Button asChild size="sm">
                  <Link to="/beta">Apply for Beta</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
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
