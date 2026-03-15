import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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
        <div className="container max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-8">{t('title')}</h1>
            <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-12">{t('desc')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">{t('ueTitle')}</h3>
                        <p className="text-muted-foreground text-sm">{t('ueDesc')}</p>
                    </div>
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">{t('hilTitle')}</h3>
                        <p className="text-muted-foreground text-sm">{t('hilDesc')}</p>
                    </div>
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">{t('waTitle')}</h3>
                        <p className="text-muted-foreground text-sm">{t('waDesc')}</p>
                    </div>
                    <div className="border border-border rounded-xl p-8 bg-card">
                        <h3 className="font-semibold text-xl mb-4 text-foreground">{t('rbacTitle')}</h3>
                        <p className="text-muted-foreground text-sm">{t('rbacDesc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
