'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from 'next-intl';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/actions/contact';

export function ContactForm() {
    const t = useTranslations('Contacto');
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const volumen = formData.get('volumen') as string;
        const stack = formData.get('stack') as string;

        try {
            const result = await submitContactForm({ email, volumen, stack });

            if (result.error) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: result.error,
                });
            } else {
                toast({
                    title: "Solicitud enviada",
                    description: "Nuestro equipo se pondrá en contacto contigo pronto.",
                });
                // Reset form
                (e.target as HTMLFormElement).reset();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Ocurrió un error inesperado al enviar el formulario.",
            });
        } finally {
            setIsPending(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email">{t('emailLabel')}</Label>
                <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder={t('emailPlaceholder')} 
                    className="bg-background/50 border-border h-12" 
                    disabled={isPending}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="volumen">{t('volLabel')}</Label>
                <Input 
                    id="volumen" 
                    name="volumen" 
                    type="text" 
                    placeholder={t('volPlaceholder')} 
                    className="bg-background/50 border-border h-12" 
                    disabled={isPending}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="stack">{t('stackLabel')}</Label>
                <Textarea 
                    id="stack" 
                    name="stack" 
                    placeholder={t('stackPlaceholder')} 
                    className="bg-background/50 border-border min-h-32" 
                    disabled={isPending}
                />
            </div>
            <Button 
                className="w-full h-12 text-sm font-semibold rounded-lg bg-foreground text-background" 
                type="submit"
                disabled={isPending}
            >
                {isPending ? "Enviando..." : t('button')}
            </Button>
        </form>
    );
}
