"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const MissionsSection = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: brasilTextRef, isVisible: brasilTextVisible } = useScrollAnimation();
    const { ref: brasilImageRef, isVisible: brasilImageVisible } = useScrollAnimation();
    const { ref: ausTextRef, isVisible: ausTextVisible } = useScrollAnimation();
    const { ref: ausImageRef, isVisible: ausImageVisible } = useScrollAnimation();

    return (
        <section id="missoes" className="py-20 bg-gradient-section">
            <div className="container mx-auto">
                <div
                    ref={headerRef}
                    className={cn("text-center mb-16 scroll-animate", headerVisible && "visible")}
                >
                    <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                        Nossas Missões
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-wide">
                        Levando <span className="text-gradient">Esperança</span> ao Mundo
                    </h2>
                </div>

                {/* Brasil Mission */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div
                        ref={brasilTextRef}
                        className={cn("order-2 lg:order-1 scroll-animate-left", brasilTextVisible && "visible")}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Brasil</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4 tracking-wide">
                            Espalhando Luz e Amor
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Do Brasil para o mundo, nossa missão é clara: espalhar o amor de Cristo onde quer que vamos.
                            Unidos em um propósito, compartilhamos esperança, alimentando os famintos, vestindo os nus e
                            proclamando a mensagem do Evangelho.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Desde sua fundação na cidade de Porto Alegre em 2013, Corbã Unidos pelo Evangelho tem sido uma
                            força vibrante na obra de Deus no Brasil. Ao longo dos anos, sua jornada tem sido marcada pelo
                            serviço amoroso, proporcionando auxílio em forma de alimentos e mantimentos aos lares necessitados.
                        </p>
                        <Link href="/missoes/brasil">
                            <Button variant="outline" className="group">
                                Saiba Mais
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                    <div
                        ref={brasilImageRef}
                        className={cn("order-1 lg:order-2 scroll-animate-right", brasilImageVisible && "visible")}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-muted rounded-3xl transform -rotate-3" />
                            <div className="relative rounded-3xl shadow-card overflow-hidden aspect-[4/3] w-full">
                                <Image
                                    src="/mission-brasil.jpg"
                                    alt="Missão no Brasil"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Austrália Mission */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        ref={ausImageRef}
                        className={cn("scroll-animate-left", ausImageVisible && "visible")}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-muted rounded-3xl transform rotate-3" />
                            <div className="relative rounded-3xl shadow-card overflow-hidden aspect-[4/3] w-full">
                                <Image
                                    src="/mission-australia.jpg"
                                    alt="Missão na Austrália"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        ref={ausTextRef}
                        className={cn("scroll-animate-right", ausTextVisible && "visible")}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Austrália</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4 tracking-wide">
                            Levando Esperança Além das Fronteiras
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            De Porto Alegre a Sydney, nossa visão é global. Desde 2023, temos trabalhado incansavelmente
                            para espalhar a luz de Cristo na Austrália. Através de cultos domiciliares, reuniões comunitárias
                            e ações de auxílio, compartilhamos esperança em meio às adversidades.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Em solo estrangeiro, somos uma ponte para o amor de Deus, demonstrando Sua graça e compaixão
                            a todos os que encontramos. Juntos, deixamos um impacto duradouro, lembrando ao mundo que o
                            amor de Cristo conhece fronteiras apenas para atravessá-las.
                        </p>
                        <Link href="/missoes/australia">
                            <Button variant="outline" className="group">
                                Saiba Mais
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionsSection;
