"use client";

import Image from "next/image";
import { BookOpen, Users, Heart, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const AboutSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
    const { ref: infraRef, isVisible: infraVisible } = useScrollAnimation();

    return (
        <section id="sobre" className="py-20 bg-background">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        ref={sectionRef}
                        className={cn("scroll-animate-left", sectionVisible && "visible")}
                    >
                        <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                            Sobre Nós
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-6 tracking-wide">
                            Quem <span className="text-gradient">Somos</span>
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Somos uma sociedade e instituição cristã missionária, fundada em maio de 2023, comprometida
                            em capacitar e equipar novos ministros do evangelho, proporcionando treinamento abrangente
                            e discipulado dedicado online e presencial.
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Inspirados pelo significado bíblico de Corbã, que representa a dedicação total a Deus
                            (Marcos 7:11), buscamos não apenas transmitir conhecimento, mas também cultivar uma
                            profunda devoção ao Senhor em nossos alunos.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                                <BookOpen className="w-6 h-6 text-primary" />
                                <span className="font-medium text-foreground">Ensino Bíblico</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                                <Users className="w-6 h-6 text-primary" />
                                <span className="font-medium text-foreground">Comunhão</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                                <Heart className="w-6 h-6 text-primary" />
                                <span className="font-medium text-foreground">Caridade</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                <span className="font-medium text-foreground">Capacitação</span>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={imageRef}
                        className={cn("relative scroll-animate-right", imageVisible && "visible")}
                    >
                        <div className="absolute inset-0 bg-muted rounded-3xl transform rotate-3" />
                        <div className="relative rounded-3xl shadow-card overflow-hidden aspect-video lg:aspect-auto lg:h-[400px]">
                            <Image
                                src="/about-team.jpg"
                                alt="Equipe Corbã Missions"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Infrastructure Section */}
                <div
                    ref={infraRef}
                    className={cn("mt-20 p-8 bg-gradient-section rounded-3xl scroll-animate", infraVisible && "visible")}
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-heading font-medium text-foreground mb-4 tracking-wide">
                            Nossa Infraestrutura
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Nossa abordagem de ensino é holística, combinando aulas online acessíveis com instrução
                            prática e mentoria individual. Através do estudo das Escrituras e da orientação dos
                            líderes espirituais, os estudantes são capacitados a compreender e aplicar os princípios
                            fundamentais da fé cristã em seu ministério.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Oferecemos oportunidades regulares de comunhão e interação entre alunos, professores e
                            membros da comunidade, criando um ambiente de apoio e crescimento espiritual mútuo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
