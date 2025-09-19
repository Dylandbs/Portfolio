"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = (name, email, message) => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Le nom est requis.";
    if (!email.trim()) newErrors.email = "L'email est requis.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = "Email invalide.";
    }
    if (!message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const botField = form["bot-field"].value;

    if (botField) {
      setStatus("error");
      return;
    }

    const validationErrors = validate(name, email, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setErrors({});

    const data = new FormData(form);

    try {
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
    } catch (err) {
      console.error("Erreur lors de l'envoi du formulaire :", err);
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
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="form-title">Contact</h3>
      <form
        onSubmit={handleSubmit}
        className="form"
        aria-label="Formulaire de contact"
      >
        <label htmlFor="bot-field" className="visually-hidden">
          Ne pas remplir ce champ (anti-spam)
        </label>
        <input
          id="bot-field"
          type="text"
          name="bot-field"
          tabIndex="-1"
          autoComplete="off"
          className="visually-hidden"
        />

        <label className="form-group">
          <span className="form-group-label">Nom</span>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span className="error" id="name-error">
              {errors.name}
            </span>
          )}
        </label>

        <label className="form-group">
          <span className="form-group-label">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span className="error" id="email-error">
              {errors.email}
            </span>
          )}
        </label>

        <label className="form-group">
          <span className="form-group-label">Message</span>
          <textarea
            name="message"
            placeholder="Votre message"
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span className="error" id="message-error">
              {errors.message}
            </span>
          )}
        </label>

        <motion.button
          type="submit"
          className="form-submit-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          aria-live="polite"
        >
          Envoyer
        </motion.button>

        {status === "loading" && <p aria-live="polite">⏳ Envoi en cours...</p>}
        {status === "success" && (
          <p aria-live="polite">✅ Votre message a été envoyé avec succès.</p>
        )}
        {status === "error" && (
          <p aria-live="polite">
            ❌ Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </form>
    </motion.div>
  );
}
