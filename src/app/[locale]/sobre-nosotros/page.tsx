import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const params = await props.params;
    const t = await getTranslations({ locale: params.locale, namespace: 'Navigation' });
    return {
        title: `${t('about')} | Delega`,
        description: 'Conoce la historia y el equipo detrás de Delega.',
    };
}

export default function SobreNosotrosPage() {
    const t = useTranslations('Nosotros');
    return (
        <div className="flex-1 bg-black min-h-screen">
            <section className="w-full py-24 md:py-32 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-full max-w-2xl h-64 bg-orange-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-full max-w-2xl h-64 bg-rose-500/10 blur-[120px] rounded-full"></div>

                <div className="container relative max-w-4xl mx-auto px-6">
                    <div className="flex flex-col items-center space-y-8 text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                            {t('heroTitle1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400">{t('heroTitle2')}</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            {t('heroDesc')}
                        </p>
                    </div>

                    <div className="grid gap-12 md:gap-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">{t('historyTitle')}</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                                <p>{t('historyP1')}</p>
                                <p>{t('historyP2')}</p>
                                <p>{t('historyP3')}</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-white mb-6 text-center">{t('valuesTitle')}</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(249,115,22,0.2)]">01</span>
                                        {t('v1Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v1Desc')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(249,115,22,0.2)]">02</span>
                                        {t('v2Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v2Desc')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-red-400/10 text-red-400 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(248,113,113,0.2)]">03</span>
                                        {t('v3Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v3Desc')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-rose-400/10 text-rose-400 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(251,113,133,0.2)]">04</span>
                                        {t('v4Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v4Desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-zinc-900">
                            <h2 className="text-3xl font-bold text-white mb-6">{t('teamTitle')}</h2>
                            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
                                {t('teamDesc')}
                            </p>
                            
                            {/* Team Avatar Grid (Placeholder) */}
                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex flex-col items-center group">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center mb-4 overflow-hidden relative group-hover:border-orange-500/50 transition-colors shadow-lg">
                                            <svg className="w-10 h-10 text-zinc-600 group-hover:text-orange-500/50 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2"></div>
                                        <div className="h-3 w-16 bg-zinc-800/50 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                {t('teamButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
