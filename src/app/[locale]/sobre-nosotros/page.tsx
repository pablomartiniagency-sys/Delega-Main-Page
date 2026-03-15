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
                <div className="absolute top-0 right-0 w-full max-w-2xl h-64 bg-blue-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-full max-w-2xl h-64 bg-zinc-700/10 blur-[120px] rounded-full"></div>

                <div className="container relative max-w-4xl mx-auto px-6">
                    <div className="flex flex-col items-center space-y-8 text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                            {t('heroTitle1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{t('heroTitle2')}</span>
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
                                        <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">01</span>
                                        {t('v1Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v1Desc')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">02</span>
                                        {t('v2Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v2Desc')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">03</span>
                                        {t('v3Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v3Desc')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                                        <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">04</span>
                                        {t('v4Title')}
                                    </h3>
                                    <p className="text-zinc-400">{t('v4Desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-zinc-900">
                            <h2 className="text-3xl font-bold text-white mb-6">{t('teamTitle')}</h2>
                            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                                {t('teamDesc')}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                                {t('teamButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
