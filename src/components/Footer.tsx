import { motion } from "framer-motion";
import { useState } from "react";
import api from "../api/api";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/api/contact", formData);
      setMessage("✅ Thank you! Your message has been sent.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to send message.");
    }
  };
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-shell">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Let&apos;s build something meaningful</p>
          <h2>Open to product engineering, AI integration, and ambitious frontend work.</h2>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="contact-details">
            <h3>Contact details</h3>
            <p><strong>Name:</strong> Lakshmi Deepika Pothini</p>
            <p><strong>Gmail:</strong> deepika5052250@gmail.com</p>
            <p><strong>Phone:</strong> +1 (945)-333-6665</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-row">
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="contact"
                placeholder="Phone number"
                value={formData.contact}
                onChange={handleChange}
              />
            </label>

            <label>
              Description
              <textarea
                rows={5}
                name="description"
                placeholder="Tell me about your project or idea"
                value={formData.description}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="primary-button">Send message</button>
            {message && (
              <p style={{ marginTop: "15px", color: "green" }}>{message}</p>
            )}
          </form>
        </motion.div>

        <div className="footer-links">
          <a className="secondary-button" href="#hero">
            Back to top
          </a>
          <a className="secondary-button" href="#projects">
            Explore work
          </a>
          <a className="secondary-button" href="#skills">
            Review stack
          </a>
        </div>

        <p className="footer-copy">© 2026 Lakshmi Deepika. Crafted with React and care.</p>
      </div>
    </footer>
  );
};

export default Footer;
