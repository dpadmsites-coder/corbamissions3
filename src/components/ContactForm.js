"use client";

import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
    return (
        <div className="pt-20">
            <CTASection />

            <section className="py-20 bg-card">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-heading font-medium mb-4">Envie uma Mensagem</h2>
                            <p className="text-muted-foreground">Queremos ouvir você. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
                        </div>
                        <form className="space-y-6 p-8 bg-background rounded-2xl shadow-sm border border-border">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input id="name" placeholder="Seu nome completo" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="seu@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefone (opcional)</Label>
                                <Input id="phone" placeholder="(00) 00000-0000" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Assunto</Label>
                                <Input id="subject" placeholder="Como podemos ajudar?" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea id="message" placeholder="Sua mensagem..." className="min-h-[150px]" />
                            </div>
                            <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
                        </form>
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
}
