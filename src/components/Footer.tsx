import React from 'react';
import Link from 'next/link';

import { FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>The Embroidery Atelier</h2>
          <p>Where your name meets elegance — thread by thread.</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
            <a href="https://www.instagram.com/humema_israr/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/shipping">Shipping Policy</Link>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 The Embroidery Atelier. All Rights Reserved.</p>
          <p>Made with 💖 by Humema Israr.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
