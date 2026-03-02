import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SidePanel = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 1040
                        }}
                    />
                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            right: 0,
                            top: 0,
                            width: '400px',
                            maxWidth: '100%',
                            height: '100%',
                            backgroundColor: '#121212',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            zIndex: 1050,
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                            borderLeft: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <div className="panel-header p-4 d-flex justify-content-between align-items-center border-bottom border-secondary">
                            <h3 className="m-0 fw-bold neon-text" style={{ fontSize: '1.5rem' }}>{title}</h3>
                            <button
                                onClick={onClose}
                                className="btn-close btn-close-white shadow-none"
                                style={{ fontSize: '1.2rem' }}
                            ></button>
                        </div>
                        <div className="panel-content flex-grow-1 overflow-auto p-4">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SidePanel;
