import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Zezhou Hu | Theoretical Physics",
  description:
    "Academic homepage of Zezhou Hu, a Ph.D. researcher at Peking University studying the quantum structure of spacetime through holography beyond AdS/CFT and tensionless strings and branes.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Zezhou Hu | Theoretical Physics",
    description:
      "The quantum structure of spacetime: flat and de Sitter holography, QFT across spacetime signatures, and tensionless strings and branes.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zezhou Hu | Theoretical Physics",
    description:
      "The quantum structure of spacetime: flat and de Sitter holography, QFT across spacetime signatures, and tensionless strings and branes.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
