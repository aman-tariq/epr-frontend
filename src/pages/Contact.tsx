import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Recycle,
} from "lucide-react";

import background from "@/assets/contact-background.jpg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

const SUBJECTS = [
  { value: "credit-trading", label: "Credit Trading" },
  { value: "epr-solutions", label: "EPR Solutions" },
  { value: "technical-support", label: "Technical Support" },
  { value: "waste-management", label: "Waste Management" },
  { value: "other", label: "Other" },
];

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@eprnexuss.com",
    href: "mailto:info@eprnexuss.com",
    subValue: "eprnexuss@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9289659966",
    href: "tel:+919289659966",
    subValue: "0120-4605014",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "credit-trading",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxkbsNez-OY7tUV8Vb0weFImRaxs2A8O9-85H82BdLPzSL8T_jzWBrwwOQ9cCVJl0ll/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        },
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "credit-trading",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to submit form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const { name, email, phone, message } = form;

    const text = `Hello EPR Nexuss,

My Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}

Message: ${message || "I would like to know about your EPR services"}`;

    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919289659966?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent("EPR Nexuss,H-73, Sector-63, Noida");
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank",
    );
  };

  return (
    <>
      <Seo
        title="Contact EPR Nexuss | EPR Compliance Consultation & Waste Management Support"
        description="Get expert help with EPR compliance, credit trading, recycling plant setup, and CPCB approvals. Call +91 92896 59966 or WhatsApp for quick support."
        keywords={[
          "Contact EPR Nexuss",
          "EPR Compliance Consultation",
          "EPR Credit Trading Support",
          "Waste Management Help India",
          "CPCB Approval Assistance",
          "Solar Panel Recycling Consultation",
          "E-Waste Recycling Support",
          "How to Get EPR Certificate",
          "EPR Services Contact Number",
        ]}
        url="https://eprnexuss.com/contact"
        type="website"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />

        {/* Orbit motif — hidden on mobile to avoid clutter */}
        <svg
          className="hidden lg:block absolute -right-16 -top-10 w-[420px] h-[420px] opacity-40"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="hsl(var(--secondary))"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle
            cx="250"
            cy="250"
            r="150"
            stroke="hsl(var(--secondary))"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <circle cx="250" cy="50" r="7" fill="hsl(var(--secondary))" />
          <circle
            cx="424"
            cy="325"
            r="5"
            fill="hsl(var(--secondary))"
            fillOpacity="0.7"
          />
          <circle
            cx="76"
            cy="325"
            r="5"
            fill="hsl(var(--secondary))"
            fillOpacity="0.7"
          />
        </svg>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider bg-secondary/10 border border-secondary/30 rounded-full px-3 py-1.5">
              <Recycle className="w-3.5 h-3.5" />
              Get In Touch
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-5 leading-[1.05]">
              Let's close the <span className="text-secondary">loop</span>{" "}
              together.
            </h1>

            <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              Have questions about EPR compliance, credit trading, or waste
              management? We're here to help you navigate the path to
              sustainability.
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-10 mt-8 sm:mt-10">
              {[
                { value: "24 hrs", label: "Avg. response time" },
                { value: "500+", label: "Brands onboarded" },
                { value: "CPCB", label: "Aligned advisory" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-secondary/50 pl-3"
                >
                  <div className="font-display text-lg sm:text-xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/20" />
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-border shadow-xl shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      placeholder="000-000-0000"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="info@eprnexuss.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECTS.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm({ ...form, subject: s.value })}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                          form.subject === s.value
                            ? "bg-secondary text-primary-foreground border-secondary"
                            : "bg-background text-muted-foreground border-border hover:border-secondary/50"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your EPR requirements..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-secondary hover:bg-secondary/90 text-primary-foreground gap-2 text-base font-semibold"
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground font-medium">
                  OR
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </motion.div>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              <div className="relative">
                {CONTACT_ITEMS.map((item, i) => (
                  <div key={item.label}>
                    <motion.a
                      href={item.href}
                      whileHover={{ y: -3 }}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">
                          {item.label}
                        </div>
                        <div className="font-semibold text-foreground text-[15px]">
                          {item.value}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {item.subValue}
                        </div>
                      </div>
                    </motion.a>
                    <div className="ml-[38px] w-px h-4 border-l border-dashed border-border" />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={openGoogleMaps}
                  className="w-full flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">
                      Visit Us
                    </div>
                    <div className="font-semibold text-foreground text-[15px]">
                      H-73, No.107, Sector-63, Noida, Dist. Gautam Buddha Nagar,
                      U.P. 201301
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Mon–Sat, 10:00am–6:00pm
                    </div>
                  </div>
                </button>
              </div>

              <div className="rounded-2xl p-6 bg-primary text-primary-foreground">
                <h3 className="font-display font-semibold text-base mb-2">
                  Why teams choose EPR Nexuss
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Verified credit counterparties, CPCB-aligned documentation,
                  and a dedicated account manager for every compliance cycle.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["E-waste", "Plastic", "Battery", "Tyre"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-secondary bg-secondary/15 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
