import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t py-12 bg-background">
            <div className="container max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <span className="font-bold tracking-tight">Delega.</span>
                    <p className="mt-4 text-sm text-muted-foreground mr-4">La plataforma técnica de agentes IA diseñada para escalar operativas B2B sin comprometer la seguridad o la precisión de los datos.</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">Producto</h4>
                    <Link href="/producto#email" className="text-sm text-muted-foreground hover:text-foreground">Email Agent</Link>
                    <Link href="/producto#whatsapp" className="text-sm text-muted-foreground hover:text-foreground">WhatsApp Hub</Link>
                    <Link href="/producto#crm" className="text-sm text-muted-foreground hover:text-foreground">CRM Lite</Link>
                    <Link href="/seguridad" className="text-sm text-muted-foreground hover:text-foreground">Seguridad</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">Recursos</h4>
                    <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentación</Link>
                    <Link href="/casos-de-uso" className="text-sm text-muted-foreground hover:text-foreground">Casos de Estudio</Link>
                    <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">Empresa</h4>
                    <Link href="/nosotros" className="text-sm text-muted-foreground hover:text-foreground">Sobre Delega</Link>
                    <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">Privacidad</Link>
                    <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">Términos</Link>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-6 mt-12 pt-8 border-t text-sm text-muted-foreground">
                © {new Date().getFullYear()} Delega Tech. Todos los derechos reservados.
            </div>
        </footer>
    );
}
