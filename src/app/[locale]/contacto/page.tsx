import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ContactForm } from './ContactForm';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const params = await props.params;
    const t = await getTranslations({ locale: params.locale, namespace: 'Navigation' });
    return {
        title: `${t('contact')} | Delega`,
        description: 'Contacta con nuestro equipo técnico para implementar Delega.',
    };
}

export default function Contacto() {
    const t = useTranslations('Contacto');
    return (
        <div className="container max-w-xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">{t('title')}</h1>
            <p className="text-center text-muted-foreground mb-12">{t('desc')}</p>
            
            <ContactForm />
        </div>
    );
}
