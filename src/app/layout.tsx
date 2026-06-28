import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lawctopus - Home",
  description: "Expert Course on Mastering Contract Drafting and Freelancing",
};

import {
  geistMono,
  geistSans,
  inter,
  manrope,
  jakarta,
  dmSans,
  outfit,
  urbanist,
  space,
} from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased dark`} suppressHydrationWarning>
      <body
        className={`flex min-h-full flex-col ${inter.variable} ${manrope.variable} ${jakarta.variable} ${dmSans.variable} ${outfit.variable} ${urbanist.variable} ${space.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
