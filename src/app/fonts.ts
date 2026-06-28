import {
  Inter,
  Manrope,
  Plus_Jakarta_Sans,
  DM_Sans,
  Space_Grotesk,
  Outfit,
  Urbanist,
  Geist,
  Geist_Mono,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
