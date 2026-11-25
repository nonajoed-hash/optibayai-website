import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigationGroups } from "@/components/SiteNavigation";
import { BACKEND_CONFIG } from "@/config/backend";
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="xl:hidden"><Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu className="h-6 w-6" /></Button></SheetTrigger>
    <SheetContent className="w-full sm:max-w-sm overflow-y-auto bg-card"><SheetHeader><SheetTitle>Explore OptiBay</SheetTitle></SheetHeader>
      <nav aria-label="Mobile navigation" className="mt-6 space-y-5">
        <Link to="/" className="block font-medium" onClick={()=>setOpen(false)}>Home</Link>
        {navigationGroups.map(group=><div key={group.label}><h3 className="text-accent text-sm uppercase tracking-wider mb-2">{group.label}</h3><div className="space-y-1">{group.links.map(item=><Link key={item.label} to={item.to} onClick={()=>setOpen(false)} className="block rounded px-3 py-2 text-muted-foreground hover:bg-primary/10 hover:text-foreground">{item.label}</Link>)}</div></div>)}
        <div className="space-y-3 border-t border-primary/20 pt-4"><Button asChild variant="outline" className="w-full"><a href={BACKEND_CONFIG.APP_LOGIN_URL} target="_blank" rel="noopener noreferrer">Sign In</a></Button><Button asChild className="w-full"><Link to="/beta" onClick={()=>setOpen(false)}>Apply for Beta</Link></Button></div>
      </nav>
    </SheetContent>
  </Sheet></div>;
}
