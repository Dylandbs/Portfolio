"use client";

import FlipCard from "./flipCard";
import photoProjetTest from "../../../../public/images/test-projet.png";
import projetBank from "../../../../public/images/projet-bank.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Argent Bank",
    subtitle: "Site bancaire avec authentification utilisateur",
    description: `Développement d’une application bancaire responsive avec React, 
    Redux et Sass, intégrée aux API REST pour gérer l’authentification 
    et le profil utilisateur de manière sécurisée et optimisée.`,
    image: projetBank,
    stack: ["React", "Redux", "SASS"],
    link: "https://github.com/Dylandbs/Projet-Bank-Argent-Openclassroom",
  },
  {
    title: "Portfolio",
    subtitle: "Mon site personnel avec Next.js et Tailwind.",
    description: "Mon site personnel avec Next.js et Tailwind.",
    image: photoProjetTest,
    stack: ["Next.js", "React", "TailwindCSS"],
    link: "https://monportfolio.com",
  },
  {
    title: "Dashboard",
    description: "Tableau de bord admin avec authentification.",
    image: "/images/dashboard.png",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://madashboard.com",
  },
  {
    title: "Dashboard",
    description: "Tableau de bord admin avec authentification.",
    image: "/images/dashboard.png",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://madashboard.com",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>

      <motion.div
        className="projects-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((proj, i) => (
          <FlipCard
            key={i}
            index={i + 1} 
            title={proj.title}
            subtitle={proj.subtitle}
            description={proj.description}
            image={proj.image}
            stack={proj.stack}
            link={proj.link}
          />
        ))}
      </motion.div>
    </div>
  );
}
