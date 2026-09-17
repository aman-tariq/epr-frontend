"use client";

import { motion, type Variants } from "framer-motion";
import {
  UserCheck,
  ReceiptText,
  Network,
  MapPinned,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: UserCheck,
    title: "Dedicated Compliance Expert",
    description:
      "A single point of contact who understands your business and manages your EPR obligations end-to-end.",
  },
  {
    icon: ReceiptText,
    title: "No Hidden Charges",
    description:
      "Transparent, upfront pricing on every service — no surprise fees at any stage of the process.",
  },
  {
    icon: Network,
    title: "Verified Recycler Network",
    description:
      "Access to a vetted, CPCB-authorized network of recyclers across India for compliant material handling.",
  },
  {
    icon: MapPinned,
    title: "PAN India Support",
    description:
      "On-ground coordination and support across all states and union territories, wherever your operations are based.",
  },
  {
    icon: FileCheck2,
    title: "Fast Documentation",
    description:
      "Rapid turnaround on certificates, filings, and regulatory paperwork so you're never stuck waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Compliance",
    description:
      "Ongoing monitoring and renewal support that keeps you compliant well beyond the first filing cycle.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.4, ease: "easeInOut" },
  },
};

export default function TrustFlowSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative py-16"
    >
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
          Why Businesses Trust EPR Nexuss
        </h2>
        <p className="font-sans text-muted-foreground mt-3">
          A compliance process built for clarity, speed, and long-term
          reliability — not one-time paperwork.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Animated connecting line */}
        {/* <motion.div
          variants={lineVariants}
          style={{ originY: 0 }}
          className="absolute left-6 top-2 bottom-2 w-[2px] bg-[#5AC361]/30 md:left-1/2 md:-translate-x-1/2"
        /> */}

        <ul className="space-y-10">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.li
                key={point.title}
                custom={i}
                variants={itemVariants}
                className="relative flex items-start gap-5 pl-0 md:pl-0"
              >
                {/* Icon node */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card border border-[#5AC361]/40 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-[#5AC361]" strokeWidth={2} />
                </motion.div>

                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}