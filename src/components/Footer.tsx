import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="border-t border-white/10 py-16 bg-black">
            <div className="container max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 relative flex items-center justify-center shadow-lg shadow-orange-500/20">
                             <img src="/delega_logo.png" alt="Delega logo - pie de página" className="object-contain w-full h-full" />
                        </div>
                        <span className="font-bold tracking-tight text-xl">Delega.</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-300 mr-4 font-light leading-relaxed">{t('desc')}</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm text-white">{t('productTitle')}</h4>
                    <Link href={{ pathname: '/producto', hash: 'email' }} className="text-sm text-zinc-400 hover:text-white transition-colors">{t('links.email')}</Link>
                    <Link href={{ pathname: '/producto', hash: 'whatsapp' }} className="text-sm text-zinc-400 hover:text-white transition-colors">{t('links.whatsapp')}</Link>
                    <Link href={{ pathname: '/producto', hash: 'crm' }} className="text-sm text-zinc-400 hover:text-white transition-colors">{t('links.crm')}</Link>
                    <Link href="/seguridad" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('links.security')}</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm text-white">{t('resourcesTitle')}</h4>
                    <Link href="/contacto" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('resourcesLinks.docs')}</Link>
                    <Link href="/casos-de-uso" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('resourcesLinks.cases')}</Link>
                    <Link href="/contacto" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('resourcesLinks.contact')}</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm text-white">{t('companyTitle')}</h4>
                    <Link href="/sobre-nosotros" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('companyLinks.about')}</Link>
                    <a href="/es/legal/privacidad" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('companyLinks.privacy')}</a>
                    <a href="/es/legal/terminos" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('companyLinks.terms')}</a>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm text-zinc-500 font-light text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <p>{t('copyright', { year: new Date().getFullYear() })}</p>
            </div>
        </footer>
    );
}
