import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  FileCheck, 
  AlertCircle, 
  Search, 
  Settings2,
  Cpu,
  ArrowRight,
  Mail,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-reveal', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.3
      });

      // Section Reveals
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-[#050505] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-kinetic-green/20 border border-kinetic-green flex items-center justify-center">
            <ShieldCheck className="text-[#00ff41] w-5 h-5" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight">MCSDD // <span className="text-[#00ff41]">Quarterly</span></span>
        </div>
        <div className="flex gap-8 items-center text-sm font-medium text-text-secondary">
          <a href="#overview" className="hover:text-kinetic-green transition-colors">Overview</a>
          <a href="#problem" className="hover:text-kinetic-green transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-kinetic-green transition-colors">The Solution</a>
          <a href="#impact" className="hover:text-kinetic-green transition-colors">Impact</a>
          <button className="btn-primary py-2 text-xs">View Repo <ArrowRight size={14} /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kinetic-green/5 rounded-full blur-[120px] pointer-events-none" />
        <h4 className="hero-reveal text-[#00ff41] font-heading font-semibold tracking-widest uppercase text-sm mb-6">Automated Compliance Engine</h4>
        <h1 className="hero-reveal text-6xl md:text-8xl max-w-5xl mb-8 leading-[1.1]">
          Transforming <span className="text-gradient">Oversight</span> with Data Integrity.
        </h1>
        <p className="hero-reveal text-xl text-text-secondary max-w-2xl mb-12">
          A zero-footprint architecture automating Missouri DMH reporting standards for Marion County Services.
        </p>
        <div className="hero-reveal flex gap-4">
          <a href="#solution" className="btn-primary">Explore Solution</a>
          <button className="px-6 py-3 rounded-md bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-colors">Tech Stack</button>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="impact" className="px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { label: 'Audit Rejection', before: '40%', after: '< 5%', icon: AlertCircle },
            { label: 'Processing Time', before: '45m', after: '< 10m', icon: Zap },
            { label: 'Review Cycles', before: '3-5', after: '0', icon: Cpu },
            { label: 'Compliance Rate', before: 'Low', after: '100%', icon: FileCheck },
          ].map((item, i) => (
            <div key={i} className="reveal glass-card flex flex-col items-center justify-center group">
              <item.icon className="text-[#00ff41] mb-4 w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-heading font-extrabold mb-1">
                <span className="text-text-secondary line-through text-2xl mr-2">{item.before}</span>
                <span className="text-[#00ff41]">{item.after}</span>
              </div>
              <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="px-8 py-32 bg-surface/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl mb-6">The <span className="text-[#00ff41]">Manual</span> Barrier</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Missouri's DMH conducts rigorous audits where quarterly reports are the primary demonstration of compliance. The manual process was plagued by "Copy-Paste Syndrome", deficit-based language, and service variance blind spots.
            </p>
            <ul className="space-y-4">
              {[
                'Static documentation triggering audit flags',
                'Deficit-based terminology (Refused, Failed)',
                'Utilization exceeding +/- 10% without justification',
                'MUI reporting delays beyond 24-hour mandate'
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-center text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal glass-card aspect-video flex items-center justify-center overflow-hidden">
             <div className="text-text-secondary text-sm italic">"I was spending 45+ minutes just recalculating service units and trying to remember what we reported last quarter."</div>
          </div>
        </div>
      </section>

      {/* Solution Mockup Placeholder - Will be updated with generated image */}
      <section id="solution" className="px-8 py-32">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="reveal text-4xl mb-6 italic">Engineering <span className="text-[#00ff41]">Clarity</span></h2>
          <p className="reveal text-text-secondary max-w-2xl mx-auto">
            The system extends the PCSP Assistant architecture with an intelligent validation layer that operates entirely client-side.
          </p>
        </div>
        <div className="reveal max-w-6xl mx-auto rounded-xl border border-white/5 overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10" />
          <img src="/assets/compliance_dashboard_mockup.png" alt="Dashboard Mockup" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" />
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="px-8 py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Narrative Similarity', 
                desc: 'Word-overlap algorithm flagging static documentation >85% match.',
                icon: Search
              },
              { 
                title: 'Compliance Language', 
                desc: 'Real-time NLP to detect and suggest strength-based alternatives.',
                icon: Cpu
              },
              { 
                title: 'Variance Logic', 
                desc: 'Automatic threshold monitoring (+/- 10%) to prevent audit citations.',
                icon: BarChart3
              }
            ].map((f, i) => (
              <div key={i} className="reveal glass-card group">
                <f.icon className="text-[#00ff41] mb-6 w-10 h-10" />
                <h3 className="text-xl mb-3">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="px-8 py-32">
         <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="reveal glass-card bg-[#0a0a0a]">
                <img src="/assets/compliance_logic_diagram.png" alt="Logic Diagram" className="rounded-lg border border-white/5" />
             </div>
             <div className="reveal">
                <h2 className="text-4xl mb-6">Zero-Footprint <span className="text-[#00ff41]">Architecture</span></h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#00ff41] text-xs uppercase tracking-widest mb-2">Security Model</h4>
                    <p className="text-text-secondary text-sm">computation in volatile browser RAM. 4-second debounced auto-save with encryption.</p>
                  </div>
                  <div>
                    <h4 className="text-[#00ff41] text-xs uppercase tracking-widest mb-2">Data Persistence</h4>
                    <p className="text-text-secondary text-sm">30-minute idle timeout with data purge. 30-day PHI auto-expiry.</p>
                  </div>
                  <div>
                    <h4 className="text-[#00ff41] text-xs uppercase tracking-widest mb-2">Export Pipeline</h4>
                    <p className="text-text-secondary text-sm">Audit-ready Word documents generated via custom XML engine (JSZip).</p>
                  </div>
                </div>
             </div>
          </div>
         </div>
      </section>

      {/* Footer / Contact */}
      <footer className="px-8 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-xl tracking-tight">DREW <span className="text-[#00ff41]">ERNST</span></span>
          </div>
          <div className="flex gap-6">
            <a href="https://dte-solutions.icu" className="text-text-secondary hover:text-kinetic-green transition-colors"><Globe size={20} /></a>
            <a href="https://linkedin.com/in/dte84" className="text-text-secondary hover:text-kinetic-green transition-colors"><Globe size={20} /></a>
            <a href="mailto:drew.t.ernst@gmail.com" className="text-text-secondary hover:text-kinetic-green transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-text-secondary">© 2026 DTE Solutions LLC. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default App;
