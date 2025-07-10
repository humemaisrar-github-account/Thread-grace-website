"use client";
import React from "react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="thank-container">
      <h1 className="thank-title">Thank You!</h1>
      <p className="thank-message">
        Your message has been sent successfully. I’ll get back to you soon! 💌
      </p>
      <Link href="/" className="thank-link">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
