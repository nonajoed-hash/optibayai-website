import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, Grid3x3, Users, Wrench, GraduationCap, Video, IdCard, BookOpen, Network, BarChart3, ClipboardList, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import bayGridHero from "@/assets/bay-grid-hero.png";

const audiences = [
  { icon: Wrench, title: "Repair shops", text: "Bring scheduling, people, vehicles and decisions together.", href: "/core", color: "text-primary" },
  { icon: IdCard, title: "Automotive professionals", text: "Build a professional identity that follows your career.", href: "/#professionals", color: "text-accent" },
  { icon: Video, title: "Training creators", text: "Connect your expertise with the people who need it.", href: "/#creators", color: "text-[hsl(var(--soft-orange))]" },
  { icon: GraduationCap, title: "Automotive schools", text: "Help students take their first steps into the industry.", href: "/#schools", color: "text-violet-400" },
];
const coreFeatures = [
  { icon: CalendarDays, title: "Scheduling & dispatch", href: "/core/scheduling", text: "Plan technician workloads, respect bay constraints and manage waiters, due-outs and unfinished work." },
  { icon: Grid3x3, title: "Birdseye", href: "/core/birdseye", text: "See your facility, bays, parking and vehicle locations in one visual workspace." },
  { icon: ClipboardList, title: "Ticket Command Center", href: "/core/ticket-command-center", text: "Keep work, notes, status and responsibility connected to the operational ticket." },
  { icon: Repeat2, title: "Front-to-back workflow", href: "/core/workflow", text: "Hand work between advisors and technicians while preserving context and custody." },
  { icon: Clock, title: "Time & labor intelligence", href: "/core/time-and-labor", text: "Track work at the job level and preserve measured time through interruptions." },
  { icon: BarChart3, title: "Operational analytics", href: "/core/analytics", text: "Understand technician performance, shop workload and available capacity." },
];
const steps = [
  { icon: GraduationCap, title: "Learn", text: "Begin a professional record before your first shop job." },
  { icon: IdCard, title: "Build your Passport", text: "Document credentials, tools, experience and skills." },
  { icon: Network, title: "Connect", text: "Explore career opportunities with your visibility under your control." },
  { icon: Wrench, title: "Work", text: "Build experience through daily repair shop operations." },
  { icon: BookOpen, title: "Keep growing", text: "Return to learning as new challenges arise." },
];
const section = "container mx-auto px-4 sm:px-6 lg:px-8";
const panel = "relative rounded-xl border border-primary/25 bg-card/65 backdrop-blur-sm p-6 hover:border-accent/50 transition-colors";
export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className={section + " grid lg:grid-cols-2 gap-12 items-center"}>
          <div className="animate-fade-in">
            <p className="mb-5 text-xs sm:text-sm uppercase tracking-[0.18em] text-accent font-semibold">The intelligent automotive ecosystem</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Transform your shop.</span>
              <span className="block text-foreground">Empower your people.</span>
            </h1>
            <p className="mb-5 text-lg sm:text-xl text-muted-foreground max-w-xl">Connecting repair shops, automotive professionals, training creators and schools through intelligent technology.</p>
            <p className="mb-8 text-accent max-w-xl">OptiBay Core is in private beta. Help shape the future of automotive repair.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg"><Link to="/#core">Explore OptiBay <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><a href="https://www.youtube.com/watch?v=ZmPNRSVo-Ck" target="_blank" rel="noopener noreferrer">Watch Beta Demo</a></Button>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Shop intelligence", "Professional identity", "Continuous learning"].map(label => <span key={label} className="rounded-full border border-primary/25 bg-card/50 px-4 py-2">{label}</span>)}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-xl overflow-hidden border-2 border-primary/30 shadow-[var(--glow-primary)]">
              <img src={bayGridHero} alt="Conceptual holographic visualization of automotive shop bays" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10 pointer-events-none" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
          </div>
        </div>
      </section>
      <section id="ecosystem" className="py-16 sm:py-24 border-t border-primary/15 scroll-mt-24">
        <div className={section}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent uppercase tracking-widest text-sm mb-3">One connected ecosystem</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for the entire automotive industry.</h2>
            <p className="text-muted-foreground text-lg">Better operations and stronger careers belong together.</p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {audiences.map(({icon: Icon, title, text, href, color}) => <Link key={title} to={href} className={panel + " group flex flex-col gap-4"}>
              <Icon className={"h-8 w-8 " + color} aria-hidden="true" />
              <h3 className="text-xl font-semibold">{title}</h3><p className="text-muted-foreground flex-1">{text}</p>
              <span className="text-accent text-sm font-medium flex items-center gap-2">Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>)}
          </div>
        </div>
      </section>
      <section id="core" className="py-16 sm:py-24 scroll-mt-24 border-t border-primary/15">
        <div className={section}>
          <div className="max-w-3xl mb-10">
            <p className="text-accent uppercase tracking-widest text-sm mb-3">OptiBay Core · Private beta</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">End the chaos.</span> Optimize every bay.</h2>
            <p className="text-lg text-muted-foreground">An operational intelligence layer designed to complement your shop's existing business systems. Know who is working, where vehicles are, what needs attention and what comes next.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map(({icon: Icon, title, text, href}) => <Link to={href} key={title} className={panel+" group"}><Icon className="h-7 w-7 text-accent mb-4" aria-hidden="true" /><h3 className="text-xl font-semibold mb-2">{title}</h3><p className="text-muted-foreground">{text}</p><span className="text-accent text-sm font-medium flex items-center gap-2 mt-4">Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/></span></Link>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-4"><Button asChild><Link to="/core">Explore Core features</Link></Button><Button asChild variant="outline"><Link to="/pricing">See pricing</Link></Button></div>
        </div>
      </section>
      <section id="professionals" className="py-16 sm:py-24 scroll-mt-24 border-t border-primary/15">
        <div className={section + " grid lg:grid-cols-2 gap-10 items-center"}>
          <div>
            <p className="text-accent uppercase tracking-widest text-sm mb-3">Passport · Connect · Learning Center</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-5">Your career belongs to you.</h2>
            <p className="text-lg text-muted-foreground mb-6">From your first day of school to your next career opportunity, build a professional record that follows you, not your employer.</p>
            <div className="space-y-4">
              {[{icon: IdCard, title:"OptiBay Passport", text:"Your experience, skills, education, certifications and toolbox."},{icon: Network,title:"OptiBay Connect",text:"Discover opportunities and manage how you are visible to hiring shops."},{icon: BookOpen,title:"Learning Center",text:"Explore training resources and keep a record of your learning."}].map(({icon:Icon,title,text})=><div key={title} className="flex gap-4 items-start"><Icon className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" /><div><h3 className="font-semibold">{title}</h3><p className="text-muted-foreground">{text}</p></div></div>)}
            </div>
          </div>
          <div className={panel + " shadow-[var(--glow-soft)]"}>
            <div className="flex gap-4 items-center border-b border-primary/25 pb-5 mb-5"><div className="p-3 rounded-lg bg-primary/10"><IdCard className="w-10 h-10 text-primary" /></div><div><p className="text-accent text-xs tracking-widest uppercase">OptiBay Passport</p><h3 className="text-xl font-bold">Your professional record</h3><p className="text-sm text-muted-foreground">Illustrative profile</p></div></div>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Professional experience","Education & credentials","Skills & proficiency","Toolbox","Learning history","Privacy & visibility"].map(item=><div key={item} className="rounded-lg border border-primary/20 bg-background/40 px-4 py-4 text-sm">{item}</div>)}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">Conceptual illustration, not a live user profile.</p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 border-t border-primary/15">
        <div className={section}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">From education to experience.</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">A connected career journey, with the professional at its center.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">{steps.map(({icon:Icon,title,text},i)=><div key={title} className={panel}><span className="text-xs text-accent">0{i+1}</span><Icon className="h-7 w-7 text-primary my-3" aria-hidden="true" /><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-muted-foreground">{text}</p></div>)}</div>
        </div>
      </section>
      <section className="py-16 sm:py-24 border-t border-primary/15">
        <div className={section + " grid lg:grid-cols-2 gap-6"}>
          <article id="creators" className={panel + " scroll-mt-24"}><Video className="h-9 w-9 mb-5 text-[hsl(var(--soft-orange))]" /><p className="text-sm text-accent mb-2">Invitation-only partnerships</p><h2 className="text-3xl font-bold mb-4">Your expertise. Their next breakthrough.</h2><p className="text-muted-foreground mb-6">Help automotive professionals discover relevant training. OptiBay's creator ecosystem is designed to respect attribution and direct learners to original creator platforms.</p><Button asChild variant="outline"><Link to="/contact">Discuss a creator partnership</Link></Button></article>
          <article id="schools" className={panel + " scroll-mt-24"}><GraduationCap className="h-9 w-9 mb-5 text-violet-400" /><p className="text-sm text-accent mb-2">Early-access school partnerships</p><h2 className="text-3xl font-bold mb-4">Build the next generation.</h2><p className="text-muted-foreground mb-6">Connect education to employment through student Passports, school programs, cohorts and school-issued attestations. We are seeking partners for controlled school pilots.</p><Button asChild variant="outline"><Link to="/contact">Discuss a school partnership</Link></Button></article>
        </div>
      </section>
      <section className="py-20 sm:py-28 border-t border-primary/15">
        <div className={section + " text-center max-w-4xl"}>
          <Users className="mx-auto text-accent h-10 w-10 mb-5" />
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Built by automotive professionals.<br/>Built for automotive professionals.</h2>
          <p className="text-muted-foreground text-lg mb-8">Join our private beta and help shape a platform built around the people doing the work.</p>
          <div className="flex flex-wrap justify-center gap-4"><Button asChild size="lg"><Link to="/beta">Apply for Beta Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/about/founder">Meet the founder</Link></Button></div>
        </div>
      </section>
    </div>
  );
}
