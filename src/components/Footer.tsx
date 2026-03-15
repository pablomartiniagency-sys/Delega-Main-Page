import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="border-t py-12 bg-background">
            <div className="container max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 relative flex items-center justify-center shadow-lg shadow-blue-500/20">
                             <img src="/delega_logo.png" alt="Delega Logo" className="object-contain w-full h-full" />
                        </div>
                        <span className="font-bold tracking-tight text-xl">Delega.</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground mr-4">{t('desc')}</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">{t('productTitle')}</h4>
                    <Link href={{ pathname: '/producto', hash: 'email' }} className="text-sm text-muted-foreground hover:text-foreground">{t('links.email')}</Link>
                    <Link href={{ pathname: '/producto', hash: 'whatsapp' }} className="text-sm text-muted-foreground hover:text-foreground">{t('links.whatsapp')}</Link>
                    <Link href={{ pathname: '/producto', hash: 'crm' }} className="text-sm text-muted-foreground hover:text-foreground">{t('links.crm')}</Link>
                    <Link href="/seguridad" className="text-sm text-muted-foreground hover:text-foreground">{t('links.security')}</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">{t('resourcesTitle')}</h4>
                    <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">{t('resourcesLinks.docs')}</Link>
                    <Link href="/casos-de-uso" className="text-sm text-muted-foreground hover:text-foreground">{t('resourcesLinks.cases')}</Link>
                    <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground">{t('resourcesLinks.contact')}</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">{t('companyTitle')}</h4>
                    <Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-foreground">{t('companyLinks.about')}</Link>
                    <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">{t('companyLinks.privacy')}</Link>
                    <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">{t('companyLinks.terms')}</Link>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-6 mt-12 pt-8 border-t text-sm text-muted-foreground">
                {t('copyright', { year: new Date().getFullYear() })}
            </div>
        </footer>
    );
}
