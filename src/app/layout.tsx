import "../styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OTTO Cyprien - Développeur Full-Stack",
  description: "CV de OTTO Cyprien, Développeur Full-Stack et DevOps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
