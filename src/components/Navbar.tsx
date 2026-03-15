'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Button } from './ui/button';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/producto', label: t('product') },
        { href: '/casos-de-uso', label: t('useCases') },
        { href: '/seguridad', label: t('security') },
        { href: '/sobre-nosotros', label: t('about') },
    ] as const;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
            {/* Top gradient glow indicator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

            <div className="container flex h-20 items-center justify-between max-w-[1400px] mx-auto px-6 relative">
                {/* Logo (Desktop & Mobile Unified) */}
                <Link href="/" className="flex items-center space-x-3 group z-10 shrink-0">
                    <div className="w-10 h-10 relative flex items-center justify-center">
                        <Image src="/delega_logo.png" alt="Delega Logo" width={40} height={40} className="object-contain w-full h-full group-hover:scale-110 transition-all duration-300" priority />
                    </div>
                    <span className="font-bold tracking-tight text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Delega.</span>
                </Link>

                {/* Desktop Navigation (Centered Floating Pill) */}
                <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 px-8 py-3 rounded-full bg-white/[0.03] backdrop-blur-3xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 z-0">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="transition-all hover:text-white text-white/60 relative group py-1">
                            {link.label}
                            {/* Animated glowing underline indicator */}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    ))}
                </nav>

                {/* Right side CTA, Switcher & Mobile Menu Toggle */}
                <div className="flex items-center space-x-3 md:space-x-5 z-10 shrink-0">
                    <div className="hidden sm:block">
                         <LanguageSwitcher />
                    </div>
                    <Link href="/contacto" className="hidden md:block">
                        <Button className="text-[15px] font-semibold bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95 px-7 h-11 rounded-full border border-white/20">{t('contact')}</Button>
                    </Link>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden border-b border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="container px-6 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.href} 
                                    href={link.href} 
                                    className="text-lg font-medium text-white/80 hover:text-white transition-colors py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                                <LanguageSwitcher />
                                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full justify-center text-base">{t('contact')}</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
