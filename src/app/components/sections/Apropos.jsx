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
        <motion.div className="about_description" variants={fadeInVariants}>
          <p>
            Passionné par le développement web, j’ai commencé en autodidacte,
            explorant le code par curiosité et envie de créer. J’ai ensuite
            suivi une formation chez OpenClassrooms pour structurer mes
            connaissances et approfondir mes compétences en intégration et
            React.
            <br />
            <br />
            Aujourd’hui, je prends plaisir à transformer des idées en
            expériences web fonctionnelles et esthétiques. Toujours curieux, je
            continue à apprendre et à expérimenter, avec pour objectif de créer
            des projets qui allient technique et simplicité pour
            l’utilisateur.
          </p>
        </motion.div>

        <motion.h3 variants={fadeInVariants}>Compétences techniques</motion.h3>

        <motion.div
          className="about_skills"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={skill.icon.src}
                alt={`${skill.name} icon`}
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
