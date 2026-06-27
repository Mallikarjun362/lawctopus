"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Card({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-background flex-1 rounded-3xl border p-8 shadow-sm transition-all hover:shadow-lg"
    >
      <h3 className="text-2xl font-semibold">{children}</h3>
    </motion.div>
  );
}

const faculty = [
  {
    id: 1,
    name: "Shashank Sardesai",
    role: "Independent Litigator & Company Secretary",
    experience:
      "Co-founder of EverTrust Legal. Previously associated with Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/08/Shashank-Sardesai.png",
    badge: "Corporate Law",
  },

  {
    id: 2,
    name: "Akanksha Mishra",
    role: "Head, Lawctopus Law School",
    experience:
      "Independent litigator and Head of Lawctopus Law School. Has taught 1500+ learners with an average rating of 96.5/100.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/08/Akanksha-Mishra.png",
    badge: "Contract Drafting",
  },

  {
    id: 3,
    name: "Pranjal Doshi",
    role: "Associate, Walker Morris LLP",
    experience:
      "Cambridge graduate specializing in M&A and private equity transactions. Formerly with Trilegal and Khaitan & Co.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/08/Pranjal-Doshi.png",
    badge: "M&A",
  },

  {
    id: 4,
    name: "Arunima Jha",
    role: "Head Legal Counsel, Omnicom Media Group",
    experience:
      "10+ years of experience in media, privacy and corporate law. Former Legal Counsel at BookMyShow and K Raheja Corp.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/08/Arunima-Jha.png",
    badge: "Media Law",
  },

  {
    id: 5,
    name: "Adv. Jaibatruka Mohanta",
    role: "Research Associate, CEERA, NLSIU",
    experience:
      "Practicing advocate involved in criminal law reforms, public policy, procurement and tendering.",
    image: "https://cdn.lawctopus.com/wp-content/uploads/2024/08/Jai.png",
    badge: "Public Policy",
  },

  {
    id: 6,
    name: "H. B. Keshava",
    role: "Managing Attorney, Baskaran & Associates",
    experience:
      "IPR practitioner based in Pune with expertise in intellectual property and advisory services.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/08/H.-B-Keshava.jpg",
    badge: "IPR",
  },

  {
    id: 7,
    name: "Gourav Mohanty",
    role: "Independent Advocate",
    experience:
      "Former Senior Associate at SAM. Gold medalist from Symbiosis Law School and award-winning contract drafter.",
    image: "https://cdn.lawctopus.com/wp-content/uploads/2024/08/Gourav-1.png",
    badge: "Dispute Resolution",
  },

  {
    id: 8,
    name: "Anup Menon V",
    role: "Senior Legal Counsel",
    experience:
      "Corporate lawyer advising clients across India and internationally in banking, technology and startup sectors.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/10/Anup-Menon.png",
    badge: "Corporate Advisory",
  },

  {
    id: 9,
    name: "Tanuj Kalia",
    role: "Founder & CEO, Lawctopus",
    experience:
      "Author of 'Law as a Career', Business World Legal 40 Under 40 awardee and experienced negotiator.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/11/Tanuj-Kalia.png",
    badge: "Negotiation",
  },

  {
    id: 10,
    name: "Bhumesh Verma",
    role: "Managing Partner, Corp Comm Legal",
    experience:
      "25+ years of corporate law experience. Former partner at Khaitan & Co. and author of Practical Guide to Drafting Commercial Contracts.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2023/01/Bhumesh-Varma_Faculty_0017_Group-4.png",
    badge: "Corporate Practice",
  },

  {
    id: 11,
    name: "Shayonee Dasgupta",
    role: "Lead Researcher & Content Developer",
    experience:
      "Former associate at Trilegal and Shardul Amarchand Mangaldas. Consultant at IDIA and legal education specialist.",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/02/Shayonee-Dasgupta_Faculty_0012_Group-9.png",
    badge: "Research",
  },

  {
    id: 12,
    name: "Debanshu Khettry",
    role: "Founder, SILC",
    experience:
      "Corporate lawyer, angel investor and founder of Standard Indian Legal Citation (SILC).",
    image:
      "https://cdn.lawctopus.com/wp-content/uploads/2024/02/Debanshu-Khettry-Faculty_0015_Group-6.png",
    badge: "Corporate Law",
  },
];

export default function Faculty() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <section className="overflow-hidden py-24" id="faculty">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center space-y-10"
          >
            <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
              Learn From Practitioners
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Meet Your Faculty
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn from lawyers, founders, corporate counsel, freelancers, and
              practitioners who work with these agreements daily.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 md:grid-cols-3 xl:grid-cols-4">
            {faculty
              .slice(0, showMore ? faculty.length : 4)
              .map((person, index) => {
                return (
                  <motion.div
                    key={person.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="bg-background overflow-hidden rounded-3xl border shadow-sm transition-all hover:shadow-xl"
                  >
                    <div className="bg-muted relative aspect-[10/10]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                        {person.badge}
                      </div>
                      <h3 className="mt-4 text-3xl font-semibold">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-orange-500">
                        {person.role}
                      </p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {person.experience}
                      </p>

                      <div className="mt-6 flex gap-5">
                        <div className="flex items-center gap-2">
                          <BriefcaseBusiness className="h-4 w-4 text-orange-500" />

                          <span className="text-sm">Industry</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-orange-500" />

                          <span className="text-sm">Mentor</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-orange-500" />

                          <span className="text-sm">Expert</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
          <div className="mt-5 flex items-center justify-center">
            {showMore ? (
              <Link
                href="#faculty"
                className="mx-auto rounded-full border border-neutral-200 px-5 py-2"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </Link>
            ) : (
              <button
                className="mx-auto rounded-full border border-neutral-200 px-5 py-2"
                onClick={() => setShowMore(true)}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
