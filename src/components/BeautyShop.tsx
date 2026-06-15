"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const beautyProducts = [
  {
    id: 101,
    name: "Rose Glow Serum",
    price: 850,
    image: "/r1.webp",
    description: "Hydrating serum for a natural radiant glow."
  },
  {
    id: 102,
    name: "Velvet Matte Lipstick",
    price: 650,
    image: "/r2.jpg",
    description: "Long-lasting matte finish in classic rose."
  },
  {
    id: 103,
    name: "Silk Foundation",
    price: 950,
    image: "/r3.jpg",
    description: "Flawless coverage with a silky smooth feel."
  },
  {
    id: 104,
    name: "Crystal Cleanser",
    price: 750,
    image: "/r4.webp",
    description: "Deep cleaning for fresh and clear skin."
  },
  {
    id: 105,
    name: "Midnight Recovery Cream",
    price: 800,
    image: "/r5.jpg",
    description: "Overnight hydration for tired skin."
  },
  {
    id: 106,
    name: "Ethereal Palette",
    price: 990,
    image: "/r6.avif",
    description: "12 shimmering shades for every occasion."
  }
];

const BeautyShop = () => {
  const { addToCart } = useCart();

  return (
    <section className="shop-section" style={{ padding: '80px 10%' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="shop-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>Beauty Collection</h2>
        <p className="shop-description" style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem' }}>Enhance your natural beauty with our premium, curated cosmetics.</p>
        <div className="romal" style={{ padding: '0', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {beautyProducts.map((product) => (
            <div key={product.id} className="romalcard" style={{ border: '1px solid #eee', borderRadius: '1rem' }}>
              <div className="shop-image-wrapper" style={{ position: 'relative', height: '250px', width: '100%', marginBottom: '1rem' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.8rem' }}
                />
              </div>
              <div className="shop-info">
                <h3 className="product-name" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p className="product-category" style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1rem' }}>{product.description}</p>
                <p className="product-price" style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Rs {product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '12px' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyShop;
