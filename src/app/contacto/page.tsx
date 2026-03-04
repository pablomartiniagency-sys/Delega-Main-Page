import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contacto() {
    return (
        <div className="container max-w-xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Inicia tu transición</h1>
            <p className="text-center text-muted-foreground mb-12">Rellena el formulario y nuestro equipo técnico evaluará la viabilidad de implementar Delega en tu infraestructura.</p>

            <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Correo Profesional</Label>
                    <Input id="email" type="email" placeholder="ejemplo@tuempresa.com" className="bg-background/50 border-border h-12" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="volumen">Volumen de Incidencias/Mes (Aprox)</Label>
                    <Input id="volumen" type="text" placeholder="Ej. 1000 tickets" className="bg-background/50 border-border h-12" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="stack">Stack Tecnológico Actual</Label>
                    <Textarea id="stack" placeholder="Gmail, Shopify, HubSpot..." className="bg-background/50 border-border min-h-32" />
                </div>
                <Button className="w-full h-12 text-sm font-semibold rounded-lg bg-foreground text-background" type="button">Agendar Llamada Técnica</Button>
            </form>
        </div>
    );
}
