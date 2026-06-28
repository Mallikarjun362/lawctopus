"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    q: "Who should join this course?",
    a: "Law students, lawyers, in-house counsel, freelancers, founders, and professionals looking to strengthen their contract drafting skills.",
  },
  {
    q: "Is this course suitable for beginners?",
    a: "Yes. The curriculum progresses from drafting fundamentals to advanced commercial agreements and practical freelancing skills.",
  },
  {
    q: "How many contracts will I learn?",
    a: "You'll work on 24+ agreements including NDAs, employment contracts, shareholder agreements, licensing agreements, privacy policies and more.",
  },
  {
    q: "Will recordings be available?",
    a: "Yes. All live sessions are recorded and remain accessible through lifetime access.",
  },
  {
    q: "Does the course cover freelancing?",
    a: "Absolutely. The program includes Upwork profile building, proposal writing, LinkedIn optimisation, networking and client acquisition.",
  },
  {
    q: "What is the refund policy?",
    a: "Learners meeting attendance, assignment and assessment requirements are eligible for the money-back guarantee.",
  },
  {
    q: "Can working professionals participate?",
    a: "Yes. Sessions are designed to accommodate working professionals and recordings ensure flexibility.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-3 text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Everything You Need To Know
          </h2>
          <p className="text-lg text-muted-foreground">
            Still have questions? We've answered the most common queries
            learners ask before enrolling.
          </p>
        </motion.div>

        {/* questions */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <Accordion type="multiple" className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background rounded-xl border px-6"
              >
                <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-7 text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* support card */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-1"
        >
          <div className="mx-auto max-w-4xl space-y-5 p-8 text-center">
            <Link
              href="mailto:courses@lawctopus.com"
              className="text-black block rounded-xl px-5 md:px-10 py-3 font-medium border border-neutral-500 hover:border-black duration-200"
            >
              Still Have Questions? Email us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
