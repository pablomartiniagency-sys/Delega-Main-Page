import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const params = await props.params;
    const t = await getTranslations({ locale: params.locale, namespace: 'Navigation' });
    return {
        title: `${t('product')} | Delega`,
        description: 'Conoce la plataforma de agentes de IA de Delega.',
    };
}

export default function ProductoPage() {
    const t = useTranslations('Producto');
    return (
        <>
            <div className="flex-1">
                <section className="w-full py-24 md:py-32 lg:py-40 bg-black text-white relative overflow-hidden flex items-center justify-center min-h-[60vh]">
                    <div className="absolute inset-0 z-0">
                        <Image src="/hero_bg.png" alt="Delega Platform" fill quality={100} unoptimized className="object-cover opacity-30" priority />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

                    <div className="container relative z-10 max-w-7xl mx-auto px-6">
                        <div className="flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-6 max-w-4xl">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter drop-shadow-sm leading-tight pb-4">
                                    {t('heroTitle1')} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 drop-shadow-lg pb-4">{t('heroTitle2')}</span>
                                </h1>
                                <p className="mx-auto max-w-2xl text-zinc-400 text-xl md:text-2xl font-light tracking-wide">
                                    {t('heroDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-20 bg-zinc-950">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                                    {t('indexTitle')}
                                </h2>
                                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                    {t('indexDesc')}
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        t('indexItems.item1'),
                                        t('indexItems.item2'),
                                        t('indexItems.item3'),
                                        t('indexItems.item4')
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            <span className="text-zinc-300 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="spotlight-card group relative aspect-square md:aspect-video lg:aspect-square bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-white/5 flex flex-col overflow-hidden">
                                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(249,115,22,0.15), transparent 40%)' }}/>
                                {/* Top bar */}
                                <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 shrink-0 z-10 w-full relative">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                </div>
                                <div className="bg-black flex-1 relative z-10 w-full flex items-center justify-center overflow-hidden rounded-b-3xl">
                                    <Image src="/producto/kb.png" alt="Knowledge Base Processing" fill quality={100} unoptimized className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 will-change-transform" />
                                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-20 bg-black">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1 spotlight-card group relative aspect-square md:aspect-video lg:aspect-square bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-white/5 flex flex-col overflow-hidden">
                                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(249,115,22,0.15), transparent 40%)' }}/>
                                {/* Top bar */}
                                <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 shrink-0 z-10 w-full relative">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                </div>
                                <div className="bg-black flex-1 relative z-10 w-full flex items-center justify-center overflow-hidden rounded-b-3xl">
                                    <Image src="/cases/case_support.png" alt="Omnichannel AI Routing" fill quality={100} unoptimized className="object-cover object-left opacity-80 group-hover:scale-105 transition-transform duration-700 will-change-transform" />
                                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                                    {t('omniTitle')}
                                </h2>
                                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                    {t('omniDesc')}
                                </p>
                                <div className="grid gap-6">
                                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                                        <h3 className="font-semibold text-white mb-2">{t('omniInternal')}</h3>
                                        <p className="text-zinc-400 text-sm">{t('omniInternalDesc')}</p>
                                    </div>
                                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                                        <h3 className="font-semibold text-white mb-2">{t('omniExternal')}</h3>
                                        <p className="text-zinc-400 text-sm">{t('omniExternalDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
