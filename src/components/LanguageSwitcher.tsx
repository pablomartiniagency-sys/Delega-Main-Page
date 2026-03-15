'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    const onValueChange = (nextLocale: string) => {
        let basePath = pathname;
        
        // Remove the current locale prefix from the pathname
        if (pathname.startsWith(`/${locale}/`)) {
            basePath = pathname.substring(locale.length + 1);
        } else if (pathname === `/${locale}`) {
            basePath = '/';
        }
        
        // Return to default locale or append new locale branch
        let navigatePath = '';
        if (nextLocale === 'es') {
            navigatePath = basePath;
        } else {
            navigatePath = `/${nextLocale}${basePath === '/' ? '' : basePath}`;
        }

        // next-intl middleware respects the NEXT_LOCALE cookie.
        // We must update the cookie manually before a hard navigation, 
        // otherwise middleware redirects back to the previous language.
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
        window.location.href = navigatePath;
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
