import Link from 'next/link';

export default function Docs() {
    const docs = [
        { title: 'Getting Started (Conceptos Core)', tag: 'General' },
        { title: 'Conectar Bandejas (Gmail/Outlook)', tag: 'Email' },
        { title: 'Configuración WhatsApp API (360dialog)', tag: 'WA' },
        { title: 'Estructura Vector DB (RAG) interna', tag: 'Data' },
        { title: 'Reglas de Human-in-the-Loop', tag: 'Agent' },
    ];

    return (
        <div className="container max-w-4xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-64 flex-shrink-0">
                <h3 className="font-bold mb-4">Documentación</h3>
                <ul className="space-y-3">
                    {docs.map((d, i) => (
                        <li key={i}><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{d.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="flex-1">
                <h1 className="text-4xl font-bold tracking-tight mb-8">Base de Conocimiento Técnica</h1>
                <div className="border border-border rounded-xl bg-card p-10 h-96 flex flex-col justify-center items-center text-center">
                    <p className="text-muted-foreground text-sm mb-4">Seleccione un tema de la izquierda para explorar la estructura técnica de Delega.</p>
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Docs Rendering with MDX (Preview)</div>
                </div>
            </div>
        </div>
    );
}
