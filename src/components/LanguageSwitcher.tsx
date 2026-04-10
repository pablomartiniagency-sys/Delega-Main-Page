'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';
import { useTransition } from 'react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [, startTransition] = useTransition();

    const onValueChange = (nextLocale: string) => {
        startTransition(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            router.replace({ pathname } as any, { locale: nextLocale });
        });
    };

    return (
        <Select defaultValue={locale} onValueChange={onValueChange}>
            <SelectTrigger className="w-auto h-9 bg-background/50 backdrop-blur-sm border-border/40 hover:border-border transition-colors font-medium">
                <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-md border-border/40">
                <SelectItem value="es" className="cursor-pointer">Español (ES)</SelectItem>
                <SelectItem value="en" className="cursor-pointer">English (EN)</SelectItem>
            </SelectContent>
        </Select>
    );
}
