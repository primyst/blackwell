"use client"

import { useState, useRef } from "react";
import { Scale, Shield, Globe, BookOpen, ChevronRight, Menu, X, Phone, Mail, MapPin, Star, ArrowUpRight } from "lucide-react";

const navLinks = ["Practice Areas", "About", "Attorneys", "Testimonials", "Contact"];

const practices = [
  { icon: Scale, title: "Litigation & Dispute Resolution", desc: "Aggressive courtroom representation with a record of landmark victories across civil and commercial disputes." },
  { icon: Shield, title: "Corporate & Commercial Law", desc: "End-to-end legal support for businesses — from incorporation and contracts to mergers and acquisitions." },
  { icon: Globe, title: "International Trade & Arbitration", desc: "Cross-border legal counsel for corporations navigating complex international regulatory environments." },
  { icon: BookOpen, title: "Real Estate & Property Law", desc: "Comprehensive advisory on property acquisition, title verification, leases, and development agreements." },
];

const attorneys = [
  { name: "Adrienne Blackwell", role: "Senior Partner", tag: "20+ yrs", img: "https://i.pravatar.cc/400?img=47" },
  { name: "Marcus O. Hale", role: "Managing Partner", tag: "Litigation", img: "https://i.pravatar.cc/400?img=11" },
  { name: "Sophia Renner", role: "Associate Partner", tag: "Corporate", img: "https://i.pravatar.cc/400?img=56" },
];

const testimonials = [
  { quote: "Blackwell Hale handled our acquisition with precision. Their counsel saved us months of negotiation and significant capital.", name: "CEO, Meridian Holdings" },
  { quote: "The most thorough legal team we have worked with. They anticipated every obstacle before it became a problem.", name: "Director, Vantage Capital Group" },
  { quote: "Exceptional. From contract drafting to dispute resolution — they are simply the best in the business.", name: "Founder, Arclight Ventures" },
];

const stats = [
  { value: "98%", label: "Case Success Rate" },
  { value: "340+", label: "Clients Represented" },
  { value: "24", label: "Years in Practice" },
  { value: "12", label: "Countries Served" },
];

export default function LawFirm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const sectionRefs = {
    "Practice Areas": useRef(null),
    "About": useRef(null),
    "Attorneys": useRef(null),
    "Testimonials": useRef(null),
    "Contact": useRef(null),
  };

  const scrollTo = (section: keyof typeof sectionRefs) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
};

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        .sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* Nav */}
      <nav className="sans fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d4c9b0]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="serif text-xl font-semibold tracking-wide text-[#1a1a1a]">BLACKWELL HALE</p>
            <p className="text-[9px] tracking-[0.2em] text-[#8a7d6b] font-medium uppercase">Attorneys & Counselors at Law</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-[11px] tracking-widest text-[#5a4f3f] hover:text-[#1a1a1a] transition-colors uppercase font-medium cursor-pointer bg-transparent border-none">
                {l}
              </button>
            ))}
            <button onClick={() => scrollTo("Contact")} className="bg-[#1a1a1a] text-[#f5f0e8] text-[11px] tracking-widest uppercase font-medium px-5 py-2.5 hover:bg-[#8a6a3a] transition-colors duration-200 cursor-pointer">
              Free Consultation
            </button>
          </div>
          <button className="md:hidden text-[#1a1a1a]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#f5f0e8] border-t border-[#d4c9b0] px-6 py-5 flex flex-col gap-5">
            {navLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-[11px] tracking-widest text-[#5a4f3f] uppercase font-medium text-left bg-transparent border-none cursor-pointer">
                {l}
              </button>
            ))}
            <button onClick={() => scrollTo("Contact")} className="bg-[#1a1a1a] text-[#f5f0e8] text-[11px] tracking-widest uppercase font-medium px-5 py-3 w-full cursor-pointer">
              Free Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#8a6a3a]" />
              <p className="sans text-[10px] tracking-[0.3em] text-[#8a6a3a] uppercase font-medium">
                Established 2001 · International Legal Counsel
              </p>
            </div>
            <h1 className="serif text-7xl font-normal leading-[1.02] text-[#1a1a1a] mb-8">
              Justice is not<br />
              <span className="italic text-[#8a6a3a]">left to chance.</span>
            </h1>
            <p className="sans text-[#5a4f3f] text-sm leading-relaxed max-w-md mb-10 font-light">
              Blackwell Hale is a premier international law firm delivering strategic legal counsel to corporations, governments, and high-net-worth individuals across four continents.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("Contact")} className="sans bg-[#1a1a1a] text-[#f5f0e8] text-[11px] tracking-widest uppercase font-medium px-8 py-4 hover:bg-[#8a6a3a] transition-colors duration-200 flex items-center gap-2 cursor-pointer">
                Schedule Consultation <ArrowUpRight size={14} />
              </button>
              <button onClick={() => scrollTo("Practice Areas")} className="sans border border-[#1a1a1a] text-[#1a1a1a] text-[11px] tracking-widest uppercase font-medium px-8 py-4 hover:bg-[#1a1a1a] hover:text-[#f5f0e8] transition-colors duration-200 cursor-pointer">
                Our Practice Areas
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-[#1a1a1a] p-10 relative">
              <div className="absolute top-4 right-4 w-16 h-16 border border-[#8a6a3a]/30" />
              <p className="serif text-[#8a6a3a] text-6xl font-normal italic mb-6">"</p>
              <p className="serif text-[#f5f0e8] text-xl font-normal leading-relaxed mb-8">
                We don't just represent clients. We protect what they've built.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#2a2a2a]">
                <img src="https://i.pravatar.cc/80?img=47" alt="Adrienne Blackwell" className="w-10 h-10 object-cover" />
                <div>
                  <p className="sans text-[#f5f0e8] text-xs font-medium">Adrienne Blackwell</p>
                  <p className="sans text-[#5a5a5a] text-[10px] tracking-widest uppercase">Founding Partner</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#d4c9b0] -z-10" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={sectionRefs["About"]} className="sans bg-[#1a1a1a] px-6 py-14 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="serif text-5xl font-semibold text-[#c9a96e] mb-2">{value}</p>
              <p className="text-[10px] tracking-widest text-[#8a7d6b] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section ref={sectionRefs["Practice Areas"]} className="px-6 py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end gap-8 mb-14">
            <div>
              <p className="sans text-[10px] tracking-[0.3em] text-[#8a6a3a] uppercase font-medium mb-3">What We Do</p>
              <h2 className="serif text-6xl font-normal text-[#1a1a1a] leading-tight">
                Practice<br /><span className="italic">Areas</span>
              </h2>
            </div>
            <div className="h-px bg-[#d4c9b0] flex-1 mb-4 hidden md:block" />
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#d4c9b0]">
            {practices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-[#f5f0e8] p-8 hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-8">
                  <div className="border border-[#d4c9b0] group-hover:border-[#8a6a3a] p-3 transition-colors duration-300">
                    <Icon size={18} className="text-[#8a6a3a]" strokeWidth={1.5} />
                  </div>
                  <ChevronRight size={16} className="text-[#d4c9b0] group-hover:text-[#8a6a3a] transition-colors duration-300 mt-1" />
                </div>
                <h3 className="serif text-2xl font-semibold text-[#1a1a1a] group-hover:text-[#f5f0e8] mb-3 transition-colors duration-300 leading-tight">{title}</h3>
                <p className="sans text-[#5a4f3f] group-hover:text-[#8a7d6b] text-xs leading-relaxed transition-colors duration-300 font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section ref={sectionRefs["Attorneys"]} className="sans bg-[#ede8dc] px-6 py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end gap-8 mb-14">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#8a6a3a] uppercase font-medium mb-3">The Team</p>
              <h2 className="serif text-6xl font-normal text-[#1a1a1a]">Our <span className="italic">Attorneys</span></h2>
            </div>
            <div className="h-px bg-[#d4c9b0] flex-1 mb-4 hidden md:block" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {attorneys.map(({ name, role, tag, img }) => (
              <div key={name} className="group cursor-pointer">
                <div className="aspect-[3/4] mb-5 relative overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute bottom-5 left-5">
                    <span className="sans text-[9px] tracking-widest bg-[#8a6a3a] text-white px-2.5 py-1 uppercase">{tag}</span>
                  </div>
                </div>
                <h3 className="serif text-2xl font-semibold text-[#1a1a1a] mb-1">{name}</h3>
                <p className="text-[10px] tracking-widest text-[#8a7d6b] uppercase">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={sectionRefs["Testimonials"]} className="px-6 py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end gap-8 mb-14">
            <div>
              <p className="sans text-[10px] tracking-[0.3em] text-[#8a6a3a] uppercase font-medium mb-3">Client Words</p>
              <h2 className="serif text-6xl font-normal text-[#1a1a1a]">What They <span className="italic">Say</span></h2>
            </div>
            <div className="h-px bg-[#d4c9b0] flex-1 mb-4 hidden md:block" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#8a6a3a] fill-[#8a6a3a]" />)}
              </div>
              <p className="serif text-3xl font-normal italic text-[#1a1a1a] leading-relaxed mb-8">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <p className="sans text-[11px] tracking-widest text-[#8a7d6b] uppercase mb-10">
                — {testimonials[activeTestimonial].name}
              </p>
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)}
                    className={`h-0.5 transition-all duration-300 cursor-pointer ${i === activeTestimonial ? "w-12 bg-[#8a6a3a]" : "w-6 bg-[#d4c9b0] hover:bg-[#b8a898]"}`}
                  />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`text-left p-5 border transition-all duration-200 cursor-pointer ${i === activeTestimonial ? "border-[#8a6a3a] bg-[#1a1a1a]" : "border-[#d4c9b0] bg-transparent hover:border-[#b8a898]"}`}
                >
                  <p className={`sans text-[10px] tracking-widest uppercase font-medium ${i === activeTestimonial ? "text-[#8a6a3a]" : "text-[#8a7d6b]"}`}>{t.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={sectionRefs["Contact"]} className="sans bg-[#1a1a1a] px-6 py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#8a6a3a] uppercase font-medium mb-4">Get in Touch</p>
            <h2 className="serif text-6xl font-normal text-[#f5f0e8] leading-tight mb-6">
              Your case<br /><span className="italic text-[#c9a96e]">begins here.</span>
            </h2>
            <p className="text-[#8a7d6b] text-xs leading-relaxed font-light mb-10">
              Schedule a confidential consultation with one of our senior attorneys. We respond within 24 hours.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, text: "+1 (212) 555 0194" },
                { icon: Mail, text: "counsel@blackwellhale.com" },
                { icon: MapPin, text: "One Liberty Plaza, New York" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 pb-5 border-b border-[#2a2a2a] last:border-0">
                  <div className="w-8 h-8 border border-[#3a3a3a] flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-[#8a6a3a]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#8a7d6b] text-xs">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <input className="bg-[#242424] border border-[#333] text-[#f5f0e8] text-xs px-4 py-4 placeholder-[#4a4a4a] focus:outline-none focus:border-[#8a6a3a] transition-colors" placeholder="Full Name" />
            <input className="bg-[#242424] border border-[#333] text-[#f5f0e8] text-xs px-4 py-4 placeholder-[#4a4a4a] focus:outline-none focus:border-[#8a6a3a] transition-colors" placeholder="Email Address" />
            <input className="bg-[#242424] border border-[#333] text-[#f5f0e8] text-xs px-4 py-4 placeholder-[#4a4a4a] focus:outline-none focus:border-[#8a6a3a] transition-colors" placeholder="Nature of Matter" />
            <textarea rows={4} className="bg-[#242424] border border-[#333] text-[#f5f0e8] text-xs px-4 py-4 placeholder-[#4a4a4a] focus:outline-none focus:border-[#8a6a3a] transition-colors resize-none" placeholder="Brief description of your case..." />
            <button className="bg-[#8a6a3a] text-[#f5f0e8] text-[11px] tracking-widest uppercase font-medium py-4 hover:bg-[#c9a96e] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer">
              Request Consultation <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sans bg-[#111] px-6 py-6 border-t border-[#222]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="serif text-[#3a3430] text-sm">BLACKWELL HALE · Attorneys & Counselors at Law</p>
          <p className="text-[10px] text-[#333] tracking-widest uppercase">
            Demo by <span className="text-[#8a6a3a]">Primyst</span> · primyst solutions
          </p>
        </div>
      </footer>
    </div>
  );
      }
