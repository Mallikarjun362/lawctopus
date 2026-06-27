"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="sticky bottom-4 w-[95%] max-w-5xl mx-auto mb-10"
    >
      <div className="bg-background/95 rounded-2xl border px-5 py-3 sm:px-5 sm:py-4 shadow-2xl backdrop-blur-xl" >
        <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
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
