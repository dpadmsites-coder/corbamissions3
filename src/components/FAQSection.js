"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "Como posso participar das missões do Corbã?",
        answer:
            "Você pode participar de diversas formas: como missionário voluntário em nossas viagens, através de doações financeiras, orando por nossas missões ou ajudando na divulgação do nosso trabalho. Entre em contato conosco para saber mais sobre as próximas oportunidades.",
    },
    {
        question: "Quais países o Corbã já alcançou?",
        answer:
            "Atualmente, o Corbã atua no Brasil e na Austrália. Estamos sempre buscando expandir nosso alcance para levar a mensagem do evangelho a mais nações.",
    },
    {
        question: "Como são utilizadas as doações?",
        answer:
            "Todas as doações são destinadas às atividades missionárias, incluindo passagens, hospedagem, materiais evangelísticos, assistência às comunidades locais e manutenção das operações da missão. Prestamos contas de forma transparente.",
    },
    {
        question: "Preciso ter experiência para ser missionário?",
        answer:
            "Não é necessário ter experiência prévia. O mais importante é ter um coração disposto a servir e amor pelo próximo. Oferecemos treinamento e orientação para todos os voluntários antes das viagens missionárias.",
    },
    {
        question: "Qual a duração das viagens missionárias?",
        answer:
            "As viagens variam de acordo com o projeto e destino. Temos missões de curta duração (1-2 semanas) e projetos mais longos. Cada missão é planejada considerando as necessidades locais e a disponibilidade dos voluntários.",
    },
    {
        question: "Como posso entrar em contato com o Corbã?",
        answer:
            "Você pode nos contatar através das nossas redes sociais, pelo e-mail informado no site ou preenchendo o formulário de contato. Respondemos todas as mensagens o mais rápido possível.",
    },
];

const FAQSection = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation();

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="py-20 lg:py-28 bg-gradient-section"
        >
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left - Images with decorative shapes */}
                    <div className={`relative hidden lg:block scroll-animate-left ${isVisible ? "visible" : ""}`}>
                        {/* Decorative shapes */}
                        <div className="absolute -left-4 top-0 w-40 h-56 bg-primary/20 rounded-3xl -z-10" />
                        <div className="absolute left-32 bottom-0 w-48 h-64 bg-primary/30 rounded-3xl -z-10" />

                        {/* Top image */}
                        <div className="relative ml-8">
                            <div className="w-80 h-96 relative rounded-2xl shadow-card overflow-hidden">
                                <Image
                                    src="/about-team.jpg"
                                    alt="Equipe missionária"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Bottom image - overlapping */}
                        <div className="relative -mt-24 ml-40">
                            <div className="w-80 h-64 relative rounded-2xl shadow-card overflow-hidden">
                                <Image
                                    src="/mission-brasil.jpg"
                                    alt="Missão em ação"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - FAQ Accordion */}
                    <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-foreground mb-8">
                            Perguntas frequentes
                        </h2>

                        <Accordion type="single" collapsible className="space-y-2">
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-card rounded-lg border-none shadow-sm px-4"
                                >
                                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-5">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
