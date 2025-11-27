import React from 'react';
import { motion } from 'framer-motion';

const HeroGeometric = () => {
    return (
        <div style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px'
        }}>
            {/* Central Core */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(45deg, var(--accent), #8b5cf6)',
                    filter: 'blur(20px)',
                    opacity: 0.5,
                    position: 'absolute',
                }}
            />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    width: '80px',
                    height: '80px',
                    border: '2px solid rgba(255,255,255,0.8)',
                    borderRadius: '20px',
                    position: 'absolute',
                }}
            />

            {/* Orbiting Rings */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        rotateZ: [0, 360]
                    }}
                    transition={{
                        duration: 15 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 2
                    }}
                    style={{
                        position: 'absolute',
                        width: `${200 + i * 60}px`,
                        height: `${200 + i * 60}px`,
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Particle on ring */}
                    <motion.div
                        style={{
                            width: '10px',
                            height: '10px',
                            background: i === 2 ? 'var(--accent)' : '#fff',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '0 0 10px currentColor'
                        }}
                    />
                </motion.div>
            ))}

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '20%',
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--accent)',
                    borderRadius: '8px',
                    opacity: 0.6
                }}
            />

            <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '20%',
                    width: '30px',
                    height: '30px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
};

export default HeroGeometric;
