'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function NidoPage() {
    const t = useTranslations('Nido');

    // The keys from the json files
    const plansKeys = ['seed', 'growth', 'corporate'] as const;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/5 blur-[120px]" />
            </div>

            <div className="container max-w-[1200px] mx-auto px-6 py-24 relative z-10">
                
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-orange-500" />
                        <span className="text-sm font-medium text-white/80">Planes a tu medida</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        {t('heroTitle1')}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">{t('heroTitle2')}</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed">
                        {t('heroDesc')}
                    </p>
                </motion.div>

                {/* Tabs / Segment Selector (Mobile) & Grid (Desktop) */}
                <div className="mb-24">
                    {/* Desktop layout: 3 column grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="hidden lg:grid grid-cols-3 gap-8 items-start"
                    >
                        {plansKeys.map((key) => <PlanCard key={key} planKey={key} t={t} />)}
                    </motion.div>

                    {/* Mobile layout: Tabs */}
                    <div className="lg:hidden">
                        <Tabs defaultValue="growth" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto gap-2 bg-white/5 p-2 rounded-2xl border border-white/10">
                                <TabsTrigger value="seed" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl py-3 text-sm">{t('tabs.tab1')}</TabsTrigger>
                                <TabsTrigger value="growth" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl py-3 text-sm">{t('tabs.tab2')}</TabsTrigger>
                                <TabsTrigger value="corporate" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl py-3 text-sm">{t('tabs.tab3')}</TabsTrigger>
                            </TabsList>
                            <div className="mt-8">
                                <TabsContent value="seed"><PlanCard planKey="seed" t={t} /></TabsContent>
                                <TabsContent value="growth"><PlanCard planKey="growth" t={t} /></TabsContent>
                                <TabsContent value="corporate"><PlanCard planKey="corporate" t={t} /></TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>

                {/* FAQ Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto mb-32"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border-white/10 bg-white/5 px-6 rounded-2xl backdrop-blur-sm">
                            <AccordionTrigger className="text-left hover:no-underline py-6 text-lg group">
                                <span className="group-hover:text-orange-400 transition-colors">{t('faq.q1')}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
                                {t('faq.a1')}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10 bg-white/5 px-6 rounded-2xl backdrop-blur-sm">
                            <AccordionTrigger className="text-left hover:no-underline py-6 text-lg group">
                                <span className="group-hover:text-orange-400 transition-colors">{t('faq.q2')}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
                                {t('faq.a2')}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10 bg-white/5 px-6 rounded-2xl backdrop-blur-sm">
                            <AccordionTrigger className="text-left hover:no-underline py-6 text-lg group">
                                <span className="group-hover:text-orange-400 transition-colors">{t('faq.q3')}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
                                {t('faq.a3')}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>

                {/* Footer CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-12 text-center"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                    <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
                        <p className="text-zinc-400 text-lg mb-8">{t('cta.desc')}</p>
                        <Link href="/contacto">
                            <Button className="h-14 px-8 bg-white text-black hover:bg-zinc-200 text-lg rounded-full font-semibold shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-1">
                                {t('cta.button')}
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}

// Sub-component for the pricing cards (Bento Grid style)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PlanCard({ planKey, t }: { planKey: 'seed' | 'growth' | 'corporate'; t: any }) {
    const isPopular = planKey === 'growth';
    
    // Attempt to access array of features. next-intl handles arrays as objects with indices or via raw() if configured, 
    // but the easiest way is to read keys like features.0, features.1 or explicitly list them if array syntax fails,
    // wait, next-intl array mapping works cleanly with `t.raw('plans.key.features')` if raw is allowed,
    // Alternatively, mapping through indices if we know the length. We know each has 4 features.
    const featureCount = 4;
    const features = Array.from({ length: featureCount }).map((_, i) => t(`plans.${planKey}.features.${i}`));

    return (
        <motion.div 
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
            }}
            className={`relative flex flex-col h-full rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                isPopular 
                    ? 'bg-gradient-to-b from-orange-500/10 to-black/40 border border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.1)]' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
            }`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
                        {t(`plans.${planKey}.badge`)}
                    </span>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{t(`plans.${planKey}.title`)}</h3>
                <p className="text-zinc-400 text-sm min-h-[40px]">{t(`plans.${planKey}.description`)}</p>
            </div>

            <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline space-x-2">
                    <span className={`text-4xl font-bold tracking-tight ${isPopular ? 'text-white' : 'text-zinc-100'}`}>
                        {t(`plans.${planKey}.price`)}
                    </span>
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-zinc-300">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isPopular ? 'text-orange-500' : 'text-zinc-500'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href="/contacto" className="mt-auto w-full">
                <Button 
                    className={`w-full h-12 rounded-xl font-medium transition-all ${
                        isPopular 
                            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                >
                    {t(`plans.${planKey}.cta`)}
                </Button>
            </Link>
        </motion.div>
    );
}

