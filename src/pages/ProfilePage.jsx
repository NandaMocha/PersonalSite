import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Briefcase, Code, User, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxBackground from '../components/ParallaxBackground';

const ProfilePage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'var(--bg-primary)', // Ensure background color is set
                color: 'var(--text-primary)',
                padding: '2rem 5%',
                position: 'relative',
                overflowX: 'hidden'
            }}
        >
            <ParallaxBackground />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                <Link to="/home" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    color: 'var(--text-secondary)', marginBottom: '3rem',
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px'
                }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '5rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5, boxShadow: '0 0 30px var(--accent)' }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{
                            width: '180px', height: '180px',
                            borderRadius: '30px', background: '#333',
                            overflow: 'hidden', border: '2px solid var(--accent)',
                            boxShadow: '0 20px 50px rgba(59, 130, 246, 0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        <img src="/assets/nandamochammad-profile.webp" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    <div style={{ flex: 1 }}>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.5rem', lineHeight: 1.1 }}
                        >
                            Nanda Mochammad
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 500 }}
                        >
                            iOS Developer & AI Researcher
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={18} /> Indonesia</span>
                            <a href="mailto:hello@nandamochammad.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}><Mail size={18} /> hello@nandamochammad.com</a>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Briefcase size={18} /> Open for Projects</span>
                        </motion.div>
                    </div>
                </motion.header>

                <motion.div variants={containerVariants} initial="hidden" animate="visible">

                    {/* About Section */}
                    <motion.section variants={itemVariants} style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--accent)' }}><User size={24} /></div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>About Me</h2>
                        </div>
                        <div style={{
                            background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)', lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-secondary)'
                        }}>
                            <p style={{ marginBottom: '1rem' }}>
                                I am a passionate developer with a deep focus on mobile technologies and artificial intelligence.
                                My journey involves creating intuitive iOS applications and exploring the frontiers of AI to build smarter systems.
                            </p>
                            <p>
                                I have worked on diverse projects ranging from <strong>School Management Systems</strong> to <strong>HealthTech</strong> solutions and <strong>AI-driven mobile apps</strong>.
                                Beyond coding, I love sharing knowledge through mentoring, helping others navigate the complex world of software development.
                            </p>
                        </div>
                    </motion.section>

                    {/* Experience Section */}
                    <motion.section variants={itemVariants} style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: '#8b5cf6' }}><Award size={24} /></div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>Experience</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                {
                                    role: "Senior iOS Developer",
                                    company: "Everald",
                                    period: "2021 - Present",
                                    desc: "Leading the mobile development team, architecting scalable iOS apps using Swift and SwiftUI. Spearheaded the development of a comprehensive School Management System and HealthTech solutions."
                                },
                                {
                                    role: "AI Research Assistant",
                                    company: "University Lab",
                                    period: "2019 - 2021",
                                    desc: "Conducted research on computer vision and machine learning models for healthcare applications. Developed AI-driven features for mobile platforms."
                                },
                                {
                                    role: "Freelance Mobile Developer",
                                    company: "Self-Employed",
                                    period: "2017 - 2019",
                                    desc: "Developed custom mobile solutions for various clients, including e-commerce apps and productivity tools, focusing on user experience and performance."
                                }
                            ].map((job, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    style={{
                                        padding: '1.5rem', borderLeft: '2px solid var(--accent)',
                                        background: 'rgba(255,255,255,0.02)', borderRadius: '0 16px 16px 0',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.3rem', margin: 0 }}>{job.role}</h3>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.8rem', borderRadius: '12px' }}>{job.period}</span>
                                    </div>
                                    <div style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 500 }}>{job.company}</div>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{job.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section variants={itemVariants}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: '#10b981' }}><Code size={24} /></div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>Technical Skills</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Mobile Development</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {['Swift', 'SwiftUI', 'UIKit', 'Combine', 'CoreData', 'XCode'].map(skill => (
                                        <span key={skill} style={{ padding: '0.4rem 1rem', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>AI & Backend</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {['Python', 'TensorFlow', 'CoreML', 'Node.js', 'React', 'Firebase'].map(skill => (
                                        <span key={skill} style={{ padding: '0.4rem 1rem', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                </motion.div>
            </div>
        </div>
    );
};

export default ProfilePage;
