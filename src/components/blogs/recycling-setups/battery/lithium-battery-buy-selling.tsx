import React from 'react';
import { motion, Variants } from 'framer-motion';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

// Framer Motion Animation Variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const LithiumBatteryBuySelling: React.FC = () => {
  return (
    <>
      <Seo
        title="Lithium Battery Scrap Trading | Buy & Sell Battery Scrap Profitably in India"
        description="Learn how to buy and sell lithium-ion battery scrap profitably. Complete guide on sourcing EV battery scrap, e-rickshaw batteries, mobile batteries, material grading, pricing strategies, and connecting with genuine buyers for maximum returns."
        keywords={[
          "Lithium Battery Scrap Trading",
          "Buy Lithium Battery Scrap India",
          "Sell Lithium Ion Battery Scrap",
          "EV Battery Scrap Trading",
          "E-Rickshaw Battery Scrap",
          "Mobile Battery Scrap Trading",
          "Battery Recycling Scrap Sourcing",
          "Lithium Battery Scrap Price",
          "Battery Scrap Buyer Seller Network",
          "How to Trade Battery Scrap Profitably",
          "Lithium Battery Recycling Trading Guide",
          "Battery Scrap Material Grading"
        ]}
        url="https://eprnexuss.com/blog/lithium-battery-buy-selling"
        type="article"
      />
      <div className="min-h-screen mt-[70px] bg-[#f8fafc] text-[#1f2937] font-sans pb-12">
       

        {/* Two-Column Layout Container */}
        <div className="max-w-8xl mx-auto px-1 py-12 lg:flex lg:gap-4 lg:items-start">
          <div>
             {/* HERO */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero relative overflow-hidden bg-gradient-to-br from-[#0f766e] to-[#2563eb] text-white rounded-3xl mx-4 md:mx-auto max-w-8xl mt-10 px-8 md:px-12 py-16 md:py-20 shadow-2xl"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            >
              ⚡ Turn Scrap into Strategy — Make Lithium Battery Trading More Profitable, Predictable, and Human
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl leading-relaxed opacity-95"
            >
              In the lithium-ion battery recycling business, value is not only hidden inside the material — it is also hidden in the way you source it, sell it, and move it. 
              The right trading partner can help you reduce friction, get better pricing, and build a supply chain that feels reliable instead of stressful.
            </motion.p>
          </div>
        </motion.section>

          {/* Main Content Column */}
          <div className="flex-1 space-y-16">

            {/* Main Grid - Two Cards */}
            <div className="grid md:grid-cols-1 gap-8">
              
              {/* Left Card - How we help */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-3xl p-4 md:p-8 shadow-sm"
              >
                <h2 className="md:text-3xl text-xl font-bold mb-6">How we help clients buy and sell scrap</h2>
                <p className="text-[#334155] mb-6">
                  Buying and selling lithium-ion battery scrap should feel like a business decision, not a guessing game. 
                  We connect sellers with genuine buyers and help buyers access trusted scrap sources.
                </p>

                <h3 className="font-semibold text-xl mb-4">What we handle</h3>
                <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3 mb-8">
                  {[
                    "Used lithium-ion battery scrap",
                    "EV battery scrap and pack material",
                    "Manufacturing rejects, damaged cells, and mixed waste",
                    "Recycled product material supply for repeat demand",
                    "Sorting support for material with different chemistry and quality levels"
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex gap-3 text-[#1f2937]">
                      <span className="text-emerald-600 mt-1">•</span> {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                  <p><span className="font-semibold text-emerald-700">Our goal:</span> help sellers achieve stronger value and help buyers secure reliable material without delays, confusion, or unnecessary middlemen.</p>
                </div>

                <h3 className="font-semibold text-xl mt-10 mb-4">Why this matters</h3>
                <p className="text-[#334155]">
                  In this market, small details can change the final deal. Scrap condition, moisture, contamination, chemistry mix, documentation, transport, and timing all affect the price.
                </p>
              </motion.div>

              {/* Right Card - Market Worth Attention */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
              >
                <h2 className="md:text-3xl text-xl font-bold mb-6">What makes this market worth attention</h2>
                <p className="text-[#334155] mb-6">
                  The lithium-ion battery recycling market is being shaped by rising EV adoption, portable electronics waste, and the growing need for critical minerals such as lithium, nickel, cobalt, and manganese.
                </p>

                <div className="space-y-6">
                  <motion.div whileHover={{ scale: 1.01 }} className="bg-sky-50 border border-sky-100 rounded-2xl p-6">
                    <strong>Business advantage:</strong> well-managed recycling operations can create new revenue from waste streams that once had little or no value.
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.01 }} className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                    <strong>Operational advantage:</strong> better sorting and documentation improve buyer confidence and help increase repeat transactions.
                  </motion.div>
                </div>

                <h3 className="font-semibold text-xl mt-8 mb-4">Key points clients look for</h3>
                <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                  {[
                    "Transparent material grading and lot-wise evaluation",
                    "Safe handling and compliant storage practices",
                    "Reliable logistics for time-sensitive shipments",
                    "Clear records for quality, weight, and payment terms"
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex gap-3">• {item}</motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            {/* Price Optimization Snapshot */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
            >
              <h2 className="md:text-3xl text-xl font-bold mb-6">Price Optimization Snapshot</h2>
              <p className="text-gray-600 mb-6">Illustrative comparison of average realization per ton.</p>

              <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 border-b">Stage</th>
                      <th className="text-left p-4 border-b">Avg Price/Ton (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b">Without optimization</td>
                      <td className="p-4 border-b font-medium">₹85,000</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="p-4 border-b font-medium">With our network</td>
                      <td className="p-4 border-b font-bold text-emerald-700">₹1,10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bar Charts */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Without Help</span>
                    <span className="font-semibold">₹85K</span>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '77%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>With Our Help</span>
                    <span className="font-semibold">₹110K</span>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-8">
                Result: stronger returns through smarter matchmaking, better market access, and cleaner execution.
              </p>
            </motion.div>

            {/* Process + Case Study */}
            <div className="grid md:grid-cols-1 gap-8">
              {/* How the Process Works */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
              >
                <h2 className="md:text-3xl text-xl font-bold mb-6">How the Process Works</h2>
                <p className="mb-8">We keep the trading flow simple and easy to follow.</p>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3">
                  {["Seller Inquiry", "Material Review", "Price Benchmarking", "Buyer Matching", "Deal Closure", "Logistics Support"].map((step, i) => (
                    <motion.div 
                      key={i} 
                      variants={scaleUp}
                      whileHover={{ scale: 1.05 }}
                      className="bg-sky-50 border border-sky-200 px-5 py-3 rounded-full text-sm cursor-pointer"
                    >
                      {step}
                    </motion.div>
                  ))}
                </motion.div>

                <h3 className="font-semibold text-xl mt-10 mb-4">What buyers usually look for</h3>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Consistency", desc: "A stable supply with repeatable quality" },
                    { title: "Transparency", desc: "Clear information about material and packaging" },
                    { title: "Recoverable value", desc: "Higher recovery potential attracts stronger interest" }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeIn} whileHover={{ y: -3 }} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                      <strong>{item.title}</strong>
                      <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Case Study */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="bg-white border-l-4 border-amber-500 rounded-3xl p-8 shadow-sm"
              >
                <h2 className="md:text-3xl text-xl font-bold mb-6">Case Study: EV Battery Distributor, Delhi NCR</h2>

                <div className="space-y-6">
                  <p><strong>Problem:</strong> The client was selling scrap at low rates, had no direct buyer access, and faced payment delays.</p>
                  <p><strong>Our Approach:</strong> Connected the client with verified recyclers, created competitive bidding, and supported logistics & compliance.</p>
                  <p><strong>Result:</strong> <span className="font-semibold text-emerald-600">28% higher selling price</span>, closed the deal in 5 days, and built a long-term buyer relationship.</p>
                </div>

                <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-6">
                  <p className="font-semibold mb-4">Revenue Impact:</p>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1 text-sm"><span>Before</span><span>₹5L</span></div>
                      <div className="h-4 bg-gray-200 rounded-full">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '55%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-amber-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm"><span>After</span><span>₹8L</span></div>
                      <div className="h-4 bg-gray-200 rounded-full">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '88%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-emerald-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Why This Business Feels Human */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
            >
              <h2 className="md:text-3xl text-xl font-bold mb-6">Why this business feels more human when done right</h2>
              <p className="mb-6">
                Behind every scrap deal is a real person trying to save time, reduce losses, and make a sensible business decision.
              </p>
              <p className="mb-8">
                When sellers feel understood and buyers feel confident, deals move faster.
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Less Stress", desc: "Clear steps reduce confusion and make the transaction easier to manage." },
                  { title: "Better Pricing", desc: "Good market access can improve the final value of your scrap." },
                  { title: "Long-term Trust", desc: "Repeat business grows when the first experience is smooth and fair." }
                ].map((item, i) => (
                  <motion.div key={i} variants={scaleUp} whileHover={{ y: -3 }} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <strong className="block mb-3">{item.title}</strong>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Extra Value Drivers */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
            >
              <h2 className="md:text-3xl text-xl font-bold mb-6">Extra Value Drivers in Lithium Battery Recycling</h2>
              <p className="mb-8">
                Beyond basic buying and selling, the strongest recycling businesses pay attention to quality control, market timing, and material traceability.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl mb-3">Quality Control</h3>
                  <p>Testing, sorting, and inspection help identify the true condition of incoming material and improve price accuracy.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Traceability</h3>
                  <p>Documentation creates trust, especially for buyers who need proof of source, weight, and handling history.</p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} className="mt-10 bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <strong>Why this improves margins:</strong> When material is evaluated properly, businesses can reduce losses from underpriced lots, improve buyer satisfaction, and build stronger repeat business over time.
              </motion.div>
            </motion.div>

            {/* Final CTA */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.01 }}
              className="footer-cta bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-3xl p-12 text-center"
            >
              <p className="text-xl font-semibold mb-4">
                In lithium battery recycling, real profit comes from smart trading, reliable sourcing, and transparent execution.
              </p>
              <p className="text-lg opacity-90">
                Partner with us to make every deal simpler, faster, and more profitable.
              </p>
            </motion.div>

          </div>
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>

        </div>
      </div>
    </>
  );
};

export default LithiumBatteryBuySelling;