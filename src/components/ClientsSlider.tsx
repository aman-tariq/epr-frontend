import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Clients Data (with logos)
const clients = [
  { name: "Berger", logo: "https://tse3.mm.bing.net/th/id/OIP.lpxbCdDHCAoKGsR-SJAENQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Aditya Birla", logo: "https://vectorseek.com/wp-content/uploads/2021/01/2000-logo-300x184.png" },
  { name: "Trivitron", logo: "https://tse1.mm.bing.net/th/id/OIP.lyjKxRjX7kgBxe7-OeOtrQHaFI?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Care Medical", logo: "https://masterbundles.com/wp-content/uploads/2023/09/blue-white-and-green-medical-care-logo-926-1024x1024.png" },
  { name: "Singer", logo: "https://static.vecteezy.com/system/resources/previews/028/879/363/non_2x/singer-logo-design-creative-idea-with-microphone-for-lead-sing-song-event-music-party-vector.jpg" },
  { name: "DLC", logo: "https://img.freepik.com/premium-vector/dlc-logo-dlc-letter-dlc-letter-logo-design-initials-dlc-logo-linked-with-circle-uppercase-monogram-logo-dlc-typography-technology-business-real-estate-brand_229120-56361.jpg" },
  { name: "Kuang Tai", logo: "https://www.tonghin.com.my/pub/media/codazon_cache/brand/400x400/wysiwyg/brand/kuangtai.jpg" },
  { name: "UltraTech", logo: "https://mir-s3-cdn-cf.behance.net/projects/404/397ce2138745893.Y3JvcCwyMzExLDE4MDgsOTIxLDI0MA.jpg" },
  { name: "KMC", logo: "https://static.vecteezy.com/system/resources/previews/016/209/796/original/kmc-letter-logo-design-on-white-background-kmc-creative-initials-circle-logo-concept-kmc-letter-design-vector.jpg" },
  { name: "Welspun", logo: "https://th.bing.com/th/id/OIP.S-fVAI1y0N9fSonBJzPx5wAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "BRFL", logo: "https://www.bombayrayontextiles.com/asset/images/BRFL-logo.jpg" },
  { name: "Webkraft", logo: "https://tse4.mm.bing.net/th/id/OIP.fwfAqRh888IFyOErhUi9TgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Apter", logo: "https://images.seeklogo.com/logo-png/0/1/apter-international-logo-png_seeklogo-9972.png" },
  { name: "Vimar", logo: "https://seeklogo.com/images/V/Vimar-logo-2F5B5F9482-seeklogo.com.png" },
  { name: "Apple", logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png" },
  { name: "Foxconn", logo: "https://tse4.mm.bing.net/th/id/OIP.GlG4WgLEh4ekUw1Ic6Z_pAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Bosch", logo: "https://tse2.mm.bing.net/th/id/OIP.HsN6E5pT7Tn8tgsMPbXjKgAAAA?w=300&h=200&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Dell", logo: "https://tse4.mm.bing.net/th/id/OIP.RrC7UJzLCakVQrdu2WrvRwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Samsung", logo: "https://tse3.mm.bing.net/th/id/OIP.Ni8IPHDh68KTiAZXzeaT4AHaFY?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Panasonic", logo: "https://1000logos.net/wp-content/uploads/2017/04/Color-Panasonic-Logo.jpg" },
  { name: "Tata Steel", logo: "https://logosandbrands.directory/wp-content/themes/directorypress/thumbs/Tata-Steel-logo.png" },
  { name: "LG Chem", logo: "https://download.logo.wine/logo/LG_Chem/LG_Chem-Logo.wine.png" },
  { name: "Asian Paints", logo: "https://tse1.mm.bing.net/th/id/OIP._exdmUHFw5sjh7-qAjM38wAAAA?w=324&h=280&rs=1&pid=ImgDetMain&o=7&rm=3" },
];

// Duplicate for infinite scroll
const duplicatedClients = [...clients, ...clients];

const ClientsSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            OUR CLIENTS
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-full" />
          </div>
          <p className="text-gray-500 mt-4">
            Trusted by leading brands across industries
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div ref={containerRef} className="overflow-hidden py-4">

            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? 0 : ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >

              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] md:w-[180px]"
                >
                  <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition flex flex-col items-center">

                    {/* LOGO */}
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-16 h-16 object-contain mb-3 grayscale hover:grayscale-0 transition"
                      onError={(e) => {
                        // Hide broken images instead of showing placeholder
                        e.currentTarget.style.display = 'none';
                        // Show fallback div with initials
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Initials (hidden by default) */}
                    <div 
                      className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 items-center justify-center mb-3 hidden"
                    >
                      <span className="text-white font-bold text-lg">
                        {client.name.charAt(0)}
                      </span>
                    </div>

                    {/* NAME */}
                    <p className="text-sm font-medium text-gray-700">
                      {client.name}
                    </p>

                  </div>
                </div>
              ))}

            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Clients" },
            { value: "23+", label: "Industries" },
            { value: "50+", label: "Partners" },
            { value: "99%", label: "Retention" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSlider;