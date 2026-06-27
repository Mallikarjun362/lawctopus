"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 20000,
    suffix: "+",
    label: "Learners Trained",
  },

  {
    value: 1000,
    suffix: "+",
    label: "Reviews",
  },

  {
    value: 93.2,
    suffix: "/100",
    decimals: 1,
    label: "Average Rating",
  },

  {
    value: 54,
    suffix: "",
    label: "LIVE Sessions",
  },

  {
    value: 24,
    suffix: "+",
    label: "Contracts Drafted",
  },
];

export default function Stats() {
  return (
    <section className="relative py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background/20 hover:bg-background/50 duration-300 rounded-3xl border p-10 px-5 py-4 shadow-sm backdrop-blur-xl lg:p-14"
        >
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                  <CountUp
                    autoAnimate
                    end={item.value}
                    duration={2}
                    decimals={item.decimals || 0}
                  />
                  <span className="ml-2">{item.suffix}</span>
                </h3>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
