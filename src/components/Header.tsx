"use client";
import { IoFlowerOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link"
import React from 'react'
import { useCart } from "@/context/CartContext";
 

const Header = () => {
  const { cartCount } = useCart();
   
  return (
     <header className="header">
       
        <Link href="/" className="log" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} data-aos="zoom-in-right">
          <IoFlowerOutline style={{fontSize:"30px"}}/>
          The Embroidery Atelier
        </Link>
        <nav className="nav" data-aos="zoom-in-left">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Embroidery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/checkout" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <PiShoppingCartSimpleFill  style={{fontSize: "25px", color: "var(--primary-color)" }}/>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
         </nav>
 
     </header>
  )
}

export default Header 