"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../../public/images/logo_dd_v2.png";

const MotionImage = motion(Image);

export default function Accueil() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const [float, setFloat] = useState(false);

  return (
    <div className="infos">
      <motion.div
        className="text-infos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1 className="title-infos" variants={fadeInVariants}>
          Bonjour, je m'appelle, <br /> <span>Dylan Dubois.</span>
        </motion.h1>

        <motion.p variants={fadeInVariants}>
          Intégrateur web React à Lille, je transforme des idées en interfaces
          interactives. Junior dans le développement mais passionné, je cherche
          à relever des défis concrets en front-end.
        </motion.p>

        <motion.a
          className="github-btn"
          href="https://github.com/Dylandbs"
          aria-label="Lien vers mon GitHub"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInVariants}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.082-.729.082-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.625-5.475 5.922.43.37.813 1.096.813 2.207v3.277c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>
      </motion.div>

      <motion.div
        className="img-infos"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => setFloat(true)}
      >
        <MotionImage
        className="img-profil"
          src={photo}
          alt="image de profil"
          quality={100}
          style={{ display: "block" }}
          animate={
            float
              ? {
                  y: [0, -12, 0], 
                  scale: [1, 1.03, 1], 
                  rotate: [0, 1.5, 0, -1.5, 0], 
                }
              : {}
          }
          transition={
            float
              ? {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      </motion.div>
    </div>
  );
}