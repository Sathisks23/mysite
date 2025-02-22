import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sathish Kumar S - Full Stack Developer| MERN Stack developer | AI & SEO Freelancer",
  description:
    "Freelance Full Stack Developer specializing in MERN Stack, Python, AI Robotics, and SEO. Hire me for top-quality web development and automation.",
  keywords:
    "Full Stack Developer, MERN Stack Developer, Python Developer, SEO Expert, AI Robotics Freelancer, Next.js Developer, Hire Web Developer,Freelance web developer,Freelance Full Stack Developer, Freelance Python Developer,Node js Developer ,Freelance Node js Developer ",
  openGraph: {
    title: "Sathish Diaries - Full Stack, AI & SEO Freelancer",
    description:
      "Freelance Full Stack Developer specializing in MERN, Python, AI Robotics, and SEO. Get high-performance web applications and automation solutions.",
    images: [{ url: "/sathish.jpg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="uvZ3FIqlGxeTrYfKvjDBMVI980FIDsfUvG3Lj0lCvls" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
