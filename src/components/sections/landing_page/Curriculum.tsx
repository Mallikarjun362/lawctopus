"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  Globe2,
  ShieldCheck,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";
import { curriculum_full_v1, ICurriculumMonth } from "./data/curriculum";

const curriculum = [
  {
    month: "Month 1",
    title: "Essential Contract Drafting",
    icon: FileText,
    topics: [
      "Contract Fundamentals",
      "Definitions & Recitals",
      "Boilerplate Clauses",
      "Confidentiality",
      "Termination Clauses",
    ],
  },

  {
    month: "Month 2",
    title: "Negotiation & Execution",
    icon: Scale,
    topics: [
      "Execution Formalities",
      "Negotiation Skills",
      "Employment Agreements",
      "Software Licensing",
      "NDA Drafting",
    ],
  },

  {
    month: "Month 3",
    title: "International Agreements",
    icon: Globe2,
    topics: [
      "International Contracts",
      "Jurisdiction Clauses",
      "Loan Agreements",
      "Advanced Negotiation",
      "Freelancing Session",
    ],
  },

  {
    month: "Month 4",
    title: "IP & Technology Contracts",
    icon: ShieldCheck,
    topics: [
      "Trademark Agreements",
      "Patent Licensing",
      "Website Terms",
      "Privacy Policies",
      "SaaS Agreements",
    ],
  },

  {
    month: "Month 5",
    title: "Real Estate Agreements",
    icon: Building2,
    topics: [
      "Sale Deed",
      "Power of Attorney",
      "Leave & License",
      "Franchise Agreements",
      "Networking Session",
    ],
  },

  {
    month: "Month 6",
    title: "Business Agreements",
    icon: BriefcaseBusiness,
    topics: [
      "Shareholders Agreement",
      "Partnership Agreement",
      "Joint Venture",
      "Commercial Drafting",
      "Career Growth",
    ],
  },
];

export default function CurriculumTimeline() {
  return (
    <section className="py-24" id="curriculum">
      <div className="container mx-auto px-6">
        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-3 text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            6-Month Roadmap
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Become an Expert Contract Drafting Professional
          </h2>
          <p className="text-muted-foreground text-lg">
            Progress systematically from foundational clauses to advanced
            commercial agreements, freelancing, negotiation, and career
            development.
          </p>
        </motion.div>

        {/* timeline */}

        <div className="relative mt-10">
          <div className="absolute top-10 -bottom-10 left-6 hidden w-px bg-neutral-700 md:block" />
          <div className="space-y-8">
            {curriculum_full_v1
              .slice(0, curriculum_full_v1.length - 1)
              .map((item, index) => (
                <CurriculumCard key={index} index={index} item={item} />
              ))}
          </div>
        </div>
        <div className="mt-7">
          {[curriculum_full_v1[curriculum_full_v1.length - 1]].map(
            (item, index) => (
              <CurriculumCard key={index} index={curriculum_full_v1.length} item={item} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CurriculumCard({
  item,
  index,
}: {
  item: ICurriculumMonth;
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex flex-col gap-6 md:flex-row"
    >
      {/* circle */}

      <div className="bg-primary z-10 mt-2 hidden h-12 w-12 items-center justify-center rounded-full md:flex">
        <Icon className="text-primary-foreground h-6 w-6" />
      </div>

      {/* card */}

      <motion.div
        whileHover={{ y: -4 }}
        className="bg-background flex-1 rounded-3xl border p-6 shadow-sm transition-all hover:shadow-lg sm:p-8"
      >
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            {item.month}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
          {item.title}
        </h3>
        <div className="mt-2 grid gap-1 sm:mt-6 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
          {item.topics.map((topic) => (
            <div key={topic} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-lg text-muted-foreground">{topic}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
