"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mgvlbyrb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000); 
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000); 
    }
  };

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="form-title">Contact</h3>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-group">
          <span className="form-group-label">Nom</span>
          <input type="text" name="name" required placeholder="Votre nom" />
        </label>

        <label className="form-group">
          <span className="form-group-label">Email</span>
          <input type="email" name="email" required placeholder="Votre email" />
        </label>

        <label className="form-group">
          <span className="form-group-label">Message</span>
          <textarea name="message" required placeholder="Votre message" />
        </label>

        <motion.button
          type="submit"
          className="form-submit-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Envoyer
        </motion.button>

        {status === "loading" && <p>⏳ Envoi en cours...</p>}
        {status === "success" && (
          <p>✅ Votre message a été envoyé avec succès.</p>
        )}
        {status === "error" && (
          <p>❌ Une erreur est survenue. Veuillez réessayer.</p>
        )}
      </form>
    </motion.div>
  );
}
