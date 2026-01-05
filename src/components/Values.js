"use client";

import { Heart, BookOpen, Users, HandHeart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { GlowCard } from "@/components/ui/glow-card";

const values = [
    {
        icon: Heart,
        title: "Caridade com o Próximo",
        description: "Nosso compromisso com a obra social é uma extensão natural de nossa fé. Através de iniciativas de cuidado, socorro e oração, atendemos às necessidades práticas e espirituais.",
    },
    {
        icon: BookOpen,
        title: "Cumprindo o Ide",
        description: "Nossa visão é cumprir o ide de nosso Senhor Jesus Cristo. A Grande Comissão é uma oportunidade de compartilhar o amor de Deus com o mundo.",
    },
    {
        icon: Users,
        title: "Comunhão em Santidade",
        description: "Promovemos a comunhão seguindo o modelo dos primeiros cristãos descrito em Atos 2:42-47, criando um ambiente de apoio e crescimento espiritual mútuo.",
    },
    {
        icon: HandHeart,
        title: "Capacitação de Ministros",
        description: "Comprometidos em capacitar e equipar novos ministros do evangelho, proporcionando treinamento abrangente e discipulado dedicado online e presencial.",
    },
];

const Values = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto">
                <div
                    ref={headerRef}
                    className={cn("text-center mb-16 scroll-animate", headerVisible && "visible")}
                >
                    <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                        Nossos Valores
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-wide">
                        O que nos <span className="text-gradient">Move</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Que possamos nos erguer, não apenas para olhar para o mundo, mas para fazer a diferença nele.
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate", cardsVisible && "visible")}
                >
                    {values.map((value, index) => (
                        <GlowCard
                            key={value.title}
                            className="group p-6 bg-card rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-card"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            glowSize={250}
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <value.icon className="w-7 h-7 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-medium text-foreground mb-3 tracking-wide">
                                {value.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
