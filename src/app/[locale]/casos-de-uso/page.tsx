import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Headset, User, Server, Monitor, 
    FileText, Users, Target, TrendingUp, 
    Scale, FileSignature, ShoppingCart, Package, ArrowRight 
} from 'lucide-react';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const params = await props.params;
    const t = await getTranslations({ locale: params.locale, namespace: 'Navigation' });
    return {
        title: `${t('useCases')} | Delega`,
        description: 'Descubre cómo Delega puede transformar diferentes departamentos de tu empresa.',
    };
}

export default function CasosDeUsoPage() {
    const t = useTranslations('Casos');

    const useCases = [
        {
            title: t('casesList.c1Title'),
            category: t('casesList.c1Cat'),
            description: t('casesList.c1Desc'),
            benefits: [
                t('casesList.c1B1'),
                t('casesList.c1B2'),
                t('casesList.c1B3'),
                t('casesList.c1B4')
            ],
            type: 'support',
            glowColor: 'bg-orange-500/20',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
            )
        },
        {
            title: t('casesList.c2Title'),
            category: t('casesList.c2Cat'),
            description: t('casesList.c2Desc'),
            benefits: [
                t('casesList.c2B1'),
                t('casesList.c2B2'),
                t('casesList.c2B3')
            ],
            type: 'it',
            glowColor: 'bg-amber-500/20',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
            )
        },
        {
            title: t('casesList.c3Title'),
            category: t('casesList.c3Cat'),
            description: t('casesList.c3Desc'),
            benefits: [
                t('casesList.c3B1'),
                t('casesList.c3B2'),
                t('casesList.c3B3'),
                t('casesList.c3B4')
            ],
            type: 'hr',
            glowColor: 'bg-rose-500/20',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            )
        },
        {
            title: t('casesList.c4Title'),
            category: t('casesList.c4Cat'),
            description: t('casesList.c4Desc'),
            benefits: [
                t('casesList.c4B1'),
                t('casesList.c4B2'),
                t('casesList.c4B3'),
                t('casesList.c4B4')
            ],
            type: 'sales',
            glowColor: 'bg-red-500/20',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            )
        },
        {
            title: t('casesList.c5Title'),
            category: t('casesList.c5Cat'),
            description: t('casesList.c5Desc'),
            benefits: [
                t('casesList.c5B1'),
                t('casesList.c5B2'),
                t('casesList.c5B3'),
                t('casesList.c5B4')
            ],
            type: 'legal',
            glowColor: 'bg-orange-600/20',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
            )
        },
        {
            title: t('casesList.c6Title'),
            category: t('casesList.c6Cat'),
            description: t('casesList.c6Desc'),
            benefits: [
                t('casesList.c6B1'),
                t('casesList.c6B2'),
                t('casesList.c6B3'),
                t('casesList.c6B4')
            ],
            type: 'ecommerce',
            glowColor: 'bg-rose-400/20',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
            )
        }
    ];

    const getDiagram = (type: string) => {
        switch(type) {
            case 'support':
                return (
                    <div className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg"><User className="w-5 h-5 text-zinc-400" /></div>
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                            <Headset className="w-7 h-7 text-orange-400" />
                        </div>
                    </div>
                );
            case 'it':
                return (
                    <div className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg"><Monitor className="w-5 h-5 text-zinc-400" /></div>
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                            <Server className="w-7 h-7 text-amber-400" />
                        </div>
                    </div>
                );
            case 'hr':
                return (
                    <div className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg"><Users className="w-5 h-5 text-zinc-400" /></div>
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                            <FileText className="w-7 h-7 text-rose-400" />
                        </div>
                    </div>
                );
            case 'sales':
                return (
                    <div className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg"><Target className="w-5 h-5 text-zinc-400" /></div>
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                            <TrendingUp className="w-7 h-7 text-red-500" />
                        </div>
                    </div>
                );
            case 'legal':
                return (
                    <div className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg"><Scale className="w-5 h-5 text-zinc-400" /></div>
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-orange-600/10 border border-orange-600/30 flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.2)]">
                            <FileSignature className="w-7 h-7 text-orange-500" />
                        </div>
                    </div>
                );
            case 'ecommerce':
                return (
                    <div className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg"><ShoppingCart className="w-5 h-5 text-zinc-400" /></div>
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-rose-400/10 border border-rose-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(251,113,133,0.2)]">
                            <Package className="w-7 h-7 text-rose-400" />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex-1 bg-black min-h-screen">
            <section className="w-full py-24 md:py-32 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>

                <div className="container relative max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center space-y-6 text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            {t('heroTitle1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 drop-shadow-lg pb-2">{t('heroTitle2')}</span>
                        </h1>
                        <p className="max-w-[800px] text-zinc-400 text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: t.raw('heroDesc') }}></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors group overflow-hidden flex flex-col">
                                {/* Abstract UI Diagram Container */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 flex items-center justify-center border-b border-zinc-800/50">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full ${useCase.glowColor}`}></div>
                                    
                                    {getDiagram(useCase.type)}
                                </div>
                                <CardHeader className="pt-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-zinc-800 rounded-lg">
                                            {useCase.icon}
                                        </div>
                                        <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                                            {useCase.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-white text-xl">{useCase.title}</CardTitle>
                                    <CardDescription className="text-zinc-400 mt-2 text-sm leading-relaxed">
                                        {useCase.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mt-2">
                                        {useCase.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                                                <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-zinc-950 border-t border-zinc-900">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('notFoundTitle')}</h2>
                    <p className="text-zinc-400 mb-8">
                        {t('notFoundDesc')}
                    </p>
                    <Link href="/contacto">
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                            {t('notFoundButton')}
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
