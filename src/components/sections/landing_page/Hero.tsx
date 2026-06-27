"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CircleCheckBig,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
            }}
          >
            <Badge className="mb-6 rounded-full border-orange-200 bg-orange-100 px-4 py-2 text-orange-700">
              6-Month LIVE Program
            </Badge>

            <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl xl:text-7xl">
              Master Contract Drafting
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                & Earn Through Freelancing
              </span>
            </h1>

            <p className="text-muted-foreground mt-6 max-w-2xl text-lg md:text-xl">
              Learn to draft
              <strong> 24+ high-demand agreements</strong>, work with industry
              experts, build your Upwork profile, and become a confident
              contract drafting freelancer.
            </p>

            {/* metrics */}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "54 LIVE Sessions",
                "24+ Contracts",
                "Assignments + Feedback",
                "Lifetime Access",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-background flex items-center gap-2 rounded-full border px-4 py-2"
                >
                  <CircleCheckBig className="h-4 w-4 text-orange-500" />

                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                <PlayCircle className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>

            {/* social proof */}

            <div className="mt-10 flex flex-wrap gap-5 sm:gap-8">
              <div>
                <p className="text-2xl font-bold">20,000+</p>
                <span className="text-muted-foreground text-sm">
                  Learners Trained
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold">93.2%</p>
                <span className="text-muted-foreground text-sm">
                  Avg Rating
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold">1000+</p>
                <span className="text-muted-foreground text-sm">Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-full"
          >
            <div className="bg-background rounded-3xl border p-5 sm:p-8 shadow-xl">
              <Badge className="mb-5">Limited Seats</Badge>

              <div className="flex items-center gap-3">
                <span className="text-5xl font-bold">₹24,999</span>
                <span className="text-muted-foreground line-through">
                  ₹60,000
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-green-600">
                Save ₹35,001
              </p>

              <div className="my-8 border-t" />

              <div className="space-y-5">
                <Feature
                  icon={<Calendar />}
                  title="6 Months"
                  desc="Structured expert-level curriculum"
                />
                <Feature
                  icon={<Users />}
                  title="54 LIVE Sessions"
                  desc="Industry practitioners"
                />
                <Feature
                  icon={<Star />}
                  title="Freelancing Training"
                  desc="Upwork • LinkedIn • Fiverr"
                />
              </div>

              <Button className="mt-8 h-12 w-full">Reserve Your Seat</Button>

              <p className="text-muted-foreground mt-4 text-center text-xs">
                100% Money Back Guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>
    </div>
  );
}
