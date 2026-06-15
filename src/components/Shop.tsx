"use client";
import React from 'react';
import Image from 'next/image';
import { useCart, Product } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';

const Shop = () => {
  const { addToCart } = useCart();
  const router = useRouter();

  const romalItems = products.filter(p => p.category === 'embroidery');

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
