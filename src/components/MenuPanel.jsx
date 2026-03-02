import React from 'react';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';

const MenuPanel = ({ isOpen, onClose }) => {
    return (
        <SidePanel isOpen={isOpen} onClose={onClose} title="MENU">
            <div className="navbar-nav w-100">
                <Link className="nav-link py-3 border-bottom border-secondary text-white d-flex align-items-center gap-3" to="/" onClick={onClose}>
                    Home
                </Link>
                <Link className="nav-link py-3 border-bottom border-secondary text-white d-flex align-items-center gap-3" to="/collection" onClick={onClose}>
                    Showroom
                </Link>
                <Link className="nav-link py-3 border-bottom border-secondary text-white d-flex align-items-center gap-3" to="/men" onClick={onClose}>
                    Men's Hub
                </Link>
                <Link className="nav-link py-3 border-bottom border-secondary text-white d-flex align-items-center gap-3" to="/women" onClick={onClose}>
                    Women's Studio
                </Link>
            </div>

            <div className="mt-auto pt-5">
                <h6 className="text-muted small mb-3">HELP & SETTINGS</h6>
                <div className="navbar-nav">
                    <button className="nav-link bg-transparent border-0 text-start py-2 text-white-50 small">Terms of Service</button>
                    <button className="nav-link bg-transparent border-0 text-start py-2 text-white-50 small">Privacy Policy</button>
                    <button className="nav-link bg-transparent border-0 text-start py-2 text-white-50 small">Contact Support</button>
                </div>
            </div>
        </SidePanel>
    );
};

export default MenuPanel;
