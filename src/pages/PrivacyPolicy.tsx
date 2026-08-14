import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Cookie,
  Database,
  UserCheck,
  FileText,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
  },
  {
    id: "sharing",
    title: "How We Share Information",
  },
  {
    id: "retention",
    title: "Data Retention",
  },
  {
    id: "security",
    title: "Data Security",
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
  },
  {
    id: "children",
    title: "Children's Privacy",
  },
  {
    id: "third-party",
    title: "Third-Party Links",
  },
  {
    id: "international",
    title: "International Data Transfers",
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        {/* Background decoration */}
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
              <ShieldCheck className="w-8 h-8" />
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-emerald-100 mb-4">
              EPR Nexuss
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how EPR Nexuss collects,
              uses, protects, and manages your personal information.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm">
              <FileText className="w-4 h-4" />
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
                    <Lock className="w-7 h-7 text-emerald-700" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Your Privacy Is Important to Us
                  </h2>

                  <p className="text-slate-600 leading-7 mb-4">
                    EPR Nexuss ("EPR Nexuss", "we", "us", or "our")
                    respects your privacy and is committed to protecting
                    the personal information you provide when using our
                    website.
                  </p>

                  <p className="text-slate-600 leading-7">
                    This Privacy Policy explains how we collect, use,
                    disclose, store, and protect personal information when
                    you visit or interact with{" "}
                    <strong className="text-slate-900">
                      eprnexuss.com
                    </strong>
                    , contact us, submit an enquiry, request our services,
                    or otherwise communicate with us through our website.
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
                    Have a privacy question?
                  </h3>

                  <p className="text-sm text-white/80 leading-6 mb-4">
                    Contact our team if you have any questions about this
                    Privacy Policy or your personal information.
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

            {/* ================= POLICY CONTENT ================= */}
            <main className="min-w-0">
              <div className="prose prose-slate max-w-none">

                {/* 1 */}
                <motion.section
                  {...fadeUp}
                  id="information-we-collect"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="01"
                    title="Information We Collect"
                  />

                  <p>
                    We collect only information that is reasonably
                    necessary for the purposes described in this Privacy
                    Policy.
                  </p>

                  <h3>Information You Provide to Us</h3>

                  <p>
                    When you contact us, submit a form, request a service,
                    or otherwise communicate with us, we may collect:
                  </p>

                  <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone or mobile number</li>
                    <li>Company or organization name</li>
                    <li>City, state, or business location</li>
                    <li>Service or product category you are interested in</li>
                    <li>Details included in your enquiry or message</li>
                    <li>
                      Information relating to your recycling, EPR,
                      waste-management, or business requirements
                    </li>
                    <li>
                      Documents or information that you voluntarily submit
                      to us
                    </li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h3>Information Collected Automatically</h3>

                  <p>
                    When you visit our website, certain technical
                    information may be collected automatically, depending
                    on the technologies implemented on the website.
                  </p>

                  <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Date and time of visits</li>
                    <li>Referring website or page</li>
                    <li>Approximate location derived from IP address</li>
                    <li>Website interaction information</li>
                    <li>Diagnostic and security information</li>
                  </ul>
                </motion.section>

                {/* 2 */}
                <motion.section
                  {...fadeUp}
                  id="how-we-use"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="02"
                    title="How We Use Your Information"
                  />

                  <p>
                    We may use personal information for the following
                    purposes:
                  </p>

                  <InfoCard
                    icon={<UserCheck />}
                    title="To Respond to Enquiries"
                    text="We may use your name, phone number, email address, company information, and enquiry details to respond to your requests and provide information about our services."
                  />

                  <InfoCard
                    icon={<Database />}
                    title="To Provide Our Services"
                    text="We may process information necessary to understand your requirements and provide EPR, recycling, waste-management, compliance, consulting, trading, or other services requested by you."
                  />

                  <InfoCard
                    icon={<Mail />}
                    title="To Communicate With You"
                    text="We may contact you through email, telephone, WhatsApp, or other communication channels where appropriate and permitted by applicable law."
                  />

                  <InfoCard
                    icon={<ShieldCheck />}
                    title="To Maintain Website Security"
                    text="Information may be processed to detect, prevent, investigate, or respond to fraud, unauthorized access, malicious activity, security incidents, or other misuse of our website."
                  />

                  <InfoCard
                    icon={<FileText />}
                    title="To Comply With Legal Obligations"
                    text="We may process and retain information where necessary to comply with applicable laws, regulations, legal processes, government requests, or other lawful requirements."
                  />
                </motion.section>

                {/* 3 */}
                <motion.section
                  {...fadeUp}
                  id="cookies"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="03"
                    title="Cookies & Tracking Technologies"
                  />

                  <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100 mb-6">
                    <Cookie className="w-6 h-6 text-amber-600 shrink-0" />

                    <p className="!m-0 text-amber-900">
                      Our website may use cookies and similar technologies
                      to provide functionality, improve performance,
                      understand website usage, and maintain security.
                    </p>
                  </div>

                  <h3>Essential Cookies</h3>
                  <p>
                    These cookies may be necessary for basic website
                    functionality, security, or remembering certain
                    preferences.
                  </p>

                  <h3>Analytics Cookies</h3>
                  <p>
                    Where implemented, analytics technologies may help us
                    understand how visitors use our website, including
                    which pages are visited and how users navigate the
                    website.
                  </p>

                  <h3>Preference or Functional Cookies</h3>
                  <p>
                    These may allow the website to remember certain
                    preferences and improve your browsing experience.
                  </p>

                  <p>
                    Where applicable law requires consent for
                    non-essential cookies, we will seek consent before
                    using them and provide an appropriate mechanism to
                    manage or withdraw that consent.
                  </p>

                  <p>
                    You can also manage or disable cookies through your
                    browser settings. Disabling certain cookies may affect
                    some website functionality.
                  </p>
                </motion.section>

                {/* 4 */}
                <motion.section
                  {...fadeUp}
                  id="sharing"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="04"
                    title="How We Share Information"
                  />

                  <p>
                    We do <strong>not sell your personal information</strong>.
                  </p>

                  <p>
                    We may share personal information only where reasonably
                    necessary for the purposes described in this Privacy
                    Policy.
                  </p>

                  <h3>Service Providers</h3>

                  <p>
                    We may use third-party service providers that assist us
                    with:
                  </p>

                  <ul>
                    <li>Website hosting</li>
                    <li>Website maintenance</li>
                    <li>Email communication</li>
                    <li>Analytics</li>
                    <li>Customer enquiry management</li>
                    <li>IT and cybersecurity</li>
                    <li>Communication services</li>
                    <li>Other technical or business-support services</li>
                  </ul>

                  <h3>Professional Advisors</h3>

                  <p>
                    Where necessary, information may be shared with
                    professional advisors such as lawyers, accountants,
                    auditors, or consultants.
                  </p>

                  <h3>Government and Regulatory Authorities</h3>

                  <p>
                    We may disclose information where required or
                    permitted by applicable law, regulation, court order,
                    governmental request, or regulatory requirement.
                  </p>

                  <h3>Business Transfers</h3>

                  <p>
                    If EPR Nexuss undergoes a merger, acquisition,
                    restructuring, sale of assets, or similar transaction,
                    personal information may be transferred as part of
                    that transaction, subject to applicable law.
                  </p>
                </motion.section>

                {/* 5 */}
                <motion.section
                  {...fadeUp}
                  id="retention"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="05"
                    title="Data Retention"
                  />

                  <p>
                    We retain personal information only for as long as
                    reasonably necessary for the purpose for which it was
                    collected.
                  </p>

                  <p>
                    The actual retention period may depend on:
                  </p>

                  <ul>
                    <li>The nature of the information</li>
                    <li>The purpose for which it was collected</li>
                    <li>The relationship between you and EPR Nexuss</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Accounting or business requirements</li>
                    <li>Security and fraud-prevention requirements</li>
                    <li>
                      The establishment, exercise, or defence of legal
                      claims
                    </li>
                  </ul>

                  <p>
                    When information is no longer required, we may
                    securely delete, anonymize, or otherwise dispose of it
                    in accordance with our internal procedures and
                    applicable law.
                  </p>
                </motion.section>

                {/* 6 */}
                <motion.section
                  {...fadeUp}
                  id="security"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="06"
                    title="Data Security"
                  />

                  <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
                    <div className="flex gap-4">
                      <ShieldCheck className="w-7 h-7 text-emerald-700 shrink-0" />

                      <div>
                        <h3 className="!mt-0 text-emerald-900">
                          Protecting Your Information
                        </h3>

                        <p className="!mb-0 text-emerald-900/80">
                          We take reasonable technical and organizational
                          measures designed to protect personal
                          information against unauthorized access, loss,
                          misuse, alteration, disclosure, or destruction.
                          However, no method of transmission over the
                          Internet or method of electronic storage can be
                          guaranteed to be completely secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 7 */}
                <motion.section
                  {...fadeUp}
                  id="rights"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="07"
                    title="Your Privacy Rights"
                  />

                  <p>
                    Subject to applicable law, you may have rights
                    regarding your personal information, including the
                    right to:
                  </p>

                  <ul>
                    <li>
                      Request information about the personal data
                      processed about you
                    </li>
                    <li>
                      Request correction or updating of inaccurate
                      information
                    </li>
                    <li>
                      Request deletion or erasure where legally applicable
                    </li>
                    <li>
                      Withdraw consent where processing is based on
                      consent
                    </li>
                    <li>
                      Raise a grievance regarding the processing of your
                      personal information
                    </li>
                    <li>
                      Exercise any other rights available under
                      applicable data-protection law
                    </li>
                  </ul>

                  <p>
                    To exercise a privacy right, contact us using the
                    details provided in the Contact Us section below. We
                    may need to verify your identity before processing
                    certain requests.
                  </p>
                </motion.section>

                {/* 8 */}
                <motion.section
                  {...fadeUp}
                  id="children"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="08"
                    title="Children's Privacy"
                  />

                  <p>
                    Our website and services are intended primarily for
                    businesses, organizations, professionals, and other
                    users seeking environmental, recycling, EPR,
                    waste-management, or related services.
                  </p>

                  <p>
                    We do not knowingly seek to collect personal
                    information from children where such collection is
                    prohibited by applicable law.
                  </p>

                  <p>
                    If you believe that a child has provided personal
                    information to us improperly, please contact us so
                    that we can take appropriate action.
                  </p>
                </motion.section>

                {/* 9 */}
                <motion.section
                  {...fadeUp}
                  id="third-party"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="09"
                    title="Third-Party Links"
                  />

                  <p>
                    Our website may contain links to third-party websites,
                    platforms, or services.
                  </p>

                  <p>
                    These third-party websites operate independently from
                    EPR Nexuss and may have their own privacy policies and
                    terms.
                  </p>

                  <p>
                    We are not responsible for the privacy practices,
                    security, content, or policies of third-party
                    websites. We encourage you to review the privacy
                    policy of any third-party website before providing
                    personal information.
                  </p>
                </motion.section>

                {/* 10 */}
                <motion.section
                  {...fadeUp}
                  id="international"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="10"
                    title="International Data Transfers"
                  />

                  <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <Globe className="w-7 h-7 text-primary shrink-0" />

                    <p className="!m-0">
                      Some of our third-party technology or service
                      providers may process information on servers or
                      systems located outside India. Where personal
                      information is transferred outside India, we will
                      take reasonable steps and comply with applicable
                      legal requirements relating to such transfers.
                    </p>
                  </div>
                </motion.section>

                {/* 11 */}
                <motion.section
                  {...fadeUp}
                  id="changes"
                  className="scroll-mt-28 mb-14"
                >
                  <SectionHeading
                    number="11"
                    title="Changes to This Privacy Policy"
                  />

                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect:
                  </p>

                  <ul>
                    <li>Changes to our website or services</li>
                    <li>
                      Changes in how we process personal information
                    </li>
                    <li>Changes to technology</li>
                    <li>Changes in applicable laws or regulations</li>
                    <li>Other operational or legal requirements</li>
                  </ul>

                  <p>
                    When we make changes, we will update the{" "}
                    <strong>"Last Updated"</strong> date at the beginning
                    of this Privacy Policy.
                  </p>

                  <p>
                    Where required by applicable law, we will provide
                    additional notice or obtain consent for material
                    changes.
                  </p>

                  <p>
                    We encourage you to periodically review this page for
                    the latest information about our privacy practices.
                  </p>
                </motion.section>

                {/* 12 */}
                <motion.section
                  {...fadeUp}
                  id="contact"
                  className="scroll-mt-28 mb-10"
                >
                  <SectionHeading
                    number="12"
                    title="Contact Us"
                  />

                  <p>
                    If you have questions, concerns, requests, or
                    complaints regarding this Privacy Policy or the
                    handling of your personal information, please contact
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

      {/* ================= BOTTOM CTA ================= */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <ShieldCheck className="w-10 h-10 mx-auto mb-5" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Privacy Matters
            </h2>

            <p className="text-white/80 leading-7">
              At EPR Nexuss, we are committed to handling your personal
              information responsibly and transparently.
            </p>

            <a
              href="mailto:info@eprnexuss.com"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Us
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

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const InfoCard = ({
  icon,
  title,
  text,
}: InfoCardProps) => {
  return (
    <div className="not-prose flex gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/20 hover:shadow-sm transition-all mb-4">
      <div className="w-11 h-11 shrink-0 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 mb-1">
          {title}
        </h4>

        <p className="text-sm leading-6 text-slate-600">
          {text}
        </p>
      </div>
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

export default PrivacyPolicy;