export default function Seguridad() {
    return (
        <div className="container max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Seguridad y Modelo de Datos</h1>
            <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-12">Diseño y desarrollo enfocado en la minimización de datos y el cumplimiento RGPD/GDPR desde el primer día.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">Alojamiento en UE</h3>
                        <p className="text-muted-foreground text-sm">Los clústeres y las bases de datos vectoriales operan en datacenters regulados dentro del territorio europeo para total cumplimiento.</p>
                    </div>
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">Aprobación Humana</h3>
                        <p className="text-muted-foreground text-sm">Acciones de alto impacto (pagos, trasvase B2B crítico) requieren aprobación explícita de un agente humano (HIL).</p>
                    </div>
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">Reglas de WhatsApp (24h)</h3>
                        <p className="text-muted-foreground text-sm">Respetamos la ventana de servicio al cliente de Meta. Plantillas preaprobadas para reapertura de sesiones inyecciones HSM.</p>
                    </div>
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">Roles y Permisos (RBAC)</h3>
                        <p className="text-muted-foreground text-sm">Accesos granulares. Tus empleados ven solo lo necesario para resolver sus incidencias. Logs inmutables de auditoría incorporados.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
