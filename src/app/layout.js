import "./globals.css";
import Script from "next/script";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Corbã Missions - Ide por Todo Mundo",
  description:
    "Somos uma sociedade e instituição cristã missionária, comprometida em capacitar e equipar novos ministros do evangelho, levando o amor de Cristo ao mundo.",
  keywords: [
    "missões",
    "evangelho",
    "cristão",
    "missionário",
    "Brasil",
    "Austrália",
    "Corbã",
  ],
  authors: [{ name: "Corbã Missions" }],
  metadataBase: new URL("https://corbamissions.com"),
  openGraph: {
    title: "Corbã Missions - Ide por Todo Mundo",
    description:
      "Levando a mensagem de Cristo ao mundo através de missões evangelísticas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Corbã Missions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corbã Missions - Ide por Todo Mundo",
    description:
      "Levando a mensagem de Cristo ao mundo através de missões evangelísticas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        {children}

        {/* Widget Env Script */}
        <Script id="zaia-env" strategy="afterInteractive">
          {`
            window.ZWidget = {
              AgentURL: "https://platform.zaia.app/embed/chat/72123",
            };
          `}
        </Script>

        {/* Widget Loader Script */}
        <Script
          src="https://platform.zaia.app/script/widget-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

