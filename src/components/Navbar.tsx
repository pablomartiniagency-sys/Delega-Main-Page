import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center flex-row max-w-7xl mx-auto px-6">
                <div className="flex-1 mr-4 hidden md:flex items-center gap-6">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold tracking-tight">Delega.</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/producto" className="transition-colors hover:text-foreground/80 text-foreground/60">Producto</Link>
                        <Link href="/casos-de-uso" className="transition-colors hover:text-foreground/80 text-foreground/60">Casos de Uso</Link>
                        <Link href="/seguridad" className="transition-colors hover:text-foreground/80 text-foreground/60">Seguridad & Datos</Link>
                        <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between md:justify-end space-x-4">
                    <Link href="/" className="md:hidden font-bold tracking-tight mr-4">Delega.</Link>
                    <nav className="flex items-center space-x-2">
                        <Link href="/contacto">
                            <Button variant="ghost" className="text-sm font-medium">Hablar con ventas</Button>
                        </Link>
                        <Link href="/contacto">
                            <Button className="hidden sm:inline-flex text-sm font-medium">Ver Demostración</Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
