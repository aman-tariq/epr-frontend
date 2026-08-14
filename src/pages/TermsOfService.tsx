import { motion } from "framer-motion";
import {
  FileCheck,
  ShieldCheck,
  Scale,
  UserCheck,
  AlertTriangle,
  Link2,
  Copyright,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  BriefcaseBusiness,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
  },
  {
    id: "about",
    title: "About EPR Nexuss",
  },
  {
    id: "use-of-website",
    title: "Use of Our Website",
  },
  {
    id: "services",
    title: "Our Services",
  },
  {
    id: "enquiries",
    title: "Enquiries & Communications",
  },
  {
    id: "information",
    title: "Information Provided by You",
  },
  {
    id: "third-party",
    title: "Third-Party Services & Links",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
  },
  {
    id: "disclaimer",
    title: "Disclaimers",
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
  },
  {
    id: "indemnification",
    title: "Indemnification",
  },
  {
    id: "termination",
    title: "Suspension & Termination",
  },
  {
    id: "changes",
    title: "Changes to These Terms",
  },
  {
    id: "governing-law",
    title: "Governing Law",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <FileCheck className="w-8 h-8" />
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-emerald-100 mb-4">
              EPR Nexuss
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Terms of Service
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using the EPR Nexuss
              website or engaging with our services.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm">
              <FileCheck className="w-4 h-4" />
              Last Updated: August 11, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Scale className="w-7 h-7 text-emerald-700" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Welcome to EPR Nexuss
                  </h2>

                  <p className="text-slate-600 leading-7 mb-4">
                    These Terms of Service ("Terms") govern your access to
                    and use of the EPR Nexuss website and your interaction
                    with our services.
                  </p>

                  <p className="text-slate-600 leading-7">
                    By accessing or using{" "}
                    <strong className="text-slate-900">
                      https://eprnexuss.com/
                    </strong>
                    , you acknowledge that you have read, understood, and
                    agree to be bound by these Terms. If you do not agree
                    with these Terms, please do not use our website.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 max-w-7xl mx-auto">

            {/* ================= SIDEBAR ================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-900">
                      On this page
                    </h3>
                  </div>

                  <nav className="p-3">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Contact card */}
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-primary to-secondary p-5 text-white">
                  <Mail className="w-6 h-6 mb-4" />

                  <h3 className="font-semibold text-lg mb-2">
                    Questions about our terms?
                  </h3>

                  <p className="text-sm text-white/80 leading-6 mb-4">
                    Contact the EPR Nexuss team if you have questions
                    regarding these Terms of Service.
                  </p>

                  <a
                    href="mailto:info@eprnexuss.com"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    info@eprnexuss.com
                  </a>
                </div>
              </div>
            </aside>

            {/* ================= CONTENT ================= */}
            <main className="min-w-0">
              <div className="prose prose-slate max-w-none">

                {/* 01 */}
                <motion.section
                  {...fadeUp}
                  id="acceptance"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="01"
                    title="Acceptance of Terms"
                  />

                  <p>
                    By accessing or using the EPR Nexuss website, you agree
                    to comply with these Terms of Service and all
                    applicable laws and regulations.
                  </p>

                  <p>
                    If you are accessing the website on behalf of a company,
                    organization, or other legal entity, you represent that
                    you have the authority to bind that entity to these
                    Terms.
                  </p>

                  <p>
                    If you do not agree with any part of these Terms, you
                    should discontinue use of the website.
                  </p>
                </motion.section>

                {/* 02 */}
                <motion.section
                  {...fadeUp}
                  id="about"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="02"
                    title="About EPR Nexuss"
                  />

                  <p>
                    EPR Nexuss is an environmental and recycling solutions
                    company providing services and business support related
                    to areas including:
                  </p>

                  <ul>
                    <li>Extended Producer Responsibility (EPR)</li>
                    <li>EPR compliance support</li>
                    <li>E-waste management and recycling</li>
                    <li>Plastic waste management</li>
                    <li>Battery waste and recycling</li>
                    <li>Tyre waste management</li>
                    <li>End-of-Life Vehicle (ELV) solutions</li>
                    <li>Used oil and metal recycling</li>
                    <li>Recycling plant setup and commissioning</li>
                    <li>Operational and performance support</li>
                    <li>Business growth and lead generation</li>
                    <li>Recyclable material buying and selling</li>
                  </ul>

                  <p>
                    The availability and scope of any particular service
                    may depend on your requirements, applicable regulations,
                    location, technical feasibility, and a separate
                    agreement or quotation where applicable.
                  </p>
                </motion.section>

                {/* 03 */}
                <motion.section
                  {...fadeUp}
                  id="use-of-website"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="03"
                    title="Use of Our Website"
                  />

                  <p>
                    You may use our website for lawful purposes and in
                    accordance with these Terms.
                  </p>

                  <p>
                    You agree not to use the website in a manner that:
                  </p>

                  <ul>
                    <li>
                      Violates any applicable law or regulation
                    </li>
                    <li>
                      Attempts to gain unauthorized access to our systems
                      or networks
                    </li>
                    <li>
                      Interferes with the operation or security of the
                      website
                    </li>
                    <li>
                      Introduces viruses, malware, malicious code, or other
                      harmful material
                    </li>
                    <li>
                      Uses automated systems to scrape or collect website
                      content without permission
                    </li>
                    <li>
                      Impersonates EPR Nexuss or another person or
                      organization
                    </li>
                    <li>
                      Uses our website to conduct fraudulent or deceptive
                      activities
                    </li>
                  </ul>
                </motion.section>

                {/* 04 */}
                <motion.section
                  {...fadeUp}
                  id="services"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="04"
                    title="Our Services"
                  />

                  <p>
                    Information presented on the EPR Nexuss website is
                    provided for general informational and business
                    purposes.
                  </p>

                  <div className="not-prose grid sm:grid-cols-2 gap-4 my-7">
                    <ServiceCard
                      icon={<BriefcaseBusiness />}
                      title="EPR & Compliance"
                      text="Support relating to EPR requirements, documentation, compliance processes, and related environmental obligations."
                    />

                    <ServiceCard
                      icon={<RefreshCw />}
                      title="Recycling Solutions"
                      text="Solutions and support covering different waste streams and recycling activities."
                    />

                    <ServiceCard
                      icon={<Scale />}
                      title="Plant Setup"
                      text="Project planning, setup, commissioning, documentation, and operational support for recycling facilities."
                    />

                    <ServiceCard
                      icon={<ShieldCheck />}
                      title="Business Support"
                      text="Operational, performance, market, and growth-related support for recycling businesses."
                    />
                  </div>

                  <p>
                    Specific services, deliverables, fees, timelines,
                    responsibilities, approvals, and other commercial
                    terms may be governed by a separate proposal,
                    quotation, work order, service agreement, or other
                    written agreement between you and EPR Nexuss.
                  </p>
                </motion.section>

                {/* 05 */}
                <motion.section
                  {...fadeUp}
                  id="enquiries"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="05"
                    title="Enquiries & Communications"
                  />

                  <p>
                    Our website may allow you to submit enquiries or
                    contact our team regarding our services.
                  </p>

                  <p>
                    When submitting an enquiry, you agree to provide
                    information that is accurate and not misleading.
                  </p>

                  <p>
                    Submission of an enquiry does not automatically create
                    a contract between you and EPR Nexuss. A contractual
                    relationship will arise only when the relevant
                    commercial terms have been agreed and accepted by the
                    parties where required.
                  </p>

                  <p>
                    We may contact you using the information provided by
                    you to respond to your enquiry, discuss your
                    requirements, provide quotations, or communicate
                    regarding requested services, subject to applicable
                    law and our Privacy Policy.
                  </p>
                </motion.section>

                {/* 06 */}
                <motion.section
                  {...fadeUp}
                  id="information"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="06"
                    title="Information Provided by You"
                  />

                  <p>
                    You are responsible for ensuring that information,
                    documents, specifications, or other materials you
                    provide to EPR Nexuss are accurate, complete, and
                    lawful to provide.
                  </p>

                  <p>
                    Where you provide information on behalf of a company
                    or another organization, you represent that you are
                    authorized to provide that information.
                  </p>

                  <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100 my-6">
                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />

                    <p className="!m-0 text-amber-900">
                      You should not submit confidential, sensitive, or
                      proprietary information through a general website
                      form unless it is necessary for your enquiry and
                      you are authorized to disclose it.
                    </p>
                  </div>
                </motion.section>

                {/* 07 */}
                <motion.section
                  {...fadeUp}
                  id="third-party"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="07"
                    title="Third-Party Services & Links"
                  />

                  <p>
                    Our website may contain links to websites, platforms,
                    tools, or services operated by third parties.
                  </p>

                  <p>
                    These links are provided for convenience or
                    informational purposes. EPR Nexuss does not control
                    third-party websites and is not responsible for their
                    content, availability, security, terms, or privacy
                    practices.
                  </p>

                  <p>
                    Your use of third-party services is subject to the
                    terms and policies of those third parties.
                  </p>
                </motion.section>

                {/* 08 */}
                <motion.section
                  {...fadeUp}
                  id="intellectual-property"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="08"
                    title="Intellectual Property"
                  />

                  <div className="flex gap-4 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 mb-6">
                    <Copyright className="w-7 h-7 text-emerald-700 shrink-0" />

                    <p className="!m-0 text-emerald-900/80">
                      Unless otherwise stated, the content and materials
                      displayed on the EPR Nexuss website are owned by or
                      licensed to EPR Nexuss and are protected by
                      applicable intellectual-property laws.
                    </p>
                  </div>

                  <p>
                    This may include, without limitation:
                  </p>

                  <ul>
                    <li>Website design and layout</li>
                    <li>Logos and branding</li>
                    <li>Text and written content</li>
                    <li>Images and graphics</li>
                    <li>Videos and visual materials</li>
                    <li>Icons and illustrations</li>
                    <li>Software and website functionality</li>
                    <li>Other original website materials</li>
                  </ul>

                  <p>
                    You may view and use the website for legitimate
                    personal or business evaluation purposes. You may not
                    reproduce, copy, modify, distribute, publish, sell,
                    license, or commercially exploit website content
                    without prior written permission, except where
                    permitted by applicable law.
                  </p>
                </motion.section>

                {/* 09 */}
                <motion.section
                  {...fadeUp}
                  id="prohibited"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="09"
                    title="Prohibited Activities"
                  />

                  <p>
                    You agree not to:
                  </p>

                  <ul>
                    <li>
                      Use the website for unlawful purposes
                    </li>
                    <li>
                      Attempt to circumvent website security measures
                    </li>
                    <li>
                      Access areas of the website that you are not
                      authorized to access
                    </li>
                    <li>
                      Introduce malicious software or harmful code
                    </li>
                    <li>
                      Disrupt or overload our website or infrastructure
                    </li>
                    <li>
                      Scrape, reproduce, or systematically copy website
                      content without authorization
                    </li>
                    <li>
                      Misrepresent your identity or relationship with
                      EPR Nexuss
                    </li>
                    <li>
                      Use information obtained from the website for
                      fraudulent or unlawful activities
                    </li>
                  </ul>
                </motion.section>

                {/* 10 */}
                <motion.section
                  {...fadeUp}
                  id="disclaimer"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="10"
                    title="Disclaimers"
                  />

                  <p>
                    The information available on our website is provided
                    on an "as is" and "as available" basis, to the extent
                    permitted by applicable law.
                  </p>

                  <p>
                    While we make reasonable efforts to keep website
                    information accurate and current, we do not guarantee
                    that all information will always be complete, accurate,
                    current, or free from errors.
                  </p>

                  <p>
                    Information relating to EPR requirements, recycling
                    regulations, compliance obligations, environmental
                    standards, government procedures, or other regulatory
                    matters may change over time.
                  </p>

                  <p>
                    Website content should therefore not be treated as a
                    substitute for legal, regulatory, financial,
                    engineering, environmental, or other professional
                    advice.
                  </p>

                  <p>
                    Where a service requires approvals, registrations,
                    permissions, certifications, government decisions, or
                    third-party actions, EPR Nexuss does not guarantee that
                    such approval or outcome will be granted unless
                    expressly agreed in writing.
                  </p>
                </motion.section>

                {/* 11 */}
                <motion.section
                  {...fadeUp}
                  id="limitation"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="11"
                    title="Limitation of Liability"
                  />

                  <p>
                    To the maximum extent permitted by applicable law,
                    EPR Nexuss and its directors, employees,
                    representatives, contractors, and service providers
                    will not be liable for indirect, incidental,
                    consequential, special, or punitive damages arising
                    from or relating to your use of the website.
                  </p>

                  <p>
                    This may include, where legally permitted, loss of
                    profits, loss of business opportunities, loss of data,
                    business interruption, or other indirect losses.
                  </p>

                  <p>
                    Nothing in these Terms is intended to exclude or limit
                    liability that cannot legally be excluded or limited
                    under applicable law.
                  </p>

                  <p>
                    Where a separate written agreement exists between you
                    and EPR Nexuss, the liability provisions of that
                    agreement may apply to the relevant services.
                  </p>
                </motion.section>

                {/* 12 */}
                <motion.section
                  {...fadeUp}
                  id="indemnification"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="12"
                    title="Indemnification"
                  />

                  <p>
                    To the extent permitted by applicable law, you agree
                    to indemnify and hold harmless EPR Nexuss, its
                    directors, employees, representatives, and service
                    providers from claims, losses, liabilities, damages,
                    costs, or expenses arising from:
                  </p>

                  <ul>
                    <li>
                      Your unlawful or unauthorized use of the website
                    </li>
                    <li>
                      Your violation of these Terms
                    </li>
                    <li>
                      Your violation of applicable laws or regulations
                    </li>
                    <li>
                      Information or materials you provide that infringe
                      the rights of another person
                    </li>
                    <li>
                      Your misuse of our website or services
                    </li>
                  </ul>
                </motion.section>

                {/* 13 */}
                <motion.section
                  {...fadeUp}
                  id="termination"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="13"
                    title="Suspension & Termination"
                  />

                  <p>
                    We may restrict, suspend, or discontinue access to our
                    website, in whole or in part, where reasonably
                    necessary for security, maintenance, legal,
                    operational, or other legitimate business reasons.
                  </p>

                  <p>
                    We may also take appropriate action where we reasonably
                    believe that a person has violated these Terms,
                    misused the website, or engaged in unlawful activity.
                  </p>

                  <p>
                    Provisions of these Terms that by their nature should
                    continue after termination will remain applicable,
                    including provisions relating to intellectual
                    property, disclaimers, limitations of liability,
                    indemnification, and governing law.
                  </p>
                </motion.section>

                {/* 14 */}
                <motion.section
                  {...fadeUp}
                  id="changes"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="14"
                    title="Changes to These Terms"
                  />

                  <p>
                    We may update these Terms from time to time to reflect
                    changes to our website, services, business practices,
                    technology, or applicable laws.
                  </p>

                  <p>
                    When we update the Terms, we will change the{" "}
                    <strong>"Last Updated"</strong> date at the beginning
                    of this page.
                  </p>

                  <p>
                    Your continued use of the website after updated Terms
                    are published may constitute acceptance of the revised
                    Terms to the extent permitted by applicable law.
                  </p>

                  <p>
                    We encourage you to review these Terms periodically.
                  </p>
                </motion.section>

                {/* 15 */}
                <motion.section
                  {...fadeUp}
                  id="governing-law"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="15"
                    title="Governing Law"
                  />

                  <p>
                    These Terms shall be governed by and interpreted in
                    accordance with the laws applicable in India, without
                    regard to conflict-of-law principles, to the extent
                    permitted by applicable law.
                  </p>

                  <p>
                    Any dispute arising out of or relating to these Terms
                    or your use of the website shall be subject to the
                    jurisdiction of the competent courts having
                    jurisdiction over the relevant matter and location,
                    unless a separate written agreement between the
                    parties provides otherwise.
                  </p>
                </motion.section>

                {/* 16 */}
                <motion.section
                  {...fadeUp}
                  id="contact"
                  className="scroll-mt-28 mb-10"
                >
                  <SectionHeading
                    number="16"
                    title="Contact Us"
                  />

                  <p>
                    If you have questions regarding these Terms of
                    Service, our website, or our services, please contact
                    us.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    <ContactCard
                      icon={<MapPin />}
                      title="Office Address"
                      text={
                        <>
                          1st Floor, H 73, Sector 63 Rd,
                          <br />
                          H Block, Sector 63, Noida,
                          <br />
                          Uttar Pradesh – 201301, India
                        </>
                      }
                    />

                    <ContactCard
                      icon={<Mail />}
                      title="Email"
                      text={
                        <a
                          href="mailto:info@eprnexuss.com"
                          className="text-primary hover:underline"
                        >
                          info@eprnexuss.com
                        </a>
                      }
                    />

                    <ContactCard
                      icon={<Phone />}
                      title="Phone"
                      text={
                        <a
                          href="tel:+919289659966"
                          className="text-primary hover:underline"
                        >
                          +91 9289659966
                        </a>
                      }
                    />

                    <ContactCard
                      icon={<Globe />}
                      title="Website"
                      text={
                        <a
                          href="https://eprnexuss.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          eprnexuss.com
                        </a>
                      }
                    />
                  </div>
                </motion.section>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <FileCheck className="w-10 h-10 mx-auto mb-5" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Information?
            </h2>

            <p className="text-white/80 leading-7">
              If you have questions about our services or these Terms of
              Service, our team is here to help.
            </p>

            <a
              href="mailto:info@eprnexuss.com"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Contact EPR Nexuss
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({
  number,
  title,
}: SectionHeadingProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-semibold text-primary">
          {number}
        </span>

        <div className="h-px w-10 bg-primary/30" />
      </div>

      <h2 className="!mt-0 !mb-0 text-2xl md:text-3xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const ServiceCard = ({
  icon,
  title,
  text,
}: ServiceCardProps) => {
  return (
    <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/20 hover:shadow-sm transition-all">
      <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h4 className="font-semibold text-slate-900 mb-2">
        {title}
      </h4>

      <p className="text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}

const ContactCard = ({
  icon,
  title,
  text,
}: ContactCardProps) => {
  return (
    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>

      <h4 className="font-semibold text-slate-900 mb-2">
        {title}
      </h4>

      <div className="text-sm text-slate-600 leading-6">
        {text}
      </div>
    </div>
  );
};

export default TermsOfService;