"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          className="mx-auto max-w-3xl text-center space-y-10"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="text-muted-foreground text-lg">
            Still have questions? We've answered the most common queries
            learners ask before enrolling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background rounded-2xl border px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-7">
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
          className="mt-14"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border bg-orange-50 p-8 text-center">
            <h3 className="text-2xl font-semibold">Still Have Questions?</h3>

            <p className="text-muted-foreground mt-3">
              Speak with our admissions team to understand whether this program
              aligns with your career goals.
            </p>

            <button className="bg-primary text-primary-foreground mt-6 rounded-xl px-6 py-3 font-medium">
              Talk To An Advisor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
