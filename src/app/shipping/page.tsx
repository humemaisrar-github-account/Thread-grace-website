import React from "react";

const ShippingPage = () => {
  return (
    <section style={{ padding: '80px 10%' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '2rem', textAlign: 'center' }}>Shipping Policy</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)' }}>
          <p style={{ marginBottom: '1.5rem' }}>We aim to get your orders to you as quickly and safely as possible.</p>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Domestic Shipping</h3>
          <p style={{ marginBottom: '1.5rem' }}>All domestic orders are shipped via standard courier services. Delivery usually takes 5-7 business days after processing.</p>
        </div>
      </div>
    </section>
  );
};

export default ShippingPage;
