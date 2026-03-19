import { motion } from "framer-motion";
import awardLogo from "@/assets/partners/award.png";
import gcPartnerLogo from "@/assets/partners/gcpartner.png";
import oxfordLogo from "@/assets/partners/oxford.png";
import meshLogo from "@/assets/partners/mesh.png";

const partners = [
  { src: awardLogo, alt: "Fintech Award" },
  { src: gcPartnerLogo, alt: "Google Cloud Partner" },
  { src: oxfordLogo, alt: "University of Oxford" },
  { src: meshLogo, alt: "Mesh" },
];

const PartnerLogoBanner = () => {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <p className="mb-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40">
          Awards & Partners
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20"
        >
          {partners.map((partner, i) => (
            <motion.img
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-12"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerLogoBanner;
