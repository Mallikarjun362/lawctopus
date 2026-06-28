"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CircleCheckBig,
  PlayCircle,
  Download,
  Star,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10" id="home">
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
            <h1 className="text-5xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Master Contract Drafting
              <span className="block bg-orange-400 bg-clip-text pb-4 text-transparent">
                & Earn Through Freelancing
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Learn to draft
              <strong> 24+ high-demand agreements</strong>, work with industry
              experts, build your Upwork profile, and become a confident
              contract drafting freelancer.
            </p>

            {/* metrics */}

            {/* <div className="mt-8 flex flex-wrap gap-3">
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
            </div> */}

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 cursor-pointer px-8 text-lg">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 cursor-pointer text-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>

            {/* social proof */}

            <div className="mt-10 flex items-stretch gap-5 sm:gap-8">
              <div>
                <p className="text-2xl font-bold">
                  <CountUp autoAnimate end={20000} duration={2} decimals={0} />+
                </p>
                <p className="text-muted-foreground text-sm">
                  Learners Trained
                </p>
              </div>
              <div className="my-2 border-l-2 border-neutral-400" />
              <div>
                <p className="text-2xl font-bold">
                  <CountUp autoAnimate end={93.2} duration={2} decimals={1} />%
                </p>
                <p className="text-muted-foreground text-sm">Avg Rating</p>
              </div>
              <div className="my-2 border-l-2 border-neutral-400" />
              <div>
                <p className="text-2xl font-bold">
                  <CountUp autoAnimate end={1000} duration={2} decimals={0} />+
                </p>
                <p className="text-muted-foreground text-sm">Reviews</p>
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
            <div className="bg-background rounded-3xl border p-5 shadow-xl sm:p-8">
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
                <Feature
                  icon={<CircleCheckBig />}
                  title="24+ Contracts"
                  desc="Hands-on realworld Contracts"
                />
              </div>

              <Button className="text-md mt-8 h-12 w-full">
                Reserve Your Seat
              </Button>

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
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-muted-foreground -mt-1 text-sm">{desc}</p>
      </div>
    </div>
  );
}
