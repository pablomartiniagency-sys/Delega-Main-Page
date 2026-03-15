import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Lock, CopyCheck, KeySquare } from 'lucide-react';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const params = await props.params;
    const t = await getTranslations({ locale: params.locale, namespace: 'Navigation' });
    return {
        title: `${t('security')} | Delega`,
        description: 'Seguridad y privacidad en Delega.',
    };
}

export default function Seguridad() {
    const t = useTranslations('Seguridad');
    return (
        <div className="flex-1 bg-black min-h-screen">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="container max-w-5xl mx-auto px-6 py-24 md:py-32 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-3xl bg-red-500/10 text-red-400 mb-6 shadow-[0_0_30px_rgba(248,113,113,0.15)] ring-1 ring-red-500/20">
                         <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">{t('title')}</h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">{t('desc')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {/* UE Card */}
                    <div className="spotlight-card group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col overflow-hidden">
                        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at 50% 50%, rgba(248,113,113,0.15), transparent 40%)' }}/>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(248,113,113,0.2)]">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-xl md:text-2xl mb-4 text-white">{t('ueTitle')}</h3>
                            <p className="text-zinc-400 text-[15px] leading-relaxed">{t('ueDesc')}</p>
                        </div>
                    </div>

                    {/* HITL Card */}
                    <div className="spotlight-card group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col overflow-hidden">
                        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at 50% 50%, rgba(249,115,22,0.15), transparent 40%)' }}/>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                <CopyCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-xl md:text-2xl mb-4 text-white">{t('hilTitle')}</h3>
                            <p className="text-zinc-400 text-[15px] leading-relaxed">{t('hilDesc')}</p>
                        </div>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="spotlight-card group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col overflow-hidden">
                        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at 50% 50%, rgba(34,197,94,0.15), transparent 40%)' }}/>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-xl md:text-2xl mb-4 text-white">{t('waTitle')}</h3>
                            <p className="text-zinc-400 text-[15px] leading-relaxed">{t('waDesc')}</p>
                        </div>
                    </div>

                    {/* RBAC Card */}
                    <div className="spotlight-card group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col overflow-hidden">
                        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at 50% 50%, rgba(99,102,241,0.15), transparent 40%)' }}/>
                        <div className="relative z-10">
                             <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                <KeySquare className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-xl md:text-2xl mb-4 text-white">{t('rbacTitle')}</h3>
                            <p className="text-zinc-400 text-[15px] leading-relaxed">{t('rbacDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
