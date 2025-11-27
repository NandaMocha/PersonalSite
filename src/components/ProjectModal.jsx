import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
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
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                }}
            >
                <motion.div
                    layoutId={`project-${project.title}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: '#1a1a1a',
                        width: '100%',
                        maxWidth: '800px',
                        maxHeight: '90vh',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'rgba(0,0,0,0.5)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                        }}
                    >
                        <X size={20} />
                    </button>

                    <div style={{ height: '300px', background: '#222', position: 'relative' }}>
                        {project.image ? (
                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#333' }}>
                                IMG
                            </div>
                        )}
                    </div>

                    <div style={{ padding: '2rem', overflowY: 'auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h2>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {project.tags.map((tag, index) => (
                                <span key={index} style={{
                                    fontSize: '0.9rem',
                                    padding: '0.3rem 1rem',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    color: 'var(--accent)',
                                    borderRadius: '20px',
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            {project.longDescription || project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'var(--accent)', color: 'white',
                                    padding: '0.8rem 1.5rem', borderRadius: '50px',
                                    textDecoration: 'none', fontWeight: 600
                                }}>
                                    Live Demo <ExternalLink size={18} />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'rgba(255,255,255,0.1)', color: 'white',
                                    padding: '0.8rem 1.5rem', borderRadius: '50px',
                                    textDecoration: 'none', fontWeight: 600
                                }}>
                                    View Code <Github size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
