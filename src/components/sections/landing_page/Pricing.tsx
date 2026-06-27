"use client";

import { motion } from "framer-motion";

import {
  BadgeCheck,
  Clock3,
  FileText,
  Infinity,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "54 LIVE Sessions",
  "24+ Agreements",
  "Assignments & Feedback",
  "Freelancing Training",
  "Networking Sessions",
  "AI Workshops",
  "Career Coaching",
  "Community Access",
  "Lifetime Recordings",
  "Templates & Resources",
];

export default function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto px-6">
        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl space-y-10 text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Enrollment Open
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Invest In Skills That Continue Paying You Back
          </h2>
          <p className="text-muted-foreground text-lg">
            Gain practical drafting expertise, freelancing skills, mentorship,
            networking opportunities and lifetime access.
          </p>
        </motion.div>

        {/* pricing */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="bg-background overflow-hidden rounded-[32px] border shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* left */}

              <div className="p-7 sm:p-10 lg:p-12">
                <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                  Limited Seats Available
                </span>

                <div className="mt-6 sm:mt-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl sm:text-6xl font-bold">₹24,999</span>
                    <span className="text-muted-foreground text-2xl line-through">
                      ₹60,000
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-green-600">
                    Save ₹35,001 Today
                  </p>
                </div>

                <Button size="lg" className="mt-8 h-12 w-full">
                  Enroll Now
                </Button>

                <div className="mt-8 space-y-1 sm:space-y-4">
                  <Feature icon={Clock3} text="6 Months Structured Learning" />
                  <Feature icon={Infinity} text="Lifetime Access" />
                  <Feature icon={Users} text="Mentor Support" />
                </div>
              </div>

              {/* right */}

              <div className="bg-muted/30 p-5 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-semibold">Everything Included</h3>

                <div className="mt-8 space-y-1 sm:space-y-4">
                  {features.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck className="h-5 w-5 text-orange-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-background mt-10 rounded-2xl border p-3 sm:p-6">
                  <div className="flex gap-1">
                    <ShieldCheck className="h-7 w-7 text-green-600 flex-1/6 mt-1" />
                    <div className="flex-5/6">
                      <h4 className="font-semibold text-lg">Money Back Guarantee</h4>
                      <p className="text-muted-foreground text-sm">
                        Attend sessions, complete assignments, meet eligibility
                        criteria, and claim a refund if outcomes aren't
                        achieved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* trust indicators */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <TrustCard icon={Users} value="20,000+" label="Learners Trained" />
            <TrustCard icon={FileText} value="24+" label="Agreements" />
            <TrustCard
              icon={ShieldCheck}
              value="100%"
              label="Money Back Policy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-orange-500" />
      <span>{text}</span>
    </div>
  );
}

function TrustCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-background/20 hover:bg-background/50 flex rounded-3xl border px-5 py-5 shadow-sm backdrop-blur-xl duration-300 gap-3 items-center justify-center">
      <Icon className="h-8 w-8 text-orange-600 mb-2 mx-3" />
      <div className="flex-1">
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
