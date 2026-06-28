"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className={`sticky ${show ? "bottom-4 opacity-100" : "-bottom-100 opacity-0"} duration-700 mx-auto mb-10 w-[95%] max-w-5xl`}
    >
      <div className="bg-background/95 rounded-2xl border px-5 py-3 shadow-2xl backdrop-blur-xl sm:px-5 sm:py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* left */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">₹24,999</span>
              <span className="text-muted-foreground text-sm line-through">
                ₹60,000
              </span>
            </div>
            <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span>Money Back Guarantee</span>
            </div>
          </div>

          {/* center */}

          <div className="text-muted-foreground hidden items-center gap-6 text-sm lg:flex">
            <span>54 LIVE Sessions</span>
            <span>•</span>
            <span>24+ Agreements</span>
            <span>•</span>
            <span>Lifetime Access</span>
          </div>

          {/* button */}

          <Button size="lg" className="h-12 px-7">
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
