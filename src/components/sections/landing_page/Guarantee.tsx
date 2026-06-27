"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
  BookOpenCheck,
} from "lucide-react";

const conditions = [
  "Attend at least 66% of sessions",
  "Submit all assignments",
  "Participate in assessments",
  "Apply the concepts taught",
];

export default function Guarantee() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border bg-gradient-to-br from-white/80 to-background/0 backdrop-blur-3xl shadow-lg"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left */}

            <div className="p-5 sm:p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                <ShieldCheck className="h-4 w-4 text-orange-500" />
                Risk-Free Enrollment
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                100% Money Back Guarantee
              </h2>

              <p className="text-muted-foreground mt-5 leading-7">
                We're confident in the transformation this program delivers.
                Complete the course requirements and if you don't see value,
                we'll refund your fee.
              </p>
            </div>

            {/* Right */}

            <div className="bg-background/60 border-t p-5 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
              <h3 className="text-xl font-semibold">Eligibility Criteria</h3>

              <div className="mt-6 space-y-5">
                {conditions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-green-600" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <MiniCard icon={BookOpenCheck} value="54" label="Sessions" />
                <MiniCard icon={ClipboardCheck} value="24+" label="Contracts" />
                <MiniCard icon={ShieldCheck} value="100%" label="Protected" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-background rounded-2xl border px-1 sm:px-5 py-5 text-center">
      <Icon className="mx-auto h-5 w-5 text-orange-500" />
      <div className="mt-3 text-xl sm:text-3xl font-bold">{value}</div>
      <div className="text-muted-foreground text-xs">{label}</div>
    </div>
  );
}
