import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EntryPage = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/home');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            <div style={{ zIndex: 1, textAlign: 'center' }}>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Nanda Mochammad
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                    }}
                >
                    iOS Developer & AI Researcher
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--text-secondary)',
                        color: 'var(--text-primary)',
                        padding: '1rem 3rem',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}
                >
                    Enter
                </motion.button>
            </div>
        </motion.div>
    );
};

export default EntryPage;
