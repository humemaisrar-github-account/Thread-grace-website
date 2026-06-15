import React from "react";

const PrivacyPage = () => {
  return (
    <section style={{ padding: '80px 10%' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '2rem', textAlign: 'center' }}>Privacy Policy</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)' }}>
          <p style={{ marginBottom: '1.5rem' }}>Your privacy is important to us. We are committed to protecting your personal information and being transparent about what data we collect and how we use it.</p>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Information We Collect</h3>
          <p style={{ marginBottom: '1.5rem' }}>We collect information you provide directly to us, such as your name, email address, and shipping information when you make a purchase or contact us.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
