"use client";

import { motion } from "framer-motion";
import {
  Building2,
  BriefcaseBusiness,
  FileCheck,
  FileText,
  Globe,
  Landmark,
  Lock,
  Scale,
  Shield,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";

const contracts = [
  {
    title: "Non-Disclosure Agreement",
    icon: Lock,
    category: "Corporate",
  },

  {
    title: "Employment Agreement",
    icon: BriefcaseBusiness,
    category: "HR",
  },

  {
    title: "Software Licensing",
    icon: Shield,
    category: "Technology",
  },

  {
    title: "Shareholders Agreement",
    icon: Users,
    category: "Corporate",
  },

  {
    title: "Joint Venture Agreement",
    icon: Globe,
    category: "International",
  },

  {
    title: "Partnership Agreement",
    icon: Wallet,
    category: "Business",
  },

  {
    title: "Trademark Licensing",
    icon: FileCheck,
    category: "IPR",
  },

  {
    title: "Patent Licensing",
    icon: Scale,
    category: "IPR",
  },

  {
    title: "Website Terms",
    icon: ShoppingCart,
    category: "Digital",
  },

  {
    title: "Privacy Policy",
    icon: Shield,
    category: "Digital",
  },

  {
    title: "Sale Deed",
    icon: Landmark,
    category: "Real Estate",
  },

  {
    title: "Power of Attorney",
    icon: Building2,
    category: "Real Estate",
  },
];

export default function ContractsGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-3"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Draft 24+ Agreements
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Build an Industry-Ready Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Gain hands-on experience drafting the contracts companies, startups,
            law firms, founders and clients regularly require.
          </p>
        </motion.div>

        {/* grid */}

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contracts.map((contract, index) => {
            const Icon = contract.icon;
            return (
              <motion.div
                key={contract.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-background rounded-3xl border p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium">
                    {contract.category}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold text-lg sm:text-2xl">
                  {contract.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Practical drafting exercises and expert feedback.
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-muted/40 inline-flex rounded-3xl border px-8 py-6">
            <div>
              <h3 className="text-xl font-semibold">
                Plus 12+ Additional Agreements
              </h3>

              <p className="text-muted-foreground mt-2">
                International contracts, website policies, licensing agreements,
                commercial transactions, startup documentation and much more.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
