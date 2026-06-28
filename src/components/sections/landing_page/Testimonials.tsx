"use client";

import { motion } from "framer-motion";

import { Quote, Star, BriefcaseBusiness, GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "./data/testimonials";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section className="py-24">
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
            Success Stories
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Loved By Learners, Lawyers & Freelancers
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of learners who have upgraded their drafting skills,
            built portfolios, improved opportunities, and accelerated their
            careers.
          </p>
        </motion.div>

        {/* testimonials */}

        <TestimonialsCarousel />

        {/* <div className="mt-7 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} index={index} item={item} />
          ))}
        </div> */}

        {/* trust strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5"
        >
          <div className="bg-background/20 hover:bg-background/50 rounded-3xl border p-10 px-5 py-4 shadow-sm backdrop-blur-xl duration-300 lg:p-14">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <h3 className="text-4xl font-bold">20,000+</h3>
                <p className="text-muted-foreground">Learners Trained</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold">1000+</h3>
                <p className="text-muted-foreground">Reviews</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold">93.2</h3>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: {
    id: number;
    featured: boolean;
    name: string;
    rating: number;
    review: string;
    role: string;
    organization: string;
    outcome: string;
  };
  index: number;
}) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <Card
        className={`h-full rounded-3xl border transition-all duration-300 ${
          item.featured ? "border-orange-200- bg-orange-50/20" : ""
        } `}
      >
        <CardContent className="px-8 py-4">
          <div className="flex items-center justify-between">
            <Quote className="h-9 w-9 text-orange-600" />

            <div className="flex gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-orange-600 text-orange-600"
                />
              ))}
            </div>
          </div>

          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            "{item.review}"
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">{item.name}</h3>

            <p className="mt-1 text-sm font-medium text-orange-500">
              {item.role}
            </p>

            <p className="text-muted-foreground text-sm">{item.organization}</p>
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1">
              <BriefcaseBusiness className="h-4 w-4 text-green-600" />
              <span className="text-xs font-medium text-green-700">
                {item.outcome}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
