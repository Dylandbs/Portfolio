"use client";

import FlipCard from "./flipCard";
import projetBank from "../../../../public/images/projet-bank.png";
import projetKasa from "../../../../public/images/projet-kasa.png";
import projetSophie from "../../../../public/images/projet-sophie.png";
import projetOhmyfood from "../../../../public/images/projet-ohmyfood.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Argent Bank",
    subtitle: "Site bancaire avec authentification utilisateur",
    description: `Développement d’une application bancaire responsive avec React, 
    Redux et Sass, intégrée aux API REST pour gérer l’authentification 
    et le profil utilisateur de manière sécurisée`,
    image: projetBank,
    stack: ["React", "Redux", "SASS"],
    link: "https://github.com/Dylandbs/Projet-Bank-Argent-Openclassroom",
  },
  {
    title: "Kasa",
    subtitle: "Site web de location immobilière",
    description: `Site de location immobilière en React offrant une navigation fluide 
    et des pages détaillées pour chaque bien.
    Un projet qui met en valeur mes compétences en développement web et design responsive.`,
    image: projetKasa,
    stack: ["React", "SASS"],
    link: "https://github.com/Dylandbs/Kasa",
  },
  {
    title: "Portfolio d’architecte d’intérieur",
    subtitle: "Site interactif de gestion et de mise en valeur d’images",
    description: `Site pour le portfolio d’une architecte d’intérieur, permettant de gérer, filtrer et mettre en valeur des images, 
    avec un système de connexion et l’intégration d’API via Swagger.`,
    image: projetSophie,
    stack: ["React", "Redux", "SASS"],
    link: "https://github.com/Dylandbs/Sophie-Bluel",
  },
  {
    title: "Ohmyfood",
    subtitle: "Explorer facilement les restaurants et leurs menus",
    description: `Un site qui rassemble plusieurs restaurants, permettant de découvrir facilement leurs menus, 
    spécialités et informations pratiques grâce à une navigation claire et intuitive.`,
    image: projetOhmyfood,
    stack: ["HTML", "SASS"],
    link: "https://github.com/Dylandbs/Ohmyfood",
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
