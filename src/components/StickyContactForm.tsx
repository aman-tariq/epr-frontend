import React, { useState } from "react";
import { Phone } from "lucide-react";

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
    <div className="sticky-form-wrapper">

      <style>{formStyles}</style>

      <div className="sticky-form">

        <h3>Book a Technical Call with Expert</h3>

        {/* CONTACT BUTTON */}
        <div className="form-contact-info">

          <a
            href="tel:+919289659966"
            className="contact-link"
          >
            <Phone size={16} />

            +91 9289659966
          </a>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting
              ? "Submitting Request..."
              : "Book Consultation"}
          </button>
        </form>

        <p className="form-note">
          We'll get back to you within 24 hours
        </p>
      </div>
    </div>
  );
};

const formStyles = `
.sticky-form-wrapper {
  width: 100%;
}

.sticky-form {
  background: linear-gradient(135deg, #f0fdf4 0%, #f8fbf9 100%);
  border: 1px solid #254732;
  border-radius: 18px;
  padding: 12px 14px;
  box-shadow: 0 10px 40px rgba(16, 32, 24, 0.12);
  backdrop-filter: blur(12px);
}

.sticky-form h3 {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 700;
  color: #102018;
  line-height: 1.3;
}

.form-contact-info {
  margin-bottom: 16px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: #1e7a4c;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}

.contact-link:hover {
  background: #165a3a;
  transform: translateY(-1px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #d5eadc;
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  color: #102018;
  background: #fff;
  transition: all 0.2s;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #5e6d65;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #1e7a4c;
  box-shadow: 0 0 0 3px rgba(30, 122, 76, 0.1);
  background: #fbfdfc;
}

.submit-btn {
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #1e7a4c 0%, #2ea66a 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 0.5px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(30, 122, 76, 0.3);
}

.submit-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
  transform: none;
}

.form-note {
  margin: 0;
  font-size: 11px;
  color: #5e6d65;
  text-align: center;
  line-height: 1.5;
  font-style: italic;
}

@media (max-width: 1440px) {

  .sticky-form-wrapper {
    right: 10px;
  }

  .sticky-form {
    padding: 12px 14px;
  }

  .sticky-form h3 {
    font-size: 14px;
  }
}

@media (max-width: 980px) {

  .sticky-form-wrapper {
    display: none;
  }
}
`;

export default StickyContactForm;