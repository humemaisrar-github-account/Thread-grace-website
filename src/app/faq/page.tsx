import React from "react";

const FAQPage = () => {
  return (
    <section style={{ padding: '80px 10%' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Do you accept custom orders?</h3>
            <p style={{ color: 'var(--text-light)' }}>Yes, we absolutely do! Please contact us through our Contact page with your specific requirements and vision.</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>How long does shipping take?</h3>
            <p style={{ color: 'var(--text-light)' }}>Shipping times vary depending on your location and the complexity of the order. Typically, domestic orders take 5-7 business days.</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>What is your return policy?</h3>
            <p style={{ color: 'var(--text-light)' }}>We want you to be completely satisfied with your purchase. Please review our detailed Return Policy page for more information.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
