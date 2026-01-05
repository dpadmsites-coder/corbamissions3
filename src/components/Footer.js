import { Heart, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background py-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-heading font-medium mb-4 tracking-wide">
                            Corbã <span className="text-primary">Missions</span>
                        </h3>
                        <p className="text-background/70 mb-6 max-w-md">
                            Uma sociedade e instituição cristã missionária, comprometida em capacitar
                            e equipar novos ministros do evangelho, levando o amor de Cristo ao mundo.
                        </p>
                        <div className="flex items-center gap-2 text-primary">
                            <Heart className="w-5 h-5" />
                            <span className="font-medium">Amor em Ação</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-background/70 hover:text-primary transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="text-background/70 hover:text-primary transition-colors">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/podcast" className="text-background/70 hover:text-primary transition-colors">
                                    Podcast
                                </Link>
                            </li>
                            <li>
                                <div className="text-background/50 text-sm mb-2">Missões</div>
                                <ul className="pl-4 space-y-2 border-l border-background/20">
                                    <li>
                                        <Link href="/missoes/brasil" className="text-background/70 hover:text-primary transition-colors">
                                            Brasil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/missoes/australia" className="text-background/70 hover:text-primary transition-colors">
                                            Austrália
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contato" className="text-background/70 hover:text-primary transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-background/70">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Carazinho, RS - Brasil</span>
                            </li>
                            <li className="flex items-center gap-2 text-background/70">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Sydney, Austrália</span>
                            </li>
                            <li className="flex items-center gap-2 text-background/70">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>corbamissions@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-background/60 text-sm">
                        © {currentYear} Corbã Missions. Todos os direitos reservados.
                    </p>
                    <p className="text-background/60 text-sm">
                        "Ide por todo o mundo e pregai o evangelho" - Marcos 16:15
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
