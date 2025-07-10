// import React from 'react'

// const Footer = () => {
//   return (
//      <footer>
//       <p>
//         &copy; 2024 Threaded Grace All Right Reserved.
//       </p>
//       <p>Threaded Grace. Made with 💖 by Humema.</p>
//      </footer>

//   )
// }

// export default Footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Threaded Grace</h2>
          <p>Where your name meets elegance — thread by thread.</p>
        </div>

        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Threaded Grace. All Rights Reserved.</p>
          <p>Made with 💖 by Humema.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
