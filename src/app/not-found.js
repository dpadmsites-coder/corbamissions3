import Link from "next/link";

import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background">

            <div className="flex-1 flex items-center justify-center pt-20">
                <div className="text-center px-4">
                    <h1 className="text-9xl font-heading font-bold text-primary animate-fade-up">404</h1>
                    <h2 className="text-3xl font-heading font-medium mt-4 mb-6">Página não encontrada</h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Desculpe, a página que você está procurando não existe ou foi movida.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform shadow-soft hover:shadow-glow"
                    >
                        Voltar para o Início
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
