import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !project) return;
    setSubmitted(true);
    setTimeout(() => {
      // reset after feedback
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(18, 18, 20, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#FAF8F5',
          borderRadius: '20px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#121212',
            cursor: 'pointer',
          }}
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#121212', marginBottom: '0.5rem' }}>
              Message Received
            </h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Thanks, {name}! I typically reply within 5 hours.
            </p>
            <button
              onClick={onClose}
              style={{
                backgroundColor: '#121212',
                color: '#FFFFFF',
                padding: '0.65rem 1.75rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: '#888',
                  letterSpacing: '0.06em',
                  marginBottom: '0.4rem',
                }}
              >
                Start a project
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#121212', letterSpacing: '-0.03em' }}>
                Let's build something memorable.
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.35rem' }}>
                Open to remote contracts & creative collaborations worldwide.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#444', marginBottom: '0.35rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#444', marginBottom: '0.35rem' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#444', marginBottom: '0.35rem' }}>
                  PROJECT BRIEF
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your product, timeline, or design goals..."
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  padding: '0.8rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                }}
              >
                <span>Send message</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

