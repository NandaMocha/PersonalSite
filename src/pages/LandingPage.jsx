import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Users, ArrowRight, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ParallaxBackground from '../components/ParallaxBackground';
import TypingText from '../components/TypingText';
import ProjectModal from '../components/ProjectModal';
import HeroGeometric from '../components/HeroGeometric';

const LandingPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const projects = [
        {
            title: "E-Learning Platform",
            description: "A comprehensive mobile learning management system with real-time video classes and progress tracking.",
            longDescription: "This project involved building a scalable mobile LMS from scratch. Key features include real-time video conferencing using WebRTC, offline content access, and detailed analytics for students and teachers. The app was built with SwiftUI for iOS and uses Firebase for the backend.",
            tags: ['iOS', 'SwiftUI', 'Firebase', 'WebRTC'],
            github: "#",
            image: null // Add image path if available
        },
        {
            title: "HealthTech Dashboard",
            description: "Web-based analytics dashboard for healthcare providers to monitor patient vitals and trends.",
            longDescription: "A complex dashboard designed for healthcare professionals. It visualizes large datasets of patient vitals in real-time. Built with React and D3.js for high-performance charting, and Node.js for the secure backend API.",
            tags: ['React', 'Node.js', 'D3.js', 'MongoDB'],
            link: "#",
            image: null
        },
        {
            title: "AI Image Enhancer",
            description: "Mobile application utilizing CoreML to enhance low-resolution images on device.",
            longDescription: "An iOS application that uses custom CoreML models to upscale and denoise images directly on the user's device. It ensures privacy by processing everything locally and achieves near real-time performance on modern iPhones.",
            tags: ['iOS', 'CoreML', 'Python', 'Metal'],
            github: "#",
            image: null
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                width: '100%',
                minHeight: '100vh',
                background: 'transparent', // Transparent to show ParallaxBackground
                color: 'var(--text-primary)',
                overflowX: 'hidden',
                position: 'relative',
            }}
        >
            <ParallaxBackground />

            {/* Navigation */}
            <nav style={{
                padding: '2rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backdropFilter: 'blur(10px)',
                background: 'rgba(10, 10, 10, 0.5)',
            }}>
                <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>NM.</div>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#services" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Services</a>
                    <a href="#projects" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects</a>
                    <a href="#contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Contact</a>
                    <Link to="/profile" style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        color: 'var(--text-primary)', fontSize: '0.9rem',
                        padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '50px'
                    }}>
                        <User size={16} /> My Profile
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center', // Center vertically
                justifyContent: 'space-between', // Space between text and visual
                padding: '0 5%',
                marginTop: '60px',
                position: 'relative',
                zIndex: 1,
                flexWrap: 'wrap', // Allow wrapping on mobile
                gap: '2rem'
            }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ maxWidth: '800px', flex: '1 1 500px' }} // Allow growing/shrinking
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', display: 'block', marginBottom: '1rem' }}
                    >
                        WELCOME TO MY DIGITAL SPACE
                    </motion.span>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem' }}
                    >
                        Crafting Digital Experiences with <br /> <TypingText />
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}
                    >
                        I specialize in building high-performance mobile applications, scalable digital systems, and empowering the next generation of developers through mentorship.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontWeight: 600,
                            textDecoration: 'none',
                        }}
                    >
                        Let's Collaborate <ArrowRight size={20} />
                    </motion.a>
                </motion.div>

                {/* Geometric Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        flex: '1 1 400px',
                        display: 'flex',
                        justifyContent: 'center',
                        minHeight: '400px' // Ensure space is reserved
                    }}
                >
                    <HeroGeometric />
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" style={{ padding: '5rem 5%', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Services</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Comprehensive solutions tailored to your digital needs. From concept to deployment, I cover the entire lifecycle.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    <ServiceCard
                        title="Mobile App Development"
                        description="Native iOS (Swift/SwiftUI) and cross-platform solutions that deliver seamless user experiences and high performance."
                        icon={<Smartphone size={24} />}
                        delay={0.1}
                    />
                    <ServiceCard
                        title="End-to-End Digital Systems"
                        description="Full-stack development of robust web applications and backend systems, ensuring scalability and security."
                        icon={<Monitor size={24} />}
                        delay={0.2}
                    />
                    <ServiceCard
                        title="Tech Mentoring"
                        description="Personalized guidance for individuals and teams to master iOS development, software architecture, and career growth."
                        icon={<Users size={24} />}
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{ padding: '5rem 5%', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Projects</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        A selection of my recent work in mobile and web development.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {projects.map((project, index) => (
                        <div key={index} onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                image={project.image}
                            // Don't pass links here, we want the modal to handle it
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: '5rem 5%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                        padding: '4rem 2rem',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Start a Project?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                        Let's turn your ideas into reality. Reach out for a consultation.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a href="mailto:hello@nandamochammad.com" style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            color: 'var(--text-primary)', padding: '0.8rem 1.5rem',
                            border: '1px solid var(--text-secondary)', borderRadius: '50px',
                            transition: 'all 0.3s ease'
                        }}>
                            <Mail size={20} /> Email Me
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer style={{
                padding: '2rem 5%',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                position: 'relative',
                zIndex: 1,
            }}>
                <div>© {new Date().getFullYear()} Nanda Mochammad. All rights reserved.</div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: 'inherit' }}>Twitter</a>
                    <a href="#" style={{ color: 'inherit' }}>LinkedIn</a>
                    <a href="#" style={{ color: 'inherit' }}>GitHub</a>
                </div>
            </footer>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </motion.div>
    );
};

export default LandingPage;
