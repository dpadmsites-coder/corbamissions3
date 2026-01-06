
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mic, Play, Headphones, ArrowRight, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PodcastPage() {
    return (
        <main className="min-h-screen bg-background">


            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/podcast-microphone.png"
                        alt="Corbã Cast Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
                        <div className="relative w-48 h-48 mx-auto mb-4">
                            <Image
                                src="/corba-cast-logo.png"
                                alt="Corbã Cast Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
                            CORBÃ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">CAST</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            O podcast oficial da Corbã Missions. Conversas profundas, testemunhos impactantes e uma visão transformadora sobre missões.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white min-w-[200px] h-14 text-lg rounded-full">
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                Todos os Episódios
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Decorative Wave/Gradient at bottom */}

            </section>

            {/* Sobre o Projeto Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                {/* Decorative circles */}
                                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-red-500/20" />
                                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-red-500/5" />

                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                                        <Radio className="w-24 h-24 text-zinc-600" />
                                    </div>
                                    {/* Placeholder image usage */}
                                    <Image
                                        src="/about-team.jpg"
                                        alt="Sobre o Podcast"
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-2">Sobre o Projeto</h2>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                                    Vozes que Ecoam a <span className="text-red-600">Verdade</span>
                                </h3>
                            </div>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    O Corbã Cast nasceu do desejo de conectar corações e mentes através de histórias reais de fé e superação. Não é apenas um podcast, é uma plataforma de expansão do Reino.
                                </p>
                                <p>
                                    Em cada episódio, trazemos convidados especiais, missionários e líderes que compartilham suas experiências no campo, desafios e vitórias. Nosso objetivo é inspirar você a descobrir seu próprio chamado e propósito.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-bold text-foreground">50+</h4>
                                    <p className="text-sm text-muted-foreground">Episódios Gravados</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-bold text-foreground">10k+</h4>
                                    <p className="text-sm text-muted-foreground">Ouvintes Mensais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-zinc-950 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[128px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[128px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                            Acesse o Site Oficial do Corbã Cast
                        </h2>
                        <p className="text-xl text-zinc-300 leading-relaxed">
                            Mergulhe em todo o nosso conteúdo, acesse materiais exclusivos e junte-se à nossa comunidade de ouvintes.
                        </p>

                        <div className="pt-8">
                            <Button size="lg" className="h-16 px-8 text-lg rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105">
                                Acessar Site
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
