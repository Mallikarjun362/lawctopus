"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const links = {
  course: ["Curriculum", "Faculty", "Bonuses", "Pricing"],
  company: ["About", "Blog", "Careers", "Contact"],
  legal: ["Terms", "Privacy", "Refund Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      {/* CTA */}

      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border bg-gradient-to-br from-orange-500 to-orange-600 p-10 text-white"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-sm font-medium opacity-90">
                Enrollment Closing Soon
              </span>

              <h2 className="mt-3 text-4xl font-bold">
                Become Industry Ready In Contract Drafting
              </h2>

              <p className="mt-4 max-w-2xl text-orange-100">
                Learn practical drafting, freelancing, negotiation, client
                acquisition and build a portfolio that helps you stand out.
              </p>
            </div>

            <Button size="lg" variant="secondary" className="h-12 px-8">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* footer */}

      <section className="container mx-auto px-6 pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* brand */}

          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-bold">Lawctopus</h3>

            <div className="max-w-sm">
              <p>Lawctopus, 2nd Floor, Seat No. 17,</p>
              <p>Sector 35B, S.C.O 339-340,</p>
              <p>Chandigarh (U.T.) - 160022, India</p>
            </div>

            <div>
              <b>Hours:</b> 11 AM - 7 PM (Mon-Fri)
            </div>

            <p className="text-muted-foreground max-w-sm">
              Practical legal education designed for students, lawyers,
              freelancers and professionals.
            </p>

            <div className="flex gap-4">
              <Social icon={Mail} href="mailto:contact@lawctopus.com"/>
              <Social icon={BsFacebook} href="https://www.facebook.com/lawctopus/"/>
              <Social icon={BsTwitter} href="https://www.twitter.com/lawctopus"/>
              <Social icon={BsYoutube} href="https://www.youtube.com/channel/UC6fghSCgphfU1U4FfRF7pSg"/>
              <Social icon={BsInstagram} href="https://www.instagram.com/lawctopus.official/"/>
              <Social icon={BsLinkedin} href="https://www.linkedin.com/company/lawctopus"/>
            </div>
          </div>

          {/* navigation */}

          <FooterColumn title="Course" items={links.course} />
          <FooterColumn title="Company" items={links.company} />
          <FooterColumn title="Legal" items={links.legal} />
        </div>

        {/* bottom */}

        <div className="text-muted-foreground mt-12 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:justify-between">
          <span>© 2026 Lawctopus. All rights reserved.</span>

          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="h-4 w-4" />
              +91 90235 43927
            </span>

            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              contact@lawctopus.com
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-muted-foreground hover:text-foreground block text-sm transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Social({ icon: Icon, href="#" }: { icon: React.ElementType, href?: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:bg-background flex h-10 w-10 items-center justify-center rounded-xl border transition-colors group/card"
    >
      <Icon className="h-4 w-4 group-hover/card:scale-110 duration-300" />
    </Link>
  );
}
