"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LucideBuilding, LucideUser, LucideClock } from "lucide-react";

export function CRMSimulator() {
    const t = useTranslations('Simulators.CRM');
    const accounts = [
        {
            company: "Acme Corp Logistics",
            contact: "Laura V.",
            lastInteraction: t('ago14m'),
            tags: [t('tags.Key Account'), t('tags.SLA 4h')],
            statusType: "Activo",
            status: t('statusActive'),
            owner: "Agent AI v2"
        },
        {
            company: "EcoFood Distribución",
            contact: "Carlos M.",
            lastInteraction: t('ago2d'),
            tags: [t('tags.Renovacion'), t('tags.Riesgo Medio')],
            statusType: "Alerta",
            status: t('statusAlert'),
            owner: "Marcos (Ventas)"
        },
        {
            company: "TechRetail SA",
            contact: "Elena R.",
            lastInteraction: t('yesterday18'),
            tags: [t('tags.Onboarding'), t('tags.Plan Pro')],
            statusType: "Tracking",
            status: t('statusTracking'),
            owner: "System"
        },
        {
            company: "Global Services LLC",
            contact: "Miguel T.",
            lastInteraction: t('yesterday09'),
            tags: [t('tags.Soporte'), t('tags.Nivel 2')],
            statusType: "Activo",
            status: t('statusActive'),
            owner: "Agent AI v2"
        },
        {
            company: "Innovatech Solutions",
            contact: "Sofía M.",
            lastInteraction: t('ago3d'),
            tags: [t('tags.Churn Risk'), t('tags.Renovacion')],
            statusType: "Alerta",
            status: t('statusAlert'),
            owner: "Laura (CSM)"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col font-sans">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-white font-semibold">{t('title')}</h4>
                <Badge variant="outline" className="text-xs bg-muted">{t('autosync')}</Badge>
            </div>

            <div className="flex flex-col gap-3 h-[300px] overflow-hidden">
                {accounts.map((acc, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * i }}
                        className="group relative flex items-center justify-between p-4 border border-border/50 bg-neutral-900/40 rounded-xl hover:bg-neutral-800/60 transition-colors"
                    >
                        {acc.statusType === 'Alerta' && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-xl opacity-50"></div>
                        )}
                        {acc.statusType === 'Activo' && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl opacity-50"></div>
                        )}

                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-neutral-800 border border-border/50 text-neutral-400">
                                <LucideBuilding className="h-5 w-5" />
                            </div>
                            <div>
                                <h5 className="font-medium text-white text-sm mb-1">{acc.company}</h5>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1"><LucideUser className="h-3 w-3" /> {acc.contact}</span>
                                    <span className="flex items-center gap-1"><LucideClock className="h-3 w-3" /> {acc.lastInteraction}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-1">
                                {acc.tags.map((t, idx) => (
                                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-neutral-800 text-neutral-300 border border-border/30">{t}</span>
                                ))}
                            </div>
                            <span className="text-[11px] text-muted-foreground font-mono bg-neutral-950 px-2 py-0.5 rounded-full border border-border/30">{t('owner')}: {acc.owner}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
