"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LucideTimer, LucideCheckCircle2, LucideBot } from "lucide-react";

export function TicketSimulator() {
    const t = useTranslations('Simulators.Ticket');
    const initialTickets = [
        { id: "T-8942", title: t('t1title'), status: "Open", prior: "High", sla: t('t1sla'), agent: t('t1agent') },
        { id: "T-8941", title: t('t2title'), status: "Open", prior: "Medium", sla: t('t2sla'), agent: t('t2agent') },
        { id: "T-8940", title: t('t3title'), status: "Resolved", prior: "Low", sla: "-", agent: t('t3agent') }
    ];

    const [tickets, setTickets] = useState(initialTickets);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTickets(prev => {
                const newT = [...prev];
                newT[0] = { ...newT[0], status: "Resolved", agent: "Agent AI v2", sla: t('t1slaRe') };
                return newT;
            });
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, [t]);

    return (
        <div className="w-full h-full flex flex-col font-sans">
            <div className="flex justify-between items-center mb-6 border-b border-border/30 pb-4">
                <h4 className="text-white font-semibold">{t('title')}</h4>
                <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{t('sla')}: <strong className="text-emerald-400">99.4%</strong></span>
                    <span>{t('aiRes')}: <strong className="text-orange-400">76%</strong></span>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-12 gap-4 text-xs text-muted-foreground px-4 py-2 uppercase font-semibold">
                    <div className="col-span-2">{t('col1')}</div>
                    <div className="col-span-5">{t('col2')}</div>
                    <div className="col-span-2">{t('col3')}</div>
                    <div className="col-span-3 text-right">{t('col4')}</div>
                </div>

                <AnimatePresence>
                    {tickets.map((t, idx) => (
                        <motion.div
                            layout
                            key={t.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className={`grid grid-cols-12 gap-4 items-center p-4 border border-border/50 rounded-lg text-sm transition-colors ${t.status === 'Resolved' ? 'bg-emerald-950/10 border-emerald-900/30 text-muted-foreground' : 'bg-neutral-900/60'
                                }`}
                        >
                            <div className="col-span-2 font-mono text-xs">{t.id}</div>
                            <div className="col-span-5 font-medium truncate">{t.title}</div>
                            <div className="col-span-2">
                                <Badge variant="outline" className={`
                   ${t.prior === 'High' ? 'border-red-500/50 text-red-400 bg-red-950/30' : ''}
                   ${t.prior === 'Medium' ? 'border-orange-500/50 text-orange-400 bg-orange-950/30' : ''}
                   ${t.prior === 'Low' ? 'border-zinc-500/50 text-zinc-400 bg-zinc-950/30' : ''}
                `}>{t.prior}</Badge>
                            </div>

                            <div className="col-span-3 flex flex-col items-end gap-1">
                                <div className="flex items-center gap-1.5 font-medium text-xs">
                                    {t.agent.includes('AI') ? <LucideBot className="h-3 w-3 text-orange-400" /> : null}
                                    <span className={t.agent.includes('AI') ? 'text-orange-400' : 'text-neutral-300'}>{t.agent}</span>
                                </div>
                                {t.status === 'Open' ? (
                                    <span className="flex items-center gap-1 text-[10px] text-red-400 font-mono"><LucideTimer className="h-3 w-3" /> {t.sla}</span>
                                ) : (
                                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono"><LucideCheckCircle2 className="h-3 w-3" /> {t.sla}</span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-8 pt-4 border-t border-border/30 text-center">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-xs text-muted-foreground hover:text-white border px-4 py-2 rounded-full border-border/50 bg-neutral-900/50"
                    onClick={() => setTickets(initialTickets)}
                >
                    {t('reset')}
                </motion.button>
            </div>
        </div>
    );
}
