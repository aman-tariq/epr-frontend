import React, { useState } from "react";
import { Phone } from "lucide-react";

const fieldClass =
  "w-full px-3 py-2 border border-[#d5eadc] rounded-lg text-[13px] text-[#102018] bg-white transition-all duration-200 placeholder:text-[#5e6d65] focus:outline-none focus:border-[#1e7a4c] focus:ring-[3px] focus:ring-[#1e7a4c]/10 focus:bg-[#fbfdfc]";

const StickyContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // EMAIL FALLBACK
  const sendEmailFallback = () => {
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
`;

    const mailtoUrl = `mailto:info@eprnexuss.com?subject=Blog Inquiry&body=${encodeURIComponent(
      body
    )}`;

    window.location.href = mailtoUrl;
  };

  // FORM SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

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
          body: JSON.stringify({
            ...formData,
            subject: "blog-inquiry",
          }),
        }
      );

      alert("Message submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);

      alert("Something went wrong. Opening email client...");

      sendEmailFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // WIDTH: change max-w-[300px] to make the form wider or narrower
    <div className="w-full max-w-[300px] max-[1440px]:right-[10px] max-[980px]:hidden">
      {/* HEIGHT: never taller than the viewport; scrolls inside if the screen is very short */}
      <div className="max-h-[calc(100vh-6rem)] overflow-y-auto bg-gradient-to-br from-[#f0fdf4] to-[#f8fbf9] border border-[#254732] rounded-2xl py-3 px-3.5 shadow-[0_10px_40px_rgba(16,32,24,0.12)] backdrop-blur-md [scrollbar-width:thin]">
        <h3 className="m-0 mb-2 text-sm font-bold text-[#102018] leading-[1.3]">
          Book a Technical Call with Expert
        </h3>

        {/* CONTACT BUTTON */}
        <div className="mb-2">
          <a
            href="tel:+919289659966"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1e7a4c] text-white no-underline rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-[#165a3a] hover:-translate-y-px"
          >
            <Phone size={14} />
            +91 9289659966
          </a>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-2">
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={fieldClass}
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className={fieldClass}
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className={fieldClass}
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            required
            className={`${fieldClass} resize-none`}
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-gradient-to-br from-[#1e7a4c] to-[#2ea66a] text-white border-none rounded-lg text-[13px] font-bold cursor-pointer tracking-[0.5px] transition-all duration-300 hover:enabled:-translate-y-0.5 hover:enabled:shadow-[0_8px_20px_rgba(30,122,76,0.3)] disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting Request..." : "Book Consultation"}
          </button>
        </form>

        <p className="m-0 text-[11px] text-[#5e6d65] text-center leading-normal italic">
          We'll get back to you within 24 hours
        </p>
      </div>
    </div>
  );
};

export default StickyContactForm;