import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../public/logo/epr-logo.jpeg";

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/919289659966", icon: "M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5.01L2 22l5.09-1.35C8.47 21.51 10.18 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 14.3c-.18.5-.97.97-1.35 1.09-.36.11-.65.16-2.29-.48-1.94-.78-3.18-2.73-3.28-2.85-.1-.12-.79-.99-.79-1.89 0-.9.47-1.34.64-1.52.18-.18.47-.21.64-.21.16 0 .33.01.47.01.15 0 .36-.06.56.42.21.5.72 1.74.78 1.87.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.3-.36.4-.12.12-.24.24-.11.47.13.24.6 1.02 1.29 1.65.88.79 1.63 1.04 1.86 1.15.23.11.37.09.5-.06.13-.15.58-.66.73-.89.16-.23.31-.19.52-.12.21.08 1.34.64 1.57.75.23.12.38.18.44.28.06.1.04.58-.14 1.08z" },
  { name: "YouTube", href: "https://www.youtube.com/@eprnexuss", icon: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/epr-nexuss/", icon: "M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM7.91 18.18H5.27V9.5h2.64v8.68zM6.59 8.35a1.52 1.52 0 1 1 0-3.04 1.52 1.52 0 0 1 0 3.04zM18.18 18.18h-2.64v-4.23c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.62 1.1-1.62 2.23v4.31H9.86V9.5h2.53v1.18h.04c.35-.66 1.21-1.36 2.49-1.36 2.66 0 3.15 1.75 3.15 4.03v4.83z" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61569227422407", icon: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" },
  { name: "Instagram", href: "https://www.instagram.com/eprnexuss/", icon: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="EPR NEXUSS" 
                className="h-16 w-16 rounded-full object-cover border-2 border-white/20 shadow-lg"
                loading="lazy"
                width="56"
                height="56"
              />
              <span className="font-display text-xl font-bold">
                EPR <span className="text-secondary">Nexuss</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your comprehensive partner in Extended Producer Responsibility & sustainable waste management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Founders & Team", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "EPR Plastic", path: "/services/epr-plastic" },
                { name: "EPR Electronic", path: "/services/epr-electronic" },
                { name: "EPR Tyre", path: "/services/epr-tyre" },
                { name: "EPR ELV", path: "/services/epr-elv" },
                { name: "EPR Used Oil", path: "/services/epr-used-oil" },
                { name: "EPR Metals", path: "/services/epr-metals" },
                { name: "EPR Battery", path: "/services/epr-battery" },
                { name: "EPR Lithium", path: "/services/epr-lithium" },
              ].map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@eprnexuss.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                <Mail size={16} /> info@eprnexuss.com
              </a>
              <a href="mailto:eprnexuss@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                <Mail size={16} /> eprnexuss@gmail.com
              </a>
              <a href="tel:+919289659966" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                <Phone size={16} /> +91 9289659966
              </a>
              {/* <a href="tel:01204605014" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                <Phone size={16} /> 0120-4605014
              </a> */}
              <span className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin size={28} /> H-73, No.107, Sector-63, Noida,
Dist. Gautam Buddha Nagar, U.P. 201301
              </span>
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6">
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                title={social.name}
              >
                <svg className="w-5 h-5 fill-current text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} EPR Nexuss. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-primary-foreground/40 hover:text-secondary cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-sm text-primary-foreground/40 hover:text-secondary cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
