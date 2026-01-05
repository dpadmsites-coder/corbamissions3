"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Users } from "lucide-react";

// Use dynamic import for the 3D globe to avoid SSR issues
const Globe3D = dynamic(() => import("@/components/Globe3D"), {
    ssr: false,
    loading: () => <GlobeLoader />,
});

const MarqueeText = () => {
    const text = "Missões • Evangelho • Ide por todo mundo • ";
    return (
        <div className="flex whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-4 text-sm md:text-base font-medium tracking-wider uppercase">
                    {text}
                </span>
            ))}
        </div>
    );
};

const GlobeLoader = () => (
    <div className="w-full h-full max-w-[280px] max-h-[280px] md:max-w-[380px] md:max-h-[380px] lg:max-w-[450px] lg:max-h-[450px] flex items-center justify-center mx-auto">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
    </div>
);

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen bg-gradient-hero pt-20 pb-24 overflow-x-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                {/* Clean white background */}
            </div>

            <div className="container mx-auto py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                            <Heart className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-accent-foreground">Missões Evangelísticas</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground leading-tight tracking-wide">
                            Ide por todo{" "}
                            <span className="text-gradient text-primary">Mundo</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            "Ide por todo o mundo e pregai o evangelho a toda criatura." Marcos 16:15.
                            Vamos juntos espalhar a mensagem de Jesus Cristo, de amor e redenção por onde quer que passemos.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="hero" size="lg">
                                Conheça Nossa Missão
                            </Button>
                            <Button variant="hero-outline" size="lg">
                                Saiba Mais
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">2</p>
                                    <p className="text-sm text-muted-foreground">Países</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">2023</p>
                                    <p className="text-sm text-muted-foreground">Desde</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">∞</p>
                                    <p className="text-sm text-muted-foreground">Vidas Tocadas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - 3D Globe */}
                    <div className="relative animate-fade-in flex items-center justify-center" style={{ animationDelay: "0.3s" }}>
                        <Globe3D />
                    </div>
                </div>
            </div>

            {/* Marquee Ribbons */}
            <div className="absolute bottom-10 left-0 right-0 pointer-events-none z-10">
                <div
                    className="bg-foreground/15 py-2 blur-[2px]"
                    style={{ clipPath: "polygon(0 18%, 100% 0, 100% 82%, 0 100%)" }}
                >
                    <div className="animate-marquee-slow text-foreground/50">
                        <MarqueeText />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 pointer-events-none z-20">
                <div
                    className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 py-2 shadow-lg"
                    style={{ clipPath: "polygon(0 18%, 100% 0, 100% 82%, 0 100%)" }}
                >
                    <div className="animate-marquee text-white">
                        <MarqueeText />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
