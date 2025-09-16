"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FlipCard({
  index,
  title,
  subtitle,
  description,
  image,
  stack = [],
  link = "#",
}) {
  const [flipped, setFlipped] = useState(false);
  const isEven = index % 2 === 0;

  const imgSrc =
    typeof image === "string" && image.trim() !== ""
      ? image
      : image?.src || "/default-project.png";
  const imgAlt = title?.trim() || "Projet sans titre";

  const frontAnimation = {
    rotateY: [0, 4, 0, -4, 0],
    boxShadow: [
      "0px 10px 15px rgba(0,0,0,0.15)",
      "0px 15px 20px rgba(59,130,246,0.25)",
      "0px 10px 15px rgba(0,0,0,0.15)",
    ],
  };

  const frontTransition = {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  };

  const cardVariants = {
    rest: { scale: 1, filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))" },
    hover: {
      filter: "drop-shadow(0px 15px 20px rgba(59,130,246,0.35))",
      transition: { duration: 0.28 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`project-row ${isEven ? "reverse" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="project-number">{index}</motion.div>

      <motion.div
        className="flip-card"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
        onClick={() => setFlipped((s) => !s)}
      >
        <motion.div
          className="flip-inner"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="flip-front"
            animate={frontAnimation}
            transition={frontTransition}
          >
            <div className="image-container">
              <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
            </div>
            <div className="content">
              <h3 className="title">{title}</h3>
              <p className="description">{subtitle}</p>
            </div>
          </motion.div>

          <div className="flip-back">
            <h3>Description du projet</h3>
            <p>{description}</p>
            <ul className="stack-list">
              {stack.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir le projet
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
