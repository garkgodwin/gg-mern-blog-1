import { useState } from "react";
import "./contact-form.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: Basic frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Placeholder for backend submission logic
    try {
      // You can replace this with your API call (e.g., fetch/axios)
      console.log("Form submitted:", formData);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Send Me a Message</h2>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        id="contact-form"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
