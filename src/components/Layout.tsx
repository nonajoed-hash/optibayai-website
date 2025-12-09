import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import optibayLogo from "@/assets/optibay-logo.png";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  // Generate particle positions
  const particles = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 1 + 1}px`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 3}s`,
  }));
  
  return (
    <div className="min-h-screen flex flex-col relative z-10" style={{ isolation: 'isolate' }}>
      {/* Fixed background logo watermark */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src={optibayLogo}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] opacity-[0.06]"
        />
      </div>
      {/* Tech grid pattern */}
      <div className="tech-grid" />
      
      {/* Vertical light sweep */}
      <div className="light-sweep" />
      
      {/* Particle field */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
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
                <Link
                  to="/mission"
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === "/mission" 
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Mission
                </Link>
                {/* About Dropdown */}
                <div className="relative group">
                  <button
                    className={`text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      location.pathname.startsWith("/about") 
                        ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    About
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card/95 backdrop-blur-lg border border-border/40 rounded-lg shadow-xl py-2 min-w-[140px]">
                      <Link
                        to="/about/founder"
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/about/founder"
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        Founder
                      </Link>
                      <Link
                        to="/about/company"
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/about/company"
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        Who We Are
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.youtube.com/watch?v=ZmPNRSVo-Ck" target="_blank" rel="noopener noreferrer">
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
      
      <footer className="relative bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/mission" className="text-muted-foreground hover:text-primary transition-colors">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="/about/founder" className="text-muted-foreground hover:text-primary transition-colors">
                    Founder
                  </Link>
                </li>
                <li>
                  <Link to="/about/company" className="text-muted-foreground hover:text-primary transition-colors">
                    Who We Are
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
                  <a href="https://www.tiktok.com/@optibay_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="https://x.com/OptibayAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/optibay.ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/OptiBayAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@OptiBayAi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    YouTube
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
