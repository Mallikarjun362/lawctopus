"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FileSignature,
  Infinity,
  MessageCircleMore,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Draft 24+ High-Demand Agreements",
    description:
      "Master real-world contracts including NDAs, Shareholders Agreements, Licensing Agreements, Website Policies and more.",
    icon: FileSignature,
  },

  {
    title: "Start Earning Through Freelancing",
    description:
      "Build your Upwork profile, learn proposal writing, and confidently land your first contract drafting client.",
    icon: TrendingUp,
  },

  {
    title: "Personalized Feedback",
    description:
      "Draft contracts yourself and receive detailed reviews from experienced practitioners.",
    icon: MessageCircleMore,
  },

  {
    title: "Lifetime Access",
    description:
      "Access recordings, resources, templates, assignments, and updated materials forever.",
    icon: Infinity,
  },

  {
    title: "Networking & Career Growth",
    description:
      "Participate in dedicated networking sessions and expand professional opportunities.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Save Years of Practice",
    description:
      "Acquire in six months the practical drafting expertise lawyers usually develop after years in the profession.",
    icon: Sparkles,
  },
];

export default function Benefits() {
  return (
    <section className="py-24" id="benifits">
      <div className="container mx-auto px-6">
        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-3"
        >
          <p className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Why Students Choose This Course
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Learn Skills That Translate Into Opportunities
          </h2>
          <p className="text-muted-foreground text-lg">
            Go beyond theory and build practical expertise that helps you draft
            contracts, freelance, network effectively, and accelerate your legal
            career.
          </p>
        </motion.div>

        {/* cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-background rounded-3xl border p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                  <Icon className="h-7 w-7 text-orange-700" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground mt-3">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
