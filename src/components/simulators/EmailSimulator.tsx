"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideCheckCircle2, LucideSparkles, LucideMail, LucideReply, LucideCornerDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mailData = {
    subject: "Problema urgente con integración Shopify",
    sender: "cliente@ecommerce.xyz",
    body: "Hola equipo, el webhook de pagos lleva 2 horas fallando y tenemos los pedidos bloqueados. ¿Pueden revisarlo urgente? Gracias.",
    time: "10:24 AM"
};

export function EmailSimulator() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (step === 0) timeout = setTimeout(() => setStep(1), 1500); // Triage
        if (step === 1) timeout = setTimeout(() => setStep(2), 2500); // Draft
        return () => clearTimeout(timeout);
    }, [step]);

    return (
        <div className="w-full max-w-md mx-auto h-full flex flex-col font-sans text-sm">
            <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-muted-foreground">Estado del buzón</span>
                <Button variant="outline" size="sm" onClick={() => setStep(0)} className="h-7 text-xs">Reset</Button>
            </div>

            <div className="border border-border/50 bg-background rounded-lg shadow-sm w-full overflow-hidden flex-1 flex flex-col relative">
                {/* Email Header Info */}
                <div className="p-4 border-b border-border/50 bg-neutral-900">
                    <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-foreground flex items-center gap-2">
                            {mailData.sender}
                        </div>
                        <span className="text-xs text-muted-foreground">{mailData.time}</span>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{mailData.subject}</h4>
                    <p className="text-muted-foreground leading-relaxed">{mailData.body}</p>
                </div>

                {/* AI Action Area */}
                <div className="p-4 flex-1 flex flex-col items-start bg-neutral-950/80">
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full"
                            >
                                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono mb-3">
                                    <LucideSparkles className="h-3 w-3" /> Agent_Router_v2
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="destructive" className="bg-red-900/30 text-red-400 border-red-900/50 hover:bg-red-900/30">Severidad: Alta</Badge>
                                    <Badge variant="outline" className="border-border/50">Tag: Soporte L2</Badge>
                                    <Badge variant="outline" className="border-border/50">Impacto: Facturación</Badge>
                                </div>
                            </motion.div>
                        )}

                        {step >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full mt-2"
                            >
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded p-3 mb-4">
                                    <p className="text-xs text-blue-300 flex items-center gap-1 mb-2 font-medium">Borrador Generado desde KB <LucideCheckCircle2 className="h-3 w-3 inline" /></p>
                                    <p className="text-muted-foreground italic">&quot;Hola. Hemos detectado el bloqueo del webhook. Según la política SOP-293, estamos reiniciando la caché del bridge Stripe. Debería estabilizarse en 5 mins. Confirmaremos a la brevedad.&quot;</p>
                                </div>

                                <div className="flex gap-2 w-full mt-auto">
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full"><LucideReply className="h-3 w-3 mr-2" /> Aprobar y Enviar</Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 0 && (
                            <motion.div className="w-full flex justify-center py-8">
                                <span className="text-muted-foreground text-xs flex items-center animate-pulse"><LucideCornerDownRight className="h-3 w-3 mr-2" /> Esperando webhook nuevo mail...</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
