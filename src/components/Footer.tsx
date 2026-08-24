import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "../../public/logo/epr-logo.jpeg";

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/919289659966", icon: "M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5.01L2 22l5.09-1.35C8.47 21.51 10.18 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 14.3c-.18.5-.97.97-1.35 1.09-.36.11-.65.16-2.29-.48-1.94-.78-3.18-2.73-3.28-2.85-.1-.12-.79-.99-.79-1.89 0-.9.47-1.34.64-1.52.18-.18.47-.21.64-.21.16 0 .33.01.47.01.15 0 .36-.06.56.42.21.5.72 1.74.78 1.87.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.3-.36.4-.12.12-.24.24-.11.47.13.24.6 1.02 1.29 1.65.88.79 1.63 1.04 1.86 1.15.23.11.37.09.5-.06.13-.15.58-.66.73-.89.16-.23.31-.19.52-.12.21.08 1.34.64 1.57.75.23.12.38.18.44.28.06.1.04.58-.14 1.08z" },
  { name: "YouTube", href: "https://www.youtube.com/@eprnexuss", icon: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/epr-nexuss/", icon: "M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM7.91 18.18H5.27V9.5h2.64v8.68zM6.59 8.35a1.52 1.52 0 1 1 0-3.04 1.52 1.52 0 0 1 0 3.04zM18.18 18.18h-2.64v-4.23c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.62 1.1-1.62 2.23v4.31H9.86V9.5h2.53v1.18h.04c.35-.66 1.21-1.36 2.49-1.36 2.66 0 3.15 1.75 3.15 4.03v4.83z" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61569227422407", icon: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" },
  { name: "Instagram", href: "https://www.instagram.com/eprnexuss/", icon: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" },
];

// Static const map for the footer contact bar — icon, label, and lines (each line can carry its own href)
const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    lines: [
      { text: "info@eprnexuss.com", href: "mailto:info@eprnexuss.com" },
      { text: "eprnexuss@gmail.com", href: "mailto:eprnexuss@gmail.com" },
    ],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: [
      { text: "+91 9289659966", href: "tel:+919289659966" },
      { text: "0120-4605014", href: "tel:01204605014" },
    ],
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      {
        text: "H-73, No.107, Sector-63, Noida, Dist. Gautam Buddha Nagar, U.P. 201301",
        href: "https://www.google.com/maps/dir//EPR+Nexuss,+1st+Floor,+H+73,+Sector+63+Rd,+H+Block,+Sector+63,+Noida,+Uttar+Pradesh+201301/@28.6260722,77.3668959,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cef2a5c81fb13:0x7d1918f56e42426b!2m2!1d77.3766912!2d28.6287437?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
        external: true,
      },
    ],
    hours: "Mon–Sat, 10:00am–6:00pm",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
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
             {/* Social Icons Row */}
        <div className=" mt-2 pt-2 ">
          <div className="flex  gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                title={social.name}
              >
                <svg className="w-5 h-5 fill-current text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
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
                { name: "Founders & Team", path: "/about" },
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

          {/* Recycling Setup*/}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Lithium Battery Recycling", path: "/services/recycling-lithium-ion-battery" },
                { name: "E-Waste Recycling", path: "/services/recycling-ewaste" },
                { name: "RVSF Recycling", path: "/services/recycling-vehicles-scrapping" },
                { name: "Solar Panel Recycling", path: "/services/recycling-solar-panel" },
                { name: "Plastic Recycling", path: "/services/recycling-plastic" },
                
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

          {/* License And Certification*/}
          <div>
            <h4 className="font-display font-semibold mb-4">License And Certifications</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Consent To Establish", path: "/services/consent-to-establish" },
                { name: "Consent To Operate", path: "/services/consent-to-operate" },
                { name: "Hazardous Waste Authorization", path: "/services/hazardous-waste-authorization" },
                { name: "Bio Medical Waste Authorization", path: "/services/bio-medical-waste-authorization" },
                { name: "Hazardous Waste Impact Authorization", path: "/services/hazardous-waste-impact-authorization" },
                
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
            <a href="/license-and-certification"
            className="text-sm text-white-800 hover:text-secondary transition-colors">More Categories &gt;&gt;</a>
          </div>

          {/* Setup and Commisioning Documentation */}

          <div>
            <h4 className="font-display font-semibold mb-4">Plant Operation And Intelligence</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Setup & Commisioning Documentation", path: "/services/setup-and-commissioning-documentation" },
                { name: "Operation And Performance Management", path: "/services/operationperformancemanagement" },
                { name: "Scale And Growth System", path: "/services/scale-and-growth-systems" },
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
        </div>

        {/* Contact Info Bar — separated from the link grid by a divider above it */}
        <div className="mt-2 pt-4 border-t border-primary-foreground/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 sm:divide-x sm:divide-primary-foreground/10">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex md:justify-center gap-3 sm:pl-6 first:sm:pl-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    
                    <div className="mt-0 flex flex-col gap-0.5">
                      {item.lines.map((line) =>
                        line.external ? (
                          <a
                            key={line.text}
                            href={line.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold leading-snug text-primary-foreground hover:text-secondary transition-colors"
                          >
                            {line.text}
                          </a>
                        ) : (
                          <a
                            key={line.text}
                            href={line.href}
                            className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors first:font-semibold first:text-primary-foreground"
                          >
                            {line.text}
                          </a>
                        )
                      )}
                    </div>
                    {/* {item.hours && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-primary-foreground/50">
                        <Clock className="h-3.5 w-3.5" />
                        {item.hours}
                      </p>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-4 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} EPR Nexuss. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-sm text-primary-foreground/40 hover:text-secondary cursor-pointer transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-primary-foreground/40 hover:text-secondary cursor-pointer transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;