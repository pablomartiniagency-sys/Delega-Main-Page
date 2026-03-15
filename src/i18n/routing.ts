import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/producto': {
      es: '/producto',
      en: '/product'
    },
    '/casos-de-uso': {
      es: '/casos-de-uso',
      en: '/use-cases'
    },
    '/seguridad': {
      es: '/seguridad',
      en: '/security'
    },
    '/sobre-nosotros': {
      es: '/sobre-nosotros',
      en: '/about-us'
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact'
    },
    '/legal': {
       es: '/legal',
       en: '/legal'
    },
    '/docs': {
        es: '/docs',
        en: '/docs'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
