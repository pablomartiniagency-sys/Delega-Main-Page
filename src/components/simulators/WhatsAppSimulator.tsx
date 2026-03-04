"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideCheckCircle, LucideUser, LucideSparkles } from "lucide-react";

type Message = { id: string; role: 'user' | 'agent' | 'human'; text: string; subtext?: string };

export function WhatsAppSimulator() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'user', text: 'Quisiera saber el estado de mi envío #4928' }
    ]);
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        let t1: ReturnType<typeof setTimeout>;
        let t2: ReturnType<typeof setTimeout>;
        let t3: ReturnType<typeof setTimeout>;
        let t4: ReturnType<typeof setTimeout>;

        if (messages.length === 1) {
            setTyping(true);
            t1 = setTimeout(() => {
                setMessages(m => [...m, { id: '2', role: 'agent', text: 'El pedido #4928 está en reparto. Llegará hoy entre 16:00 y 18:00h.', subtext: 'Query: PostgreSQL -> ShipmentTable' }]);
                setTyping(false);
                t2 = setTimeout(() => {
                    setMessages(m => [...m, { id: '3', role: 'user', text: 'Ah perfecto. ¿Puedo cambiar la dirección a la oficina?' }]);
                }, 3000);
            }, 1500);
        } else if (messages.length === 3) {
            setTyping(true);
            t3 = setTimeout(() => {
                setMessages(m => [...m, { id: '4', role: 'agent', text: 'Como el paquete ya está en reparto local, escalar a un humano es necesario según nuestra política. Un agente humano se conectará de inmediato.', subtext: 'Context: SLA_Policy_Handoff' }]);
                setTyping(false);
                t4 = setTimeout(() => {
                    setMessages(m => [...m, { id: '5', role: 'human', text: '¡Hola! Soy Carlos. El repartidor ya tiene la ruta marcada, pero llamaré a la base para ver si podemos redirigirlo. Denos un momento.' }]);
                }, 2500);
            }, 1500);
        }

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [messages]);

    return (
        <div className="w-full max-w-sm mx-auto h-full flex flex-col font-sans">
            <div className="bg-[#0b141a] rounded-t-xl p-3 border-b border-border/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs">DL</div>
                    <div className="leading-none">
                        <h4 className="text-sm font-semibold text-white mb-1">Delega Empresa</h4>
                        <span className="text-[10px] text-emerald-400">Cuenta de empresa oficial</span>
                    </div>
                </div>
                <button className="text-xs text-muted-foreground outline-none border-none" onClick={() => setMessages([{ id: '1', role: 'user', text: 'Quisiera saber el estado de mi envío #4928' }])}>Reset</button>
            </div>

            <div className="bg-[#0b141a] flex-1 flex flex-col p-4 gap-3 overflow-y-auto rounded-b-xl border border-border/10">
                <AnimatePresence>
                    {messages.map((m) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`max-w-[85%] rounded-lg p-3 text-sm flex flex-col ${m.role === 'user' ? 'bg-[#005c4b] self-end text-white rounded-tr-sm'
                                    : m.role === 'human' ? 'bg-[#1e2a30] self-start text-white border border-[#2a3942] rounded-tl-sm'
                                        : 'bg-[#202c33] self-start text-white border border-emerald-900/30 rounded-tl-sm'
                                }`}
                        >
                            <span className="mb-1">{m.text}</span>
                            {m.subtext && <span className="text-[10px] text-emerald-400 font-mono mt-1 opacity-80 flex items-center gap-1"><LucideSparkles className="h-2 w-2" /> {m.subtext}</span>}
                            <div className="text-[9px] text-[#8696a0] self-end mt-1 flex items-center gap-1">
                                {m.role === 'agent' ? 'Bot' : m.role === 'human' ? 'Agente' : '10:42'}
                                {m.role === 'agent' && <LucideCheckCircle className="h-2 w-2" />}
                                {m.role === 'human' && <LucideUser className="h-2 w-2" />}
                            </div>
                        </motion.div>
                    ))}
                    {typing && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#202c33] self-start rounded-lg p-3 w-16 flex items-center justify-center gap-1 rounded-tl-sm">
                            <span className="h-1.5 w-1.5 bg-[#8696a0] rounded-full animate-bounce"></span>
                            <span className="h-1.5 w-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                            <span className="h-1.5 w-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
