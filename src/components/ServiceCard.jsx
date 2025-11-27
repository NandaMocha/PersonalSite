import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.6 }}
            whileHover={{ y: -10 }}
            style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'default',
            }}
        >
            <div style={{
                width: '50px',
                height: '50px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '0.5rem'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{description}</p>
        </motion.div>
    );
};

export default ServiceCard;
