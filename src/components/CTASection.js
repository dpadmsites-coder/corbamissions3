"use client";

import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CTASection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="contato" className="py-20 bg-gradient-primary relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary-foreground/20 rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full" />
            </div>

            <div className="container mx-auto relative">
                <div
                    ref={ref}
                    className={cn("max-w-3xl mx-auto text-center scroll-animate", isVisible && "visible")}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
                        <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-primary-foreground mb-6 tracking-wide">
                        Junte-se a Nós Nesta Jornada
                    </h2>

                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                        Estamos ansiosos para caminhar ao seu lado enquanto você cresce em sua fé e ministério.
                        A missão não é uma escolha, é uma resposta ao chamado de Deus.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contato">
                            <Button
                                size="lg"
                                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full"
                            >
                                Apoie a Missão
                                <Heart className="w-5 h-5 ml-1" />
                            </Button>
                        </Link>
                        <Link href="/contato">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                            >
                                Entre em Contato
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
