import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="fixed top-16 left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-primary/20 shadow-xl z-40 animate-fade-in">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <NavLink 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/features" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  Features
                </NavLink>
                <NavLink 
                  to="/pricing" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  Pricing
                </NavLink>
                <NavLink 
                  to="/mission" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  Mission
                </NavLink>
                <NavLink 
                  to="/about/founder" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  Founder
                </NavLink>
                <NavLink 
                  to="/about/company" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  Who We Are
                </NavLink>
                
                <div className="pt-4 space-y-3 border-t border-primary/20">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href="https://www.youtube.com/watch?v=ZmPNRSVo-Ck" target="_blank" rel="noopener noreferrer">
                      See Beta Demo
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/beta">
                      Apply for Beta
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
