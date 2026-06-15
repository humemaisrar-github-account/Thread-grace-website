"use client";
import React from 'react';
import Image from 'next/image';
import { useCart, Product } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const Shop = () => {
  const { addToCart } = useCart();
  const router = useRouter();

   const romalItems = [
  { id: 1, name: 'Whispered Petals', price: 650, image: '/r1.webp' },
  { id: 2, name: 'Threaded Blossom', price: 750, image: '/r12.jpg' },
  { id: 3, name: 'Silken Scent', price: 850, image: '/r9.jpg' },
  { id: 4, name: 'Velvet Bloom', price: 700, image: '/r4.webp' },
  { id: 5, name: 'Pearl Whisper', price: 950, image: '/r5.jpg' },
  { id: 6, name: 'Lace Whisper', price: 600, image: '/r6.avif' },
  { id: 7, name: 'Serene Threads', price: 800, image: '/r7.jpg' },
  { id: 8, name: 'Name on Cloud', price: 550, image: '/r8.jpg' },
  { id: 9, name: 'Blushing Grace', price: 900, image: '/r3.jpg' },
  { id: 10, name: 'Rose Dust', price: 750, image: '/r10.jpg' },
  { id: 11, name: 'Embroidered Essence', price: 850, image: '/r11.jpg' },
  { id: 12, name: 'Heirloom Stitch', price: 990, image: '/r2.jpg' },
];

  const handleBuyNow = (item: Product) => {
    addToCart(item);
    router.push('/checkout');
  };

  return (
    <div data-aos="fade-down">
      <div className="romal">
        {romalItems.map((item) => (
          <div key={item.id} className="romalcard" data-aos="flip-up">
            <Image 
              src={item.image.trim()} 
              alt={item.name} 
              width={150}
              height={150} 
            />
            <h3>{item.name}</h3>
            <div>Rs {item.price}</div>
            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
            <button className="buy-now" onClick={() => handleBuyNow(item)}>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
