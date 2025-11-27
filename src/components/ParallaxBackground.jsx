import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 20, stiffness: 100 }; // Softer spring
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Set initial size
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // Transform mouse position into movement
    // We use a function to calculate transform based on current windowSize state to avoid stale closures if we used pure hooks with dependencies, 
    // but useTransform with motion values is reactive. 
    // However, the range [0, window.innerWidth] needs to be correct.
    // We'll use percentage based transforms or just large pixel values.

    const moveX1 = useTransform(springX, [0, windowSize.width || 1000], [-100, 100]);
    const moveY1 = useTransform(springY, [0, windowSize.height || 1000], [-100, 100]);

    const moveX2 = useTransform(springX, [0, windowSize.width || 1000], [50, -50]);
    const moveY2 = useTransform(springY, [0, windowSize.height || 1000], [50, -50]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0, // Background layer
                pointerEvents: 'none',
                overflow: 'hidden',
                background: 'var(--bg-primary)', // Base color
            }}
        >
            {/* Layer 1: Large subtle glow */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '40vw',
                    height: '40vw',
                    maxWidth: '600px',
                    maxHeight: '600px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    x: moveX1,
                    y: moveY1,
                }}
            />

            {/* Layer 2: Secondary accent blob */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '35vw',
                    height: '35vw',
                    maxWidth: '500px',
                    maxHeight: '500px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    x: moveX2,
                    y: moveY2,
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
