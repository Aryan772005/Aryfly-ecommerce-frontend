import React from 'react';
import SidePanel from './SidePanel';

const AccountPanel = ({ isOpen, onClose, toggleTheme, isDarkMode }) => {
    const user = {
        name: "Aryan Fly",
        email: "aryan@fly.com",
        memberSince: "Jan 2024",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
    };

    return (
        <SidePanel isOpen={isOpen} onClose={onClose} title="MY ACCOUNT">
            <div className="text-center mb-4">
                <img
                    src={user.avatar}
                    alt="Avatar"
                    className="rounded-circle border border-danger mb-3 shadow-sm"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h4 className="fw-bold">{user.name}</h4>
                <p className="text-muted small">{user.email}</p>
            </div>

            <div className="settings-section mb-4">
                <h6 className="text-muted small mb-3 border-bottom border-secondary pb-2">PREFERENCES</h6>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <span>Dark Mode</span>
                    <div className="form-check form-switch p-0">
                        <input
                            className="form-check-input ms-0"
                            type="checkbox"
                            role="switch"
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            style={{ cursor: 'pointer', scale: '1.2' }}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <span>Email Notifications</span>
                    <div className="form-check form-switch p-0">
                        <input className="form-check-input ms-0" type="checkbox" role="switch" defaultChecked style={{ scale: '1.2' }} />
                    </div>
                </div>
            </div>

            <div className="list-group list-group-flush bg-transparent">
                <button className="list-group-item list-group-item-action bg-transparent text-white border-secondary py-3 d-flex align-items-center gap-3">
                    <i className="bi bi-person-gear"></i> Profile Settings
                </button>
                <button className="list-group-item list-group-item-action bg-transparent text-white border-secondary py-3 d-flex align-items-center gap-3">
                    <i className="bi bi-geo-alt"></i> Saved Addresses
                </button>
                <button className="list-group-item list-group-item-action bg-transparent text-white border-secondary py-3 d-flex align-items-center gap-3">
                    <i className="bi bi-shield-lock"></i> Security & Password
                </button>
            </div>

            <div className="mt-5 pt-3 border-top border-secondary">
                <button className="btn btn-outline-danger w-100 fw-bold py-2">LOGOUT</button>
            </div>
        </SidePanel>
    );
};

export default AccountPanel;
