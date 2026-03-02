import React from 'react';
import SidePanel from './SidePanel';

function Cart({ cartItems, onClose, isOpen }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
        <SidePanel isOpen={isOpen} onClose={onClose} title="YOUR CART">
            <div style={{ flexGrow: 1, overflowY: 'auto' }}>
                {cartItems.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted">Your cart is feeling a bit empty.</p>
                    </div>
                )}
                {cartItems.map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="d-flex flex-column">
                            <span className="fw-bold">{item.name}</span>
                            <span className="text-success small">Verified Product</span>
                        </div>
                        <span className="fw-bold">₹{item.price}</span>
                    </div>
                ))}
            </div>
            {cartItems.length > 0 && (
                <div className="mt-4 pt-4 border-top border-secondary">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="text-muted">Total Amount</span>
                        <h4 className="m-0 fw-bold neon-text">₹{total}</h4>
                    </div>
                    <button className="btn btn-danger w-100 py-3 fw-bold fs-5 shadow">PROCEED TO CHECKOUT</button>
                </div>
            )}
        </SidePanel>
    );
}

export default Cart;
