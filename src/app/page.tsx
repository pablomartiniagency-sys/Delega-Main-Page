import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EmailSimulator } from '@/components/simulators/EmailSimulator';
import { WhatsAppSimulator } from '@/components/simulators/WhatsAppSimulator';
import { CRMSimulator } from '@/components/simulators/CRMSimulator';
import { TicketSimulator } from '@/components/simulators/TicketSimulator';
import { LucideInbox, LucideMessageCircle, LucideDatabase, LucideTicket } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10 bg-[size:30px_30px]" />

        <div className="inline-flex items-center rounded-sm border border-border/40 bg-background/50 backdrop-blur px-3 py-1 text-sm font-medium mb-8 text-muted-foreground shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Agent Router V2
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-foreground">
          Resolución automática.<br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600"> Sin latencia humana.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
          Delega indexa tu documentación, atiende tus correos y responde WhatsApps corporativos. Operativa B2B escalable, respetando la ventana de Meta y RGPD.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24">
          <Button size="lg" className="bg-foreground text-background font-medium hover:bg-neutral-200 h-12 px-8">
            Ver simuladores en vivo
          </Button>
          <Button size="lg" variant="outline" className="h-12 border-border/50 text-foreground pointer-events-auto shadow-sm">
            Leer la documentación
          </Button>
        </div>
      </section>

      {/* Product Modules Section */}
      <section className="py-24 px-6 bg-neutral-950 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Módulos de Arquitectura Core</h2>
            <p className="text-muted-foreground max-w-2xl">Todo el ciclo de vida del cliente gestionado sin fisuras: desde el triaje del buzón hasta la actualización atómica del CRM de soporte.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

            {/* Email Triage */}
            <div id="email" className="flex flex-col border border-border/60 rounded-2xl bg-card/20 overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-border/30 bg-card/40 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <LucideInbox className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-semibold">Triage Inbox Inteligente</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Analiza la urgencia y prepara el borrador en base a la KB corporativa.</p>
                </div>
              </div>
              <div className="bg-neutral-900/50 p-6 flex-1 min-h-[400px]">
                <EmailSimulator />
              </div>
            </div>

            {/* WA Agent */}
            <div id="whatsapp" className="flex flex-col border border-border/60 rounded-2xl bg-card/20 overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-border/30 bg-card/40 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <LucideMessageCircle className="h-5 w-5 text-emerald-400" />
                    <h3 className="text-xl font-semibold">Hub WhatsApp & Handoff</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Soporte síncrono y derivación a equipo humano al llegar a límites de IA.</p>
                </div>
              </div>
              <div className="bg-neutral-900/50 p-6 flex-1 min-h-[400px]">
                <WhatsAppSimulator />
              </div>
            </div>

            {/* CRM Lite */}
            <div id="crm" className="flex flex-col border border-border/60 rounded-2xl bg-card/20 overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-border/30 bg-card/40 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <LucideDatabase className="h-5 w-5 text-orange-400" />
                    <h3 className="text-xl font-semibold">CRM Relacional Atómico</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">El IA extrae metadatos y enriquece o modifica la cuenta (API-first).</p>
                </div>
              </div>
              <div className="bg-neutral-900/50 p-6 flex-1 min-h-[400px]">
                <CRMSimulator />
              </div>
            </div>

            {/* TICKETS */}
            <div id="tickets" className="flex flex-col border border-border/60 rounded-2xl bg-card/20 overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-border/30 bg-card/40 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <LucideTicket className="h-5 w-5 text-purple-400" />
                    <h3 className="text-xl font-semibold">Resolución Incidencias / SLA</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Tickets auto-asignados por Agent Router midiendo tiempos de respuesta.</p>
                </div>
              </div>
              <div className="bg-neutral-900/50 p-6 flex-1 min-h-[400px]">
                <TicketSimulator />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works Diagram */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Arquitectura Human-in-the-Loop</h2>
          <div className="relative border border-border rounded-xl p-8 bg-card flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xl">
            <div className="px-4 py-3 bg-neutral-900 border border-border rounded-lg text-sm text-muted-foreground">
              Inputs (Mail/WA)
            </div>
            <div className="h-8 w-px md:w-8 md:h-px bg-border"></div>
            <div className="px-4 py-3 bg-blue-950/20 border border-blue-900/50 rounded-lg text-sm text-blue-200 font-medium whitespace-nowrap">
              Agent Router (RAG)
            </div>
            <div className="h-8 w-px md:w-8 md:h-px bg-border"></div>
            <div className="px-4 py-3 bg-purple-950/20 border border-purple-900/50 rounded-lg text-sm text-purple-200 font-medium whitespace-nowrap">
              Tools / Tools API
            </div>
            <div className="h-8 w-px md:w-8 md:h-px bg-border"></div>
            <div className="px-4 py-3 bg-emerald-950/20 border border-emerald-900/50 rounded-lg text-sm text-emerald-200 font-medium whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              Aprobación HIL (Humano)
            </div>
          </div>
          <p className="mt-8 text-muted-foreground">El agente clasifica, usa memoria semántica y plantea borradores u omisiones de alerta hasta que tu equipo aprueba acciones destructivas.</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 border-t border-border/20 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-6">Escala tu operativa sin escalar la nómina</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">Implementación white-label o SaaS. Privacidad completa de datos modelo.</p>
        <Link href="/contacto">
          <Button size="lg" className="bg-white text-black font-semibold h-12 px-10">Agendar Consultoría Técnica</Button>
        </Link>
      </section>
    </div>
  );
}
