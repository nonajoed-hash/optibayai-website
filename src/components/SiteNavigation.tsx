import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { coreTopics } from "@/content/coreTopics";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const navigationGroups = [
  { label: "Platform", links: [{label:"Core overview",to:"/core"}, ...coreTopics.map(t=>({label:t.title,to:"/core/"+t.slug})), {label:"Pricing",to:"/pricing"}] },
  { label: "Solutions", links: [{label:"Repair shops",to:"/core"},{label:"Automotive professionals",to:"/#professionals"},{label:"Training creators",to:"/#creators"},{label:"Automotive schools",to:"/#schools"}] },
  { label: "Ecosystem", links: [{label:"Ecosystem overview",to:"/#ecosystem"},{label:"Passport, Connect & learning",to:"/#professionals"},{label:"Creator partnerships",to:"/#creators"},{label:"School partnerships",to:"/#schools"}] },
  { label: "Company", links: [{label:"Our mission",to:"/mission"},{label:"Founder",to:"/about/founder"},{label:"Who we are",to:"/about/company"},{label:"Contact",to:"/contact"}] },
];
export function DesktopNavigation() {
  const location = useLocation();
  return <nav aria-label="Main navigation" className="flex items-center gap-5">
    {navigationGroups.map(group => <DropdownMenu key={group.label}>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded">
        {group.label}<ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-56 bg-card/95 backdrop-blur-lg border-primary/25">
        {group.links.map(item => <DropdownMenuItem key={item.label} asChild><Link to={item.to} aria-current={location.pathname+location.hash===item.to ? "page":undefined}>{item.label}</Link></DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>)}
    <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">Pricing</Link>
  </nav>;
}
