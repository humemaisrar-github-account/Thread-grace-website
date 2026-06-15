"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '80px 10%' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            We would love to hear from you. Whether it's a custom commission or a general inquiry, our team is here to help.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ background: 'var(--white)', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Inquiry Details</h3>
            
            <div className="info-item" style={{ marginBottom: '2rem' }}>
              <strong style={{ display: 'block', color: 'var(--primary-color)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>Email Us</strong>
              <p style={{ fontSize: '1.1rem' }}>humemaisrarali@gmail.com</p>
            </div>
            
            <div className="info-item" style={{ marginBottom: '2rem' }}>
              <strong style={{ display: 'block', color: 'var(--primary-color)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>Business Hours</strong>
              <p>Monday — Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            action="https://formsubmit.co/humemaisrarali@gmail.com"
            method="POST"
            style={{ background: 'var(--white)', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://the-embroidery-atelier.vercel.app/thankpage"
            />

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: '600' }}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #eee' }}
              />
            </div>

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '600' }}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                required
                style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #eee' }}
              />
            </div>

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontWeight: '600' }}>Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                required
                style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #eee' }}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ padding: '1rem' }}>
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
