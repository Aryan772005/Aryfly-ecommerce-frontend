import React from 'react';
import SidePanel from './SidePanel';

const OrdersPanel = ({ isOpen, onClose }) => {
    const orders = [
        { id: "#ARY-9921", date: "24 Feb 2024", status: "Delivered", total: "₹15,499", items: 2 },
        { id: "#ARY-8834", date: "12 Feb 2024", status: "Shipped", total: "₹7,999", items: 1 },
        { id: "#ARY-7712", date: "01 Feb 2024", status: "Delivered", total: "₹4,499", items: 3 }
    ];

    return (
        <SidePanel isOpen={isOpen} onClose={onClose} title="MY ORDERS">
            {orders.length === 0 ? (
                <div className="text-center py-5">
                    <p className="text-muted mt-3">You haven't placed any orders yet.</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {orders.map(order => (
                        <div key={order.id} className="p-3 rounded-3 border border-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h6 className="fw-bold mb-0 text-danger">{order.id}</h6>
                                    <span className="text-muted small">{order.date}</span>
                                </div>
                                <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : 'bg-warning'} text-dark small p-1 px-2`}>
                                    {order.status.toUpperCase()}
                                </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary text-white-50 small">
                                <span>{order.items} Items</span>
                                <span className="fw-bold text-white fs-6">{order.total}</span>
                            </div>
                            <button className="btn btn-sm btn-outline-light w-100 mt-3 border-secondary">View Details</button>
                        </div>
                    ))}
                </div>
            )}
        </SidePanel>
    );
};

export default OrdersPanel;
