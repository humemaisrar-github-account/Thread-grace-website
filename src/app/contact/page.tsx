"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Have a specific vision in mind? We would love to hear from you. 
            Whether it's a custom commission or a general inquiry, our team is here to help.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info-card"
          >
            <h3>Inquiry Details</h3>
            <p>For custom orders, please provide as much detail as possible so we can better assist you.</p>
            
            <div className="info-item">
              <strong>Email Us</strong>
              <p>humemaisrarali@gmail.com</p>
            </div>
            
            <div className="info-item">
              <strong>Business Hours</strong>
              <p>Monday — Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
            </div>

            <div className="info-item">
              <strong>Social Presence</strong>
              <p>Follow our journey on Instagram for the latest designs and behind-the-scenes artistry.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            action="https://formsubmit.co/humemaisrarali@gmail.com"
            method="POST"
            className="contact-form"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://the-embroidery-atelier.vercel.app/thankpage"
            />

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this regarding?"
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                required
                className="textarea-field"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
