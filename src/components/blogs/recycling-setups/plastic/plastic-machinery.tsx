import React from "react";
import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const machineData = [
  { name: "Shredder / Crusher", value: 10 },
  { name: "Washing Line", value: 9 },
  { name: "Drying Unit", value: 8 },
  { name: "Extruder / Pelletizer", value: 10 },
  { name: "Sorting Conveyor", value: 7 },
  { name: "Control Panel", value: 8 },
];

const performanceData = [
  { name: "Output Consistency", before: 6, after: 10 },
  { name: "Breakdowns", before: 9, after: 4 },
  { name: "Material Wastage", before: 8, after: 3 },
  { name: "Labor Dependency", before: 7, after: 5 },
  { name: "Production Confidence", before: 6, after: 10 },
];

const PlasticMachinery: React.FC = () => (
  <>
    <Seo
      title="How to Choose the Right Machinery for Plastic Recycling Plant - Complete Guide 2026"
      description="Complete guide on selecting the best machinery for Plastic Recycling Plant in India. Learn about shredder, washing line, extruder, pelletizer, and smart equipment planning to start a profitable plastic recycling business."
      keywords={[
        "How to Choose Machinery for Plastic Recycling Plant",
        "Best Machines for Plastic Recycling",
        "Plastic Recycling Plant Machinery Guide",
        "Shredder Washing Line Extruder for Plastic Recycling",
        "How to Start Plastic Recycling Plant Machinery",
        "Plastic Scrap Recycling Equipment Selection",
        "Plastic Recycling Business Setup Machinery",
        "PET HDPE PP Recycling Machinery Cost",
        "Best Plastic Recycling Machines in India",
        "Plastic Flakes to Pellets Machinery",
        "Plastic Recycling Plant Layout and Machinery",
        "Plastic Waste Recycling Plant Setup Guide",
      ]}
      url="https://eprnexuss.com/blog/plastic-machinery"
      type="article"
    />

    <article className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      {/* Grid container to hold main content and sticky sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-12 items-start">
        <main className="min-w-0">
          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {["Plastic Recycling", "Machinery", "Equipment", "Plant Design"].map((tag) => (
              <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          {/* Intro */}
          <div className="mb-14 rounded-3xl border border-border bg-card p-6 md:p-10">
            <h1 className="mb-5 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
              From Plastic Waste to a Smarter, More Profitable Plant
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
              The right machinery does more than process waste. It improves quality, reduces downtime, lowers operating cost, and helps your recycling business grow with confidence.
            </p>
          </div>

          {/* Stats Section */}
          <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Better Output", "Stable processing and consistent material quality"],
              ["Lower Waste", "Less rejection during washing, drying, and pelletizing"],
              ["Less Downtime", "Machines selected to suit real operating conditions"],
              ["Easy Expansion", "Layout and capacity planned for future growth"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
                <p className="leading-7 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </section>

          {/* Why Machinery Matters */}
          <section className="mb-16">
            <h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">Why Machinery Selection Matters So Much</h2>
            <p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
              A recycling plant can only perform well when the machinery matches the material, capacity, and business model.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                ["Right machine, right purpose", "PET bottles, HDPE containers, rigid plastic, and mixed scrap all need different handling."],
                ["Better plant performance", "Good machinery improves speed, quality, and consistency."],
                ["Long-term savings", "Well-planned setups reduce maintenance issues and power waste."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
                  <p className="leading-7 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How We Help */}
          <section className="mb-16">
            <h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">How We Help Clients at Every Stage</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { title: "1. Understanding the client’s goal", items: ["What plastic will be processed?", "What product will be sold?", "Target capacity?", "Budget?"] },
                { title: "2. Designing the plant flow", items: ["Raw material receiving", "Sorting", "Washing", "Drying"] },
              ].map((card) => (
                <div key={card.title} className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{card.title}</h3>
                  <ul className="space-y-3 pl-5 text-muted-foreground">{card.items.map((item) => <li key={item} className="list-disc">{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Chart */}
          <section className="mb-16 rounded-3xl border border-border bg-card p-6 md:p-8">
            <h2 className="mb-8 text-3xl font-semibold text-foreground">Performance Improvement</h2>
            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="before" fill="#94a3b8" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="after" fill="#0f766e" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </main>

        {/* Sticky Sidebar Column */}
        <aside className="hidden lg:block sticky top-24 self-start h-fit will-change-transform z-30">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Connect With Our Experts</h3>
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </article>
  </>
);

export default PlasticMachinery;