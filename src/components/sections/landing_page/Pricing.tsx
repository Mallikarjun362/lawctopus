"use client";

import { motion } from "framer-motion";

import {
  BadgeCheck,
  Clock3,
  FileText,
  Infinity,
  ShieldCheck,
  Users,
  Medal,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "54 Expert-Led LIVE Sessions",
  "24+ Industry-Standard Agreements",
  "Personalized Draft Reviews",
  "1:1 Feedback on Assignments",
  "Contract Drafting Certification",
  "Freelancing & Client Acquisition Training",
  "Real Commercial Drafting Exercises",
  "Negotiation & Redlining Workshops",
  "AI Tools for Modern Lawyers",
  "Career Coaching & Mentorship",
  "Exclusive Networking Opportunities",
  "Premium Templates & Clause Library",
  "Private Community Access",
  "Lifetime Access to Recordings",
  "Continuous Updates & Resources",
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
          className="mx-auto max-w-5xl space-y-3 text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Enrollment Open
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Invest In Skills That Continue Paying You Back
          </h2>
          <p className="text-lg text-muted-foreground">
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
          className="mx-auto mt-7 max-w-6xl"
        >
          <div className="bg-background overflow-hidden rounded-[32px] border shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* left */}

              <div className="p-7 sm:p-10 lg:p-12">
                <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                  Limited Seats Available
                </span>

                <div className="mt-6">
                  <div className="flex gap-4">
                    <span className="text-4xl font-bold sm:text-6xl">
                      ₹24,999
                    </span>
                    <span className="mt-2 text-2xl text-muted-foreground line-through">
                      ₹60,000
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-green-600">
                    Save ₹35,001 Today
                  </p>
                </div>

                <Button
                  size="lg"
                  className="mt-8 h-12 w-full text-lg font-bold tracking-wider"
                >
                  Enroll Now
                </Button>

                <div className="mt-8 space-y-1 sm:space-y-2">
                  <Feature icon={Clock3} text="6 Months Structured Learning" />
                  <Feature icon={Infinity} text="Lifetime Access" />
                  <Feature icon={Users} text="Mentor Support" />
                  <Feature
                    icon={Medal}
                    text="Merit certificates are awarded to best-performing learners"
                  />
                </div>
                <div className="mt-10 rounded-2xl border border-green-200/50 bg-green-200/10 p-3 sm:p-3">
                  <div className="flex gap-1">
                    <ShieldCheck className="mt-1 h-7 w-10 text-green-600" />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-muted-background">
                        Money Back Guarantee
                      </h4>
                      <p className="text-sm text-accent-background">
                        Attend sessions, complete assignments, meet eligibility
                        criteria, and claim a refund if outcomes aren't
                        achieved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}

              <div className="bg-muted/30 p-5 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-semibold">Everything Included</h3>

                <div className="mt-8 space-y-1 sm:space-y-3">
                  {features.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
    <div className="bg-background/20 hover:bg-background/50 flex items-center justify-center gap-3 rounded-3xl border px-5 py-5 shadow-sm backdrop-blur-xl duration-300">
      <Icon className="mx-3 mb-2 h-8 w-8 text-orange-600" />
      <div className="flex-1">
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
