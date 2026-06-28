"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import ScrollProgress from "./ScrollProgress";
import { ThemeToggle } from "./toggle_theme_button/Premium";

const nav = [
  { title: "Why Us?", id: "benifits" },
  { title: "Curriculum", id: "curriculum" },
  { title: "Faculty", id: "faculty" },
  { title: "Bonuses", id: "bonuses" },
  { title: "Pricing", id: "pricing" },
  { title: "FAQ", id: "faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b shadow-sm backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* logo */}
        <a href="/#home" className="py-3">
          <div className="flex items-end">
            <div className="-bg-orange-200 -p-1 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
              <img src="https://cdn.lawctopus.com/wp-content/uploads/2019/10/cropped-Favicons-03.png" />
            </div>
            <h2 className="m-font-normal -mb-2 -ml-2.5 text-[24px] font-semibold tracking-wide">
              <span className="text-[#F6A01E]">aw</span>
              <span className="tracking-tighter">ctopus</span>
            </h2>
          </div>
          <p className="pl-3 text-center text-xs tracking-wide">
            The Home of Legal Careers
          </p>
        </a>

        {/* desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.id}`}
              className="text-muted-foreground/70 text-[16px] font-bold transition-colors hover:text-muted-foreground"
            >
              {item.title}
            </a>
          ))}
          <ThemeToggle key="abc" />
        </nav>

        {/* desktop cta */}

        <div className="hidden items-center gap-3 lg:flex">
          <div className="text-right">
            <p className="text-muted-foreground text-xs">Starting At</p>
            <p className="font-semibold">₹24,999</p>
          </div>

          <button className="flex cursor-pointer items-center rounded-full bg-black px-4 py-2 text-[14px] text-white">
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* mobile */}

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent>
            <div className="mx-5 mt-12 space-y-3">
              <ThemeToggle key="theme-toggle" />
              <br />
              {nav.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.id}`}
                  className="block text-lg font-medium"
                >
                  {item.title}
                </a>
              ))}

              <Button className="mt-6 w-full">Enroll Now</Button>
            </div>
          </SheetContent>
        </Sheet>
        <ScrollProgress />
      </div>
    </motion.header>
  );
}
