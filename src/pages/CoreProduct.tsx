import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CalendarDays, Grid3x3, ClipboardList, Repeat2, Clock, BarChart3, MessageSquare, ChevronRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { coreTopics } from "@/content/coreTopics";
const icons = { CalendarDays, Grid3x3, ClipboardList, Repeat2, Clock, BarChart3, MessageSquare };
const wrap = "container mx-auto px-4 sm:px-6 lg:px-8";
const panel = "rounded-xl border border-primary/25 bg-card/65 backdrop-blur-sm p-6";
export function CoreOverview() {
  return <Layout><SEO title="OptiBay Core | Operational Intelligence" description="Explore scheduling, Birdseye, ticket workflow, timing, analytics and communication in OptiBay Core." path="/core" />
    <section className="py-16 sm:py-24"><div className={wrap}>
      <div className="max-w-3xl mb-12"><p className="text-accent uppercase tracking-widest text-sm mb-4">OptiBay Core · Private beta</p><h1 className="text-4xl sm:text-6xl font-bold mb-5"><span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">End the chaos.</span>Optimize every bay.</h1><p className="text-lg text-muted-foreground mb-8">Coordinate the people, vehicles, work and decisions that keep a repair shop moving. Core is an operational intelligence layer designed to complement your existing business systems.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/beta">Apply for Beta <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/pricing">See pricing</Link></Button></div></div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{coreTopics.map(topic=>{const Icon=icons[topic.icon];return <Link key={topic.slug} to={"/core/"+topic.slug} className={panel+" group flex flex-col hover:border-accent/50 transition-colors"}><Icon className="h-8 w-8 text-accent mb-4" aria-hidden="true" /><h2 className="text-xl font-semibold mb-3">{topic.title}</h2><p className="text-muted-foreground flex-1 mb-5">{topic.intro}</p><span className="text-accent flex items-center gap-2 text-sm font-medium">Explore feature <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span></Link>})}</div>
      <div className={panel+" mt-10"}><h2 className="text-2xl font-bold mb-3">The people behind every repair</h2><p className="text-muted-foreground mb-5">Core also connects shop work with the professional Passport, Connect and Learning Center ecosystem.</p><Button asChild variant="outline"><Link to="/#professionals">Explore the professional ecosystem</Link></Button></div>
    </div></section></Layout>;
}
function WorkflowExample({topic}: {topic: typeof coreTopics[number]}) {
  const [selected,setSelected] = useState(0);
  const active=topic.flow[selected];
  return <div className={panel+" shadow-[var(--glow-soft)]"}>
    <p className="text-xs tracking-widest uppercase text-accent mb-2">Illustrative workflow</p>
    <h2 className="text-2xl font-bold mb-2">See how it fits together.</h2>
    <p className="text-sm text-muted-foreground mb-6">Select a step to explore a conceptual workflow. This is not a live application screen.</p>
    <div className="grid sm:grid-cols-2 gap-3 mb-6" aria-label="Workflow steps">{topic.flow.map(([label],i)=><button key={label} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)} className={"text-left p-4 rounded-lg border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent "+(selected===i?"border-accent bg-accent/10":"border-primary/20 bg-background/40 hover:border-primary/60")}><span className="text-xs text-accent block mb-1">STEP {i+1}</span><span className="font-medium">{label}</span></button>)}</div>
    <div aria-live="polite" className="border-l-2 border-accent pl-4 py-2 min-h-24"><h3 className="font-semibold text-lg mb-2">{active[0]}</h3><p className="text-muted-foreground">{active[1]}</p></div>
  </div>;
}
export default function CoreProduct() {
  const { slug }=useParams();
  const topic=coreTopics.find(item=>item.slug===slug);
  if (!topic) return <Navigate to="/core" replace />;
  const Icon=icons[topic.icon];
  return <Layout><SEO title={topic.title+" | OptiBay Core"} description={topic.intro} path={"/core/"+topic.slug} />
    <section className="py-12 sm:py-20"><div className={wrap}>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-10"><Link to="/" className="hover:text-accent">Home</Link><ChevronRight className="h-4 w-4"/><Link to="/core" className="hover:text-accent">Core</Link><ChevronRight className="h-4 w-4"/><span aria-current="page" className="text-foreground">{topic.title}</span></nav>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div><div className="inline-flex rounded-xl border border-primary/30 bg-primary/10 p-4 mb-5"><Icon className="h-9 w-9 text-accent" aria-hidden="true"/></div><p className="uppercase tracking-widest text-xs sm:text-sm text-accent mb-3">{topic.eyebrow}</p><h1 className="text-4xl sm:text-5xl font-bold mb-5 bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">{topic.headline}</h1><p className="text-lg text-muted-foreground mb-7">{topic.intro}</p><Button asChild><Link to="/beta">Apply for Beta <ArrowRight className="ml-2 h-4 w-4"/></Link></Button></div>
        <WorkflowExample key={topic.slug} topic={topic}/>
      </div>
      <div className="mt-16"><h2 className="text-3xl font-bold mb-6">What Core brings to the shop</h2><div className="grid md:grid-cols-2 gap-5">{topic.features.map(([title,desc])=><article key={title} className={panel}><CheckCircle2 className="h-6 w-6 text-accent mb-3" aria-hidden="true"/><h3 className="font-semibold text-xl mb-2">{title}</h3><p className="text-muted-foreground">{desc}</p></article>)}</div></div>
      <div className="mt-8 p-5 rounded-lg bg-primary/10 border border-primary/25"><p className="text-sm text-muted-foreground"><strong className="text-foreground">Availability and scope: </strong>{topic.note}</p></div>
      <section className="mt-16"><h2 className="text-2xl font-bold mb-5">Explore more of Core</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{coreTopics.filter(t=>t.slug!==topic.slug).map(t=><Link key={t.slug} to={"/core/"+t.slug} className="flex items-center justify-between rounded-lg border border-primary/20 bg-card/60 p-4 hover:border-accent/50">{t.title}<ArrowRight className="h-4 w-4 shrink-0 text-accent ml-2"/></Link>)}</div><Link to="/core" className="inline-block mt-6 text-accent hover:underline">← Back to Core overview</Link></section>
    </div></section></Layout>;
}
