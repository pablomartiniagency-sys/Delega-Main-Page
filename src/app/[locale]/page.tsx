'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { EmailSimulator } from '@/components/simulators/EmailSimulator';
import { WhatsAppSimulator } from '@/components/simulators/WhatsAppSimulator';
import { CRMSimulator } from '@/components/simulators/CRMSimulator';
import { TicketSimulator } from '@/components/simulators/TicketSimulator';
import { LucideInbox, LucideMessageCircle, LucideDatabase, LucideTicket } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const locale = useLocale();
  const tHero = useTranslations('Hero');
  const tModules = useTranslations('Modules');
  const tArch = useTranslations('Architecture');
  const tFooterCTA = useTranslations('FooterCTA');

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const modulesSectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const archSectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Animations (Staggered Reveal & Parallax)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-badge', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, delay: 0.2 }
    );

    // Split text animation for Title (poor man's split text without Club GSAP plugin)
    const titleLines = titleRef.current?.children;
    if (titleLines) {
        tl.fromTo(titleLines,
            { y: 50, opacity: 0, rotationX: -20 },
            { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.15, ease: 'power4.out', transformOrigin: "0% 50% -50" },
            "-=0.4"
        );
    }

    tl.fromTo(subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
    );

    tl.fromTo(ctaRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' },
        "-=0.6"
    );

    // Hero Parallax on Scroll
    gsap.to(heroRef.current, {
        yPercent: 30,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 2. Bento Grid Modules Scroll Animation
    gsap.fromTo('.modules-header',
        { y: 50, opacity: 0 },
        { 
            y: 0, opacity: 1, duration: 1, 
            scrollTrigger: {
                trigger: modulesSectionRef.current,
                start: "top 80%",
            }
        }
    );

    gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        { 
            y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: {
                trigger: modulesSectionRef.current,
                start: "top 60%",
            }
        }
    );

    // 3. Architecture Diagram Lines Animation
    const diagramTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: archSectionRef.current,
            start: "top 70%",
        }
    });

    diagramTimeline.fromTo('.arch-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
                   .fromTo('.arch-box', { scale: 0.8, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.2")
                   .fromTo('.arch-line', { width: 0, opacity: 0 }, { width: "100%", opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.inOut" }, "-=0.8");

    // 4. Footer CTA
    gsap.fromTo('.footer-content',
        { y: 50, opacity: 0, scale: 0.9 },
        { 
            y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out',
            scrollTrigger: {
                trigger: '.footer-section',
                start: "top 85%",
            }
        }
    );

  }, { scope: containerRef });

  // Spotlight Hover Effect for Bento Cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
        {/* Cinematic AI Background */}
        <div className="absolute inset-0 -z-20">
            <Image src="/hero_bg.png" alt="AI Hero Background" fill className="object-cover opacity-60 mix-blend-screen" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none" />
        </div>
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10 bg-[size:30px_30px]" />
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-orange-500/10 rounded-full animate-pulse blur-3xl mix-blend-screen" />
        </div>

        <div className="flex flex-col items-center max-w-5xl relative z-10">
            <div className="hero-badge inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium mb-10 text-orange-100 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <span className="flex h-2 w-2 rounded-full bg-orange-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
                {tHero('badge')}
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 pb-4 text-foreground drop-shadow-sm leading-tight [perspective:1000px]">
                <div className="inline-block">{tHero('title1')}</div><br className="hidden md:inline" />
                <div className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 drop-shadow-lg pb-4"> {tHero('title2')}</div>
            </h1>

            <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-14 font-light tracking-wide">
                {tHero('subtitle')}
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 mb-24 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto relative group bg-white text-black font-semibold h-14 px-10 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 overflow-hidden text-base">
                    <span className="relative z-10">{tHero('primaryCTA')}</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-full border-white/20 text-foreground bg-white/5 backdrop-blur-lg shadow-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-base">
                    {tHero('secondaryCTA')}
                </Button>
            </div>
        </div>
      </section>

      {/* Product Modules Section (Bento Grid) */}
      <section ref={modulesSectionRef} className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Glow effect for secion */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="modules-header mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 drop-shadow-sm text-white">{tModules('title')}</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">{tModules('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Triage */}
            <div ref={(el) => { cardsRef.current[0] = el; }} className="spotlight-card group flex flex-col rounded-3xl bg-zinc-900/40 backdrop-blur-xl overflow-hidden h-[400px] lg:col-span-2 relative border border-white/5">
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(249,115,22,0.15), transparent 40%)' }}/>
              <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center shrink-0 z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-orange-500/10 rounded-xl border border-orange-500/20">
                        <LucideInbox className="h-6 w-6 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{tModules('email.title')}</h3>
                  </div>
                  <p className="text-base text-zinc-400">{tModules('email.desc')}</p>
                </div>
              </div>
              <div className="bg-black flex-1 relative z-10 w-full overflow-hidden rounded-b-3xl">
                <Image src="/workflows/email.png" alt="Email Workflow" fill className="object-cover object-left-top opacity-80 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
              </div>
            </div>

            {/* WA Agent */}
            <div ref={(el) => { cardsRef.current[1] = el; }} className="spotlight-card group flex flex-col rounded-3xl bg-zinc-900/40 backdrop-blur-xl overflow-hidden h-[400px] relative border border-white/5">
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(251,146,60,0.15), transparent 40%)' }}/>
              <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center shrink-0 z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-orange-400/10 rounded-xl border border-orange-400/20">
                        <LucideMessageCircle className="h-6 w-6 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{tModules('whatsapp.title')}</h3>
                  </div>
                  <p className="text-sm text-zinc-400">{tModules('whatsapp.desc')}</p>
                </div>
              </div>
              <div className="bg-black flex-1 relative z-10 w-full overflow-hidden rounded-b-3xl">
                <Image src="/workflows/wa.png" alt="WhatsApp Workflow" fill className="object-cover object-left-top opacity-80 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
              </div>
            </div>

            {/* CRM Lite */}
            <div ref={(el) => { cardsRef.current[2] = el; }} className="spotlight-card group flex flex-col rounded-3xl bg-zinc-900/40 backdrop-blur-xl overflow-hidden h-[400px] relative border border-white/5">
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(249,115,22,0.15), transparent 40%)' }}/>
              <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center shrink-0 z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-orange-500/10 rounded-xl border border-orange-500/20">
                        <LucideDatabase className="h-6 w-6 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{tModules('crm.title')}</h3>
                  </div>
                  <p className="text-sm text-zinc-400">{tModules('crm.desc')}</p>
                </div>
              </div>
              <div className="bg-black flex-1 relative z-10 w-full overflow-hidden rounded-b-3xl">
                <Image src="/workflows/crm.png" alt="CRM Workflow" fill className="object-cover object-left-top opacity-80 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
              </div>
            </div>

            {/* TICKETS */}
            <div ref={(el) => { cardsRef.current[3] = el; }} className="spotlight-card group flex flex-col rounded-3xl bg-zinc-900/40 backdrop-blur-xl overflow-hidden h-[400px] lg:col-span-2 relative border border-white/5">
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(248,113,113,0.15), transparent 40%)' }}/>
              <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center shrink-0 z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-red-400/10 rounded-xl border border-red-400/20">
                         <LucideTicket className="h-6 w-6 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{tModules('tickets.title')}</h3>
                  </div>
                  <p className="text-base text-zinc-400">{tModules('tickets.desc')}</p>
                </div>
              </div>
              <div className="bg-black flex-1 relative z-10 w-full overflow-hidden rounded-b-3xl">
                <Image src="/workflows/tickets.png" alt="Tickets Workflow" fill className="object-cover object-left-top opacity-80 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works Diagram */}
      <section ref={archSectionRef} className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Cinematic AI Architecture Background */}
        <div className="absolute inset-0 -z-20">
            <Image src="/arch_diagram.png" alt="AI Architecture" fill className="object-cover opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="arch-header text-4xl font-bold tracking-tight mb-16 text-white">{tArch('title')}</h2>
          
          <div ref={diagramRef} className="relative border border-white/5 rounded-3xl p-10 bg-black/40 backdrop-blur-xl flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl">
            {/* Connection Line Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 pointer-events-none rounded-3xl" />
            
            <div className="arch-box relative z-10 px-6 py-5 bg-neutral-900 border border-white/10 rounded-2xl text-[15px] font-medium text-zinc-300 shadow-xl w-full md:w-auto">
              {tArch('inputs')}
            </div>
            
            <div className="hidden md:block arch-line h-[2px] bg-gradient-to-r from-zinc-800 via-orange-500/50 to-zinc-800 flex-1 mx-2 relative overflow-hidden rounded-full">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-[shimmer_2s_infinite]" />
            </div>

            <div className="arch-box relative z-10 px-6 py-5 bg-orange-950/30 border border-orange-500/30 rounded-2xl text-[15px] text-orange-200 font-semibold shadow-[0_0_30px_rgba(249,115,22,0.1)] w-full md:w-auto">
              {tArch('router')}
            </div>
            
            <div className="hidden md:block arch-line h-[2px] bg-gradient-to-r from-zinc-800 via-red-500/50 to-zinc-800 flex-1 mx-2 relative overflow-hidden rounded-full">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-[shimmer_2s_infinite_0.5s]" />
            </div>

            <div className="arch-box relative z-10 px-6 py-5 bg-red-950/30 border border-red-500/30 rounded-2xl text-[15px] text-red-200 font-semibold shadow-[0_0_30px_rgba(248,113,113,0.1)] w-full md:w-auto">
              {tArch('tools')}
            </div>
            
            <div className="hidden md:block arch-line h-[2px] bg-gradient-to-r from-zinc-800 via-rose-500/50 to-zinc-800 flex-1 mx-2 relative overflow-hidden rounded-full">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-[shimmer_2s_infinite_1s]" />
            </div>

            <div className="arch-box relative z-10 px-6 py-5 bg-rose-950/30 border border-rose-500/30 rounded-2xl text-[15px] text-rose-200 font-semibold shadow-[0_0_30px_rgba(244,63,94,0.1)] w-full md:w-auto border-dashed">
              {tArch('human')}
            </div>
          </div>
          <p className="arch-header mt-12 text-xl font-light text-zinc-400 max-w-3xl mx-auto">{tArch('desc')}</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-section py-32 px-6 border-t border-white/5 bg-black text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-orange-500/5 rounded-[100%] blur-3xl pointer-events-none -z-10" />

        <div className="footer-content relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white">
            {tFooterCTA('title')}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12">
            {tFooterCTA('subtitle')}
            </p>
            <Link href={`/${locale}/contacto` as any}>
                <Button size="lg" className="relative group bg-white text-black font-semibold h-16 px-12 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] transition-all hover:scale-105 active:scale-95 overflow-hidden text-lg">
                <span className="relative z-10">{tFooterCTA('button')}</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
