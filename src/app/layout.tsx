import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Muhammad Yusuf - Full Stack Developer | Portfolio",
  description: "Muhammad Yusuf - Professional Full Stack Developer from Tashkent, Uzbekistan. Expert in React, Node.js, TypeScript, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Muhammad Yusuf",
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
    "PostgreSQL Developer"
  ],
  authors: [{ name: "Muhammad Yusuf" }],
  creator: "Muhammad Yusuf",
  publisher: "Muhammad Yusuf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // O'z domainizni kiriting
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammad Yusuf - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Based in Tashkent, Uzbekistan.",
    url: 'https://your-domain.com', // O'z domainizni kiriting
    siteName: 'Muhammad Yusuf Portfolio',
    images: [
      {
        url: '/myImg.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Yusuf - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muhammad Yusuf - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    images: ['/myImg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console verification code
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Muhammad Yusuf Portfolio" />
        <link rel="apple-touch-icon" href="/myImg.jpg" />
        <link rel="icon" type="image/jpeg" href="/myImg.jpg" />
        <link rel="canonical" href="https://your-domain.com" />
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
