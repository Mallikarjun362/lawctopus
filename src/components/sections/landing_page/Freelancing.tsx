"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  MessageSquareText,
  Rocket,
  Users,
  Handshake,
} from "lucide-react";

const items = [
  {
    title: "Build Your Upwork Profile",
    description:
      "Learn profile optimization strategies used by successful legal freelancers.",
    icon: Rocket,
  },

  {
    title: "Win Clients with Better Proposals",
    description:
      "Write proposals that stand out and improve your chances of securing projects.",
    icon: FileText,
  },

  {
    title: "LinkedIn Optimization",
    description:
      "Create a professional presence that attracts recruiters, firms, and clients.",
    icon: Handshake,
  },

  {
    title: "Networking Mastery",
    description:
      "Learn how lawyers build opportunities through relationships and referrals.",
    icon: Users,
  },

  {
    title: "Career Coaching",
    description:
      "Receive guidance from faculty members and industry professionals.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Freelancing Confidence",
    description:
      "Learn pricing, negotiations, client communication, and project management.",
    icon: MessageSquareText,
  },
];

export default function Freelancing() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* decorative bg */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex rounded-full border px-4 py-2 text-sm font-medium">
              Beyond Contract Drafting
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Learn Skills That Help You Start Earning
            </h2>
            <p className="text-muted-foreground mt-6 text-lg">
              Most drafting courses stop at legal concepts. This program goes
              further. Learn how to position yourself as a legal freelancer,
              build credibility, attract opportunities, and confidently work
              with clients.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Upwork Profile Building",
                "CV & Cover Letter Reviews",
                "LinkedIn Optimization",
                "Networking Sessions",
                "Proposal Writing",
                "Client Negotiation",
                "Freelancing Opportunities",
                "Career Coaching",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-orange-500" />

                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right */}

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="bg-background rounded-3xl border p-6 shadow-sm transition-all hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-3 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
