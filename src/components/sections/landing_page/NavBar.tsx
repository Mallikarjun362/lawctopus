"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const nav = ["Curriculum", "Faculty", "Bonuses", "Pricing", "FAQ"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* logo */}

        <Link href="/" className="">
          <div className="flex items-end">
            <div className="-bg-orange-200 -p-1 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white">
              <img src="https://cdn.lawctopus.com/wp-content/uploads/2019/10/cropped-Favicons-03.png" />
            </div>
            <h2 className="m-font-normal -mb-2 -ml-2.5 text-[28px] font-semibold tracking-wide">
              <span className="text-[#F6A01E]">aw</span>
              <span className="tracking-tighter">ctopus</span>
            </h2>
          </div>
          <p className="pl-3 text-center text-xs tracking-wide">The Home of Legal Careers</p>
        </Link>

        {/* desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* desktop cta */}

        <div className="hidden items-center gap-3 lg:flex">
          <div className="text-right">
            <p className="text-muted-foreground text-xs">Starting At</p>

            <p className="font-semibold">₹24,999</p>
          </div>

          <Button>
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* mobile */}

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent>
            <div className="mx-5 mt-12 space-y-6">
              {nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium"
                >
                  {item}
                </a>
              ))}

              <Button className="mt-6 w-full">Enroll Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
