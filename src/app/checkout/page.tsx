"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch("https://formsubmit.co/ajax/humemaisrarali@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        clearCart();
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '1.5rem',
          boxShadow: 'var(--shadow)',
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💌</div>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.2rem', marginBottom: '15px' }}>Thank You!</h2>
          <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' }}>
            Your order has been placed successfully. I’ll get back to you soon!
          </p>
          <button 
            onClick={() => router.push('/shop')} 
            className="submit-button"
            style={{ width: 'auto', padding: '10px 30px', borderRadius: '50px', cursor: 'pointer' }}
          >
            Go back to Shop
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="contact-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '1.5rem',
          boxShadow: 'var(--shadow)',
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
          <h2 style={{ color: 'var(--secondary-color)', fontSize: '2.2rem', marginBottom: '15px' }}>Your Cart is Empty</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' }}>
            Please add some items to your cart before checking out.
          </p>
          <button 
            onClick={() => router.push('/shop')} 
            className="btn-primary"
            style={{ width: 'auto', padding: '12px 35px', borderRadius: '50px', cursor: 'pointer', border: 'none' }}
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-section">
      <div className="container" style={{maxWidth: '1000px'}}>
        <h2 className="contact-title">Checkout</h2>
        <p className="contact-description">Review your order and enter shipping details.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '30px', alignItems: 'start' }} className="form-row">
          {/* Order Summary */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', color: 'black', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '20px', borderBottom: '2px solid rgb(175, 48, 109)', paddingBottom: '10px' }}>Order Summary</h3>
            
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.name}</span>
                    <span style={{ color: 'rgb(175, 48, 109)', fontWeight: 'bold' }}>Rs {item.price} per item</span>
                    
                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '5px' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ background: '#eee', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}
                      >
                        <FaMinus size={12} />
                      </button>
                      <span style={{ fontWeight: 'bold', fontSize: '1.1rem', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ background: '#eee', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Rs {item.price * item.quantity}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: '#ffeded', color: '#ff4d4d', border: 'none', borderRadius: '5px', padding: '8px', cursor: 'pointer' }}
                      title="Remove Item"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', fontSize: '1.4rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #eee', paddingTop: '20px' }}>
              <span>Total Bill:</span>
              <span style={{ color: 'rgb(175, 48, 109)' }}>Rs {totalPrice}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <form 
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            
            <input 
              type="hidden" 
              name="Order Details" 
              value={cart.map(item => `${item.name} (Qty: ${item.quantity}, Price: ${item.price * item.quantity})`).join(' | ')} 
            />
            <input type="hidden" name="Total Payable" value={`Rs ${totalPrice}`} />

            <input type="text" name="name" placeholder="Full Name" required className="input-field" />
            <input type="email" name="email" placeholder="Email Address" required className="input-field" />
            <input type="text" name="phone" placeholder="Phone Number" required className="input-field" />
            <textarea name="address" placeholder="Shipping Address" rows={4} required className="textarea-field" style={{color: 'black'}}></textarea>

            {errorMessage && (
              <p style={{ color: 'red', fontSize: '0.9rem', margin: 0 }}>
                {errorMessage}
              </p>
            )}

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Placing Order..." : "Place Order (COD)"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
