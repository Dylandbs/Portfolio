"use client";

import ReactLogo from "../../../assets/icons/react.svg";
import HtmlLogo from "../../../assets/icons/html5.svg";
import CssLogo from "../../../assets/icons/css.svg";
import JsLogo from "../../../assets/icons/javascript.svg";
import SassLogo from "../../../assets/icons/sass.svg";
import ReduxLogo from "../../../assets/icons/redux.svg";

import { motion } from "framer-motion";

export default function Apropos() {
  const skills = [
    { name: "HTML", icon: HtmlLogo },
    { name: "CSS", icon: CssLogo },
    { name: "JavaScript", icon: JsLogo },
    { name: "Redux", icon: ReduxLogo },
    { name: "React", icon: ReactLogo },
    { name: "Sass", icon: SassLogo },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="apropos_container">
      <motion.h2
        className="about_title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        A propos
      </motion.h2>

      <motion.div
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="about_description"
          variants={fadeInVariants}
          role="region"
          aria-label="Présentation personnelle"
        >
          <p>
            Je suis passionné par le développement web et j’ai commencé en
            autodidacte, simplement par curiosité. Très
            vite, j’ai pris plaisir à explorer le code. Pour structurer mes
            connaissances et approfondir mes compétences, j’ai suivi une
            formation chez OpenClassrooms, notamment en intégration web React.
            Grâce à cette expérience en télétravail, j’ai aussi appris à
            m’organiser efficacement, gérer mon temps et rester autonome.
            <br />
            <br />
            Aujourd’hui, j’aime créer des expériences web à la fois
            fonctionnelles et simples à utiliser. Curieux et motivé, je continue
            d’apprendre chaque jour, d’expérimenter de nouvelles technologies.
            J’apprécie particulièrement le travail en équipe, le partage d’idées
            et l’exploration de nouvelles idées pour que chaque projet ait un
            vrai impact pour l’utilisateur.
          </p>
        </motion.div>

        <motion.h3 variants={fadeInVariants}>Compétences techniques</motion.h3>

        <motion.div
          className="about_skills"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          role="list"
          aria-label="Compétences techniques"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              role="listitem"
              tabIndex={0}
              aria-label={skill.name}
            >
              <motion.img
                src={skill.icon.src}
                alt={skill.name}
                className="skill_icon"
                whileHover={{
                  scale: 1.2,
                  y: -20,
                  transition: {
                    type: "spring",
                    stiffness: 350,
                    damping: 10,
                  },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
