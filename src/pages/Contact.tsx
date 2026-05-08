import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Clock,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

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
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
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

Message: ${
      message || "I would like to know about your EPR services"
    }`;

    const encodedMessage = encodeURIComponent(text);

    const whatsappUrl = `https://wa.me/919773870268?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent(
      "1st Floor, H 73, Sector 63 Rd, A Block, Sector 65, Noida, Uttar Pradesh 201301"
    );

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6">
              Let's Work Together
            </h1>

            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
              Have questions about EPR compliance, credit trading, or waste
              management? We're here to help you navigate the path to
              sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-xl shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
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

                  <Select
                    value={form.subject}
                    onValueChange={(value) =>
                      setForm({ ...form, subject: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="credit-trading">
                        Credit Trading
                      </SelectItem>

                      <SelectItem value="epr-solutions">
                        EPR Solutions
                      </SelectItem>

                      <SelectItem value="technical-support">
                        Technical Support
                      </SelectItem>

                      <SelectItem value="waste-management">
                        Waste Management
                      </SelectItem>

                      <SelectItem value="other">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
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

              {/* OR Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-border" />

                <span className="text-sm text-muted-foreground font-medium">
                  OR
                </span>

                <div className="flex-1 h-px bg-border" />
              </div>

              {/* WhatsApp Button */}
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <div className="grid sm:grid-cols-2 gap-4">
                {[
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
                    value: "+91 97738 70268",
                    href: "tel:+919773870268",
                    subValue: "0120-4605014",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>

                    <div className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>

                    <div className="font-semibold text-foreground">
                      {item.value}
                    </div>

                    {item.subValue && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {item.subValue}
                      </div>
                    )}
                  </motion.a>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;