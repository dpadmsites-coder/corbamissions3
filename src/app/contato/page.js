
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contato - Corbã Missions",
    description: "Entre em contato conosco. Tire suas dúvidas sobre missões, doações ou como se tornar um voluntário.",
};

export default function Contato() {
    return (
        <main className="min-h-screen bg-background">

            <ContactForm />
            <Footer />
        </main>
    );
}
