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
  Cpu,
  ArrowRight,
  Mail,
  Globe,
  Activity,
  History,
  Lock
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
    <main ref={mainRef} className="bg-obsidian min-h-screen text-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gold/20 border border-gold flex items-center justify-center">
            <ShieldCheck className="text-gold w-5 h-5" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight uppercase">MCSDD // <span className="text-gold">Quarterly Pro</span></span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest">
          <a href="#problem" className="nav-link">Failure Signal</a>
          <a href="#solution" className="nav-link">Architecture</a>
          <a href="#telemetry" className="nav-link">Telemetry</a>
          <a href="#synthesis" className="nav-link">Synthesis</a>
          <a 
            href="https://dte-84.github.io/MCSDDQuarterly/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary py-2 text-[10px]"
          >
            Portal Uplink <ArrowRight size={12} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="hero-reveal badge mb-6">Mission Critical Compliance</div>
        <h1 className="hero-reveal text-6xl md:text-8xl max-w-5xl mb-8 leading-[1.1] font-heading font-extrabold italic">
          Automated <span className="text-gradient">Audit</span> Resilience.
        </h1>
        <p className="hero-reveal text-xl text-text-secondary max-w-2xl mb-12 font-medium">
          A high-fidelity compliance engine automating Missouri DMH reporting standards through deterministic validation and PCSP data inheritance.
        </p>
        <div className="hero-reveal flex gap-4">
          <a 
            href="https://dte-84.github.io/MCSDDQuarterly/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Launch Portal
          </a>
          <button className="px-6 py-3 rounded-md bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Technical Deep Dive</button>
        </div>
      </section>

      {/* Metrics Node */}
      <section id="telemetry" className="px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { label: 'Completion Velocity', value: '~75%', sub: 'Estimated Reduction', icon: Zap },
            { label: 'Audit Approval', value: '90%+', sub: 'Projected First-Pass', icon: FileCheck },
            { label: 'MUI Compliance', value: '100%', sub: '24-Hour Watch', icon: ShieldCheck },
            { label: 'Data Re-Entry', value: '0%', sub: 'Eliminated Overhead', icon: Cpu },
          ].map((item, i) => (
            <div key={i} className="reveal glass-card flex flex-col items-center justify-center group text-center">
              <item.icon className="text-gold mb-4 w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-heading font-extrabold mb-1 text-gold">{item.value}</div>
              <p className="text-[10px] text-gold uppercase tracking-widest font-black mb-2">{item.label}</p>
              <p className="text-[9px] text-text-secondary uppercase tracking-tighter italic">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center text-[9px] text-text-secondary uppercase tracking-widest mt-8 opacity-50 italic">
          * Metrics estimated based on alpha-testing modeling and MCSDD operational standards.
        </p>
      </section>

      {/* The Failure Signal */}
      <section id="problem" className="px-8 py-32 bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl mb-8 font-heading italic">The <span className="text-gold">Failure</span> Signal</h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Manual quarterly reporting in Marion County operated on a high-entropy protocol. Support Coordinators faced administrative bloat, spending significant cycles on redundant data transcription, resulting in a ~40% estimated audit rejection rate due to three critical deviations:
            </p>
            <div className="space-y-6">
              {[
                { title: 'Narrative Staleness', desc: 'Static documentation triggering audit flags for repetitive clinical notes.', icon: History },
                { title: 'Linguistic Friction', desc: 'Use of deficit-based terminology contradicting Person-Centered standards.', icon: AlertCircle },
                { title: 'Utilization Gaps', desc: 'Variance in service delivery exceeding ±10% without mandatory justification.', icon: Activity }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-red-500/70 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal glass-card border-l-4 border-l-red-500/50 p-12 relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-4 opacity-10"><AlertCircle size={80} /></div>
             <h3 className="text-2xl font-heading italic text-text-primary leading-relaxed">
               Establishing deterministic benchmarks to eliminate manual calculation errors and clinical narrative drift.
             </h3>
          </div>
        </div>
      </section>

      {/* The Structural Solution */}
      <section id="solution" className="px-8 py-32">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="reveal badge mb-6">Architectural Shield</div>
          <h2 className="reveal text-5xl md:text-6xl mb-8 font-heading italic">Validation <span className="text-gold">Architecture</span></h2>
          <p className="reveal text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Quarterly Pro was architected as a satellite node to the PCSP Pro ecosystem, leveraging data inheritance and a 5-point validation engine to ensure audit finality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { 
              title: 'Similarity Engine', 
              desc: 'Word-overlap algorithm flagging static narratives >85% match to prevent citations.',
              icon: Search
            },
            { 
              title: 'Tone Command', 
              desc: 'NLP layer identifying and suggesting person-centered linguistic alternatives.',
              icon: Cpu
            },
            { 
              title: 'Variance Telemetry', 
              desc: 'Real-time calculation of unit utilization with mandatory justification triggers.',
              icon: BarChart3
            },
            { 
              title: 'MUI Watchdog', 
              desc: 'Dual-timestamp logic enforcing the state-mandated 24-hour reporting window.',
              icon: ShieldCheck
            }
          ].map((f, i) => (
            <div key={i} className="reveal glass-card flex flex-col items-start hover:border-gold/50 group h-full">
              <div className="w-12 h-12 rounded bg-gold/10 border border-gold/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <f.icon className="text-gold w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Integration Node */}
      <section className="px-8 py-32 bg-surface/30 border-y border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
             <div className="reveal relative">
                <div className="absolute inset-0 bg-gold/5 blur-[100px] -z-10" />
                <div className="glass-card bg-surface p-0 border-white/10 overflow-hidden shadow-2xl">
                   <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                   </div>
                   <div className="p-8 font-mono text-xs text-text-secondary leading-relaxed overflow-x-auto">
                      <pre>{`{
  "quarterlyReport": {
    "pcspLink": "PCSP-2025-001",
    "validation": {
      "similarityScore": 0.42,
      "muiTimeliness": "VERIFIED",
      "varianceFlag": false
    },
    "utilization": [
      {
        "code": "H2015-GT",
        "unitsAuth": 480,
        "unitsUsed": 462,
        "variance": -3.75
      }
    ]
  }
}`}</pre>
                   </div>
                </div>
             </div>
             <div className="reveal">
                <h2 className="text-4xl mb-8 font-heading italic">Zero-Footprint <span className="text-gold">Integrity</span></h2>
                <div className="space-y-10">
                  {[
                    { label: 'Security Node', title: 'Volatile RAM Processing', desc: 'All computation occurs in browser memory with 4-second debounced auto-save encryption.' },
                    { label: 'Retention Policy', title: 'Data Auto-Expiry', desc: '30-minute idle timeout with mandatory data purge and 30-day automated PHI deletion.' },
                    { label: 'Synthesis Node', title: 'XML Generation Pipeline', desc: 'Audit-ready .docx synthesis generated client-side via custom OOXML injection engine.' }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h4 className="text-gold text-[10px] uppercase font-black tracking-[0.2em] mb-3 opacity-70 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-gold" /> {item.label}
                      </h4>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-text-secondary text-base leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
         </div>
      </section>

      {/* Analytical Synthesis */}
      <section id="synthesis" className="px-8 py-40">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-16 h-1 w-16 bg-gold mx-auto mb-12" />
          <h2 className="text-4xl md:text-5xl mb-12 font-heading italic leading-tight">
            "Quarterly Pro transforms static clinical data into <span className="text-gold">Living Telemetry</span>, establishing a deterministic framework for Missouri state oversight."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Lock className="text-gold w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold uppercase tracking-widest">Drew Ernst</h4>
            <p className="text-xs text-text-secondary uppercase tracking-[0.3em] font-black italic">Lead Architect | DTE Solutions</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="px-8 py-16 border-t border-white/5 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gold/20 border border-gold flex items-center justify-center">
                <ShieldCheck className="text-gold w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight uppercase">DREW <span className="text-gold">ERNST</span></span>
            </div>
            <p className="text-[10px] text-text-secondary uppercase tracking-widest opacity-50 italic">Data Integrity & Systems Engineering</p>
          </div>
          
          <div className="flex gap-12">
            {[
              { icon: Globe, label: 'Portfolio', url: 'https://dte-solutions.icu' },
              { icon: Globe, label: 'LinkedIn', url: 'https://linkedin.com/in/dte84' },
              { icon: Mail, label: 'Secure Uplink', url: 'mailto:drew.t.ernst@gmail.com' }
            ].map((link, i) => (
              <a key={i} href={link.url} className="flex flex-col items-center gap-2 text-text-secondary hover:text-gold transition-all group">
                <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-[9px] uppercase font-bold tracking-widest">{link.label}</span>
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-1">Status: Operational</p>
            <p className="text-[9px] text-text-secondary opacity-40 uppercase">© 2026 DTE Solutions LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
