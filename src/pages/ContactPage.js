import React, { useState } from "react";
import styles from "../pages/ContactPage.module.css";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [submitted, setSubmitted] = useState(false); // State to handle submission status

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      // Clear the form fields
      fullName: "",
      subject: "",
      email: "",
      body: "",
    });
    setSubmitted(true); // Show the success message
    setTimeout(() => setSubmitted(false), 5000); // Hide the message after 5 seconds
  };

  return (
    <div className={styles.contactForm}>
      <h1>Contact Us</h1>
      {submitted && (
        <p className={styles.successMessage}>
          Your message has been sent successfully!
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength="3"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength="3"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="body">Message:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            minLength="3"
            className={styles.textarea}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
