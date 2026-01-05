
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";

export const metadata = {
    title: "Sobre Nós - Corbã Missions",
    description: "Conheça nossa história, visão e valores. Somos uma instituição cristã comprometida com o Evangelho.",
};

export default function Sobre() {
    return (
        <main className="min-h-screen bg-background">

            <div className="pt-20">
                <AboutSection />
                <Values />
            </div>
            <Footer />
        </main>
    );
}
