"use client";

import { motion } from "framer-motion";

import {
  Bot,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Gift,
  Sparkles,
} from "lucide-react";

const bonuses = [
  {
    title: "AI for Lawyers Workshop",
    description:
      "Get access to a structured 4-hour workshop covering AI for legal research, drafting, mooting, and litigation.",
    icon: Brain,
    value: "Bonus Value ₹7,999",
  },

  {
    title: "Prism Access",
    description:
      "Receive complimentary access to Indian Kanoon's AI-powered legal research tool.",
    icon: Bot,
    value: "Bonus Value ₹2,999",
  },

  {
    title: "31-Page AI Prompt Library",
    description:
      "Curated prompts designed specifically for law students, lawyers and contract professionals.",
    icon: BookOpen,
    value: "Bonus Value ₹3,499",
  },

  {
    title: "Career Coaching",
    description:
      "Bi-monthly one-on-one mentoring sessions with faculty and industry experts.",
    icon: BriefcaseBusiness,
    value: "Bonus Value ₹9,999",
  },

  {
    title: "Alumni Community",
    description:
      "Exclusive internship, freelancing and job opportunities through alumni networks.",
    icon: Sparkles,
    value: "Bonus Value ₹4,999",
  },

  {
    title: "Free Webinars",
    description:
      "Attend advanced sessions on negotiation, contracts, AI and legal careers.",
    icon: Gift,
    value: "Bonus Value ₹5,999",
  },
];

export default function Bonuses() {
  return (
    <section className="py-24" id="bonuses">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-3 text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Bonuses Included
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            More Than Just A Course
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond drafting contracts, you'll receive AI resources, career
            mentorship, community access and practical tools designed to
            accelerate your growth.
          </p>
        </motion.div>

        <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;

            return (
              <motion.div
                key={bonus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-background rounded-3xl border p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="rounded-full bg-green-100/20 px-3 py-1 text-xs font-medium text-green-400">
                    {bonus.value}
                  </span>
                </div>
                <h3 className="mt-6 text-xl sm:text-2xl font-semibold">{bonus.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {bonus.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Value Stack */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-2"
        >
          <div className="p-10 text-center backdrop-blur-xl">
            <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
              Included At No Extra Cost
            </p>
            <h3 className="mt-3 text-4xl font-bold">₹35,000+ Bonus Value</h3>
            <p className="text-muted-foreground mt-3">
              AI workshops, career coaching, premium resources, alumni
              community, networking opportunities and industry insights.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
