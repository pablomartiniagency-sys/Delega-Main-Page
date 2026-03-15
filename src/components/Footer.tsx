import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const prefix = `/${locale}`;

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
                    <Link href={`/${locale}/producto#email` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('links.email')}</Link>
                    <Link href={`/${locale}/producto#whatsapp` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('links.whatsapp')}</Link>
                    <Link href={`/${locale}/producto#crm` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('links.crm')}</Link>
                    <Link href={`/${locale}/seguridad` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('links.security')}</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">{t('resourcesTitle')}</h4>
                    <Link href={`/${locale}/docs` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('resourcesLinks.docs')}</Link>
                    <Link href={`/${locale}/casos-de-uso` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('resourcesLinks.cases')}</Link>
                    <Link href={`/${locale}/contacto` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('resourcesLinks.contact')}</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-sm">{t('companyTitle')}</h4>
                    <Link href={`/${locale}/sobre-nosotros` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('companyLinks.about')}</Link>
                    <Link href={`/${locale}/legal` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('companyLinks.privacy')}</Link>
                    <Link href={`/${locale}/legal` as any} className="text-sm text-muted-foreground hover:text-foreground">{t('companyLinks.terms')}</Link>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-6 mt-12 pt-8 border-t text-sm text-muted-foreground">
                {t('copyright', { year: new Date().getFullYear() })}
            </div>
        </footer>
    );
}
