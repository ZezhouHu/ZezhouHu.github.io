import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Zezhou Hu | Theoretical Physics",
  description:
    "Zezhou Hu is a Ph.D. student in theoretical physics at Peking University. His research focuses on flat-space and de Sitter holography, and tensionless strings and branes.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Zezhou Hu | Theoretical Physics",
    description:
      "Research on flat-space and de Sitter holography, quantum field theory, and tensionless strings and branes.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zezhou Hu | Theoretical Physics",
    description:
      "Research on flat-space and de Sitter holography, quantum field theory, and tensionless strings and branes.",
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
