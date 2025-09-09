import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";


export const metadata: Metadata = {
  title: "Muhammad Yusuf - Full Stack Developer | Portfolio",
  description:
    "Muhammad Yusuf - Professional Full Stack Developer from Tashkent, Uzbekistan. Expert in React, Node.js, TypeScript, and modern web technologies. View my projects, skills, and experience.",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  keywords: [
    "Muhammad Yusuf",
    "Muhammad Yusuf Nasrulloh",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Uzbekistan",
    "Tashkent Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "JavaScript Developer",
    "Next.js Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
  ],
  authors: [{ name: "Muhammad Yusuf" }],
  creator: "Muhammad Yusuf",
  publisher: "Muhammad Yusuf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://muhammad-yusuf.uz"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Muhammad Yusuf - Full Stack Developer Portfolio",
    description:
      "Professional Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Based in Tashkent, Uzbekistan.",
    url: "https://muhammad-yusuf.uz",
    siteName: "Muhammad Yusuf Nasrulloh",
    images: [
      {
        url: "/myImg.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Yusuf - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yusuf - Full Stack Developer Portfolio",
    description:
      "Professional Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    images: ["https://www.muhammad-yusuf.uz/myImg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      "google-site-verification=pGjS4zQzBTsiXmh_QOqD-NAmW9TH_982Mt-3gTedxGQ", // Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="author" content="Muhammad Yusuf Nasrulloh" />
        <meta
          name="description"
          content="Muhammad Yusuf Nasrulloh - Full Stack Developer portfolio from Tashkent, Uzbekistan. React, Node.js, TypeScript expert."
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="twitter:image"
          content="https://www.muhammad-yusuf.uz/myImg.jpg"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Muhammad Yusuf Portfolio"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="canonical" href="https://muhammad-yusuf.uz" />
        <meta
          name="google-site-verification"
          content="pGjS4zQzBTsiXmh_QOqD-NAmW9TH_982Mt-3gTedxGQ"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Yusuf Nasrulloh",
              url: "https://muhammad-yusuf.uz",
              sameAs: [
                "https://github.com/muhammadyusuf622",
                "https://www.linkedin.com/in/muhammad-yusuf-nasrulloh-1757a2357/",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Portfolio",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
