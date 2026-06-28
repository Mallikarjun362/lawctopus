"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: [0, -2, 0] }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`sticky ${show ? "bottom-4 opacity-100" : "-bottom-100 opacity-0"} z-50 mx-auto mb-8 w-[95%] max-w-5xl duration-500`}
    >
      <motion.div
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="relative overflow-hidden rounded-2xl border-2 border-neutral-300 bg-black/10 text-black shadow-lg backdrop-blur-xl"
      >
        <div className="relative z-10 flex flex-col gap-4 px-3 py-3 sm:flex-row sm:px-6 lg:items-center lg:justify-between">
          <div>
            <div className="text-sm">
              Contract Drafting and Freelancing Course
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="text-2xl font-bold tracking-tight">₹24,999</div>
              <div className="text-sm line-through opacity-70">₹60,000</div>
            </div>
          </div>
          <div className="text-black hidden items-center gap-5 text-sm lg:flex">
            <span>54 LIVE Sessions</span>
            <span>•</span>
            <span>24+ Agreements</span>
            <span>•</span>
            <span>Lifetime Access</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              className="text-md h-10 w-full cursor-pointer rounded-full bg-black px-5 sm:w-auto"
            >
              Enroll Now
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
