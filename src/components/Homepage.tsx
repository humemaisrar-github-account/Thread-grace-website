'use client';
import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url(heroo.jpg)" }}>
        <div data-aos="zoom-in-up">
          <h1 className="hed">Welcome to</h1>
          <h2>The Embroidery Atelier</h2>
          <p className="p1">Elegance in every stitch, personalized for you.</p>
          <p className="p1">Handcrafted artistry that speaks from the heart.</p>

          <Link href="/shop">
            <button>Explore Collection</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
