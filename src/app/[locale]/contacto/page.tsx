import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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

            <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">{t('emailLabel')}</Label>
                    <Input id="email" type="email" placeholder={t('emailPlaceholder')} className="bg-background/50 border-border h-12" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="volumen">{t('volLabel')}</Label>
                    <Input id="volumen" type="text" placeholder={t('volPlaceholder')} className="bg-background/50 border-border h-12" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="stack">{t('stackLabel')}</Label>
                    <Textarea id="stack" placeholder={t('stackPlaceholder')} className="bg-background/50 border-border min-h-32" />
                </div>
                <Button className="w-full h-12 text-sm font-semibold rounded-lg bg-foreground text-background" type="button">{t('submitButton')}</Button>
            </form>
        </div>
    );
}
