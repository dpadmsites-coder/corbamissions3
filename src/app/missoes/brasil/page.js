
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Users } from "lucide-react";
import WavingFlag from "@/components/WavingFlag";

export const metadata = {
    title: "Missão Brasil - Corbã Missions",
    description: "Conheça nosso trabalho no Brasil. Espalhando o amor de Cristo e ajudando comunidades carentes desde 2013.",
};

export default function BrasilMission() {
    return (
        <main className="min-h-screen bg-background">

            <div className="pt-20">
                {/* Hero for Brazil Mission */}
                <section className="relative py-24 bg-gradient-section overflow-hidden">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full w-fit mx-auto lg:mx-0">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">Brasil</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight">
                                    Missão Brasil: <span className="text-gradient">Espalhando Luz</span>
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    Do Brasil para o mundo, nossa missão é clara: espalhar o amor de Cristo onde quer que vamos.
                                    Unidos em um propósito, compartilhamos esperança.
                                </p>
                                <div className="flex gap-4 justify-center lg:justify-start">
                                    <Button size="lg" className="rounded-full">
                                        Quero Ser Voluntário
                                    </Button>
                                </div>
                            </div>
                            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                                <WavingFlag
                                    src="/flag-brasil.png"
                                    alt="Bandeira do Brasil"
                                    className="w-full max-w-[600px] aspect-[1.5]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Content */}
                <section className="py-20">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-3xl font-heading font-medium mb-6">Nossa História no Brasil</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Após mais de uma década e meia de experiências no campo missionário urbano, atuando entre a capital Porto Alegre e cidades da região metropolitana, o Corbã Missions nasce e se fortalece a partir de uma convicção clara: <span className="font-semibold italic text-foreground">o evangelho precisa ser pregado com palavras, mas confirmado por ações.</span>
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Nosso presidente, pastor e missionário <span className="font-semibold text-foreground">Diogo Carpes</span>, atualmente em campo missionário na cidade de Sydney, Austrália, sempre manteve viva a visão do evangelismo urbano aliado ao ministério de socorro. Uma missão que compreende que anunciar Cristo também envolve cuidar do próximo em suas necessidades mais urgentes.
                                </p>
                                <div className="mb-6 pl-4 border-l-2 border-primary/20">
                                    <p className="text-muted-foreground mb-2">Ao longo dessa caminhada, o Corbã Missions tem atuado com foco em:</p>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Auxílio alimentar e mantimentos</li>
                                        <li>Aconselhamento pastoral e apoio espiritual</li>
                                        <li>Visitas em lares</li>
                                        <li>Apoio em centros de recuperação</li>
                                        <li>Trabalhos sociais com pessoas em situação de rua</li>
                                    </ul>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Tudo isso unido ao ensino cordial e fiel da Palavra de Deus, entendendo que o amor cristão se manifesta de forma prática.
                                </p>

                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Hoje, com sede fortalecida na cidade de <span className="font-semibold text-foreground">Carazinho</span>, o Corbã Missions segue avançando na obra de Deus, trabalhando em parceria com igrejas comprometidas com a Palavra e com ONGs que atuam no suporte social, somando forças em favor daqueles que mais precisam.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Nossas raízes estão firmadas na missão urbana, e com o crescimento e amadurecimento ao longo dos anos, seguimos unindo irmãos que compartilham da mesma visão: <span className="font-semibold italic text-foreground">servir, amar e anunciar.</span>
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Cremos que o evangelho não se limita à pregação verbal. A salvação na vida do cristão se torna visível por meio de obras justas, honestas e cheias de misericórdia, conforme o que nosso Senhor Jesus Cristo nos ensinou e deixou como missão — o Seu IDE.
                                </p>

                                {/* Mobile-only part 2 - Closing thoughts */}
                                <div className="md:hidden">
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Se você carrega esse chamado, se existe uma chama ardente em seu coração para trabalhar com o evangelismo urbano e, um dia, atuar no campo missionário — dentro ou fora do seu país, <span className="font-semibold text-foreground">saiba que você não está sozinho</span>.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Conheça mais sobre o Corbã Missions. Entre em contato. Venha fazer parte de uma instituição que cresce a cada dia, sustentada pela bênção do Senhor e comprometida com a missão de levar o evangelho em palavra e ação.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-shadow shadow-sm">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-medium mb-2">Ação Social Integrada</h4>
                                        <p className="text-muted-foreground">Atuamos diretamente nas comunidades carentes, levando não apenas a palavra, mas o pão que alimenta o corpo e a dignidade.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-shadow shadow-sm">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-medium mb-2">Discipulado e Mentoria</h4>
                                        <p className="text-muted-foreground">Formamos novos líderes através de cursos e acompanhamento pessoal, fortalecendo a igreja local e preparando a próxima geração.</p>
                                    </div>
                                </div>

                                <div className="bg-muted p-8 rounded-3xl text-center">
                                    <h4 className="text-2xl font-heading mb-4">Faça Parte Disso</h4>
                                    <p className="text-muted-foreground mb-6">
                                        Sua contribuição muda vidas. Junte-se a nós nesta missão de amor.
                                    </p>
                                    <Link href="https://wa.me/61415740047" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="w-full" variant="hero">Entre em contato</Button>
                                    </Link>
                                </div>

                                {/* Desktop-only part 2 - Closing thoughts */}
                                <div className="hidden md:block">
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Se você carrega esse chamado, se existe uma chama ardente em seu coração para trabalhar com o evangelismo urbano e, um dia, atuar no campo missionário — dentro ou fora do seu país, <span className="font-semibold text-foreground">saiba que você não está sozinho</span>.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Conheça mais sobre o Corbã Missions. Entre em contato. Venha fazer parte de uma instituição que cresce a cada dia, sustentada pela bênção do Senhor e comprometida com a missão de levar o evangelho em palavra e ação.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
