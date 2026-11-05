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
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog">
        <button
          onClick={onClose}
          aria-label="Close"
          className="modal-close-btn"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--surface-hover)',
                color: 'var(--foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4)',
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3
              style={{
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--fw-heading)',
                color: 'var(--foreground)',
                marginBottom: 'var(--space-2)',
                letterSpacing: 'var(--tracking-heading)',
              }}
            >
              Message Received
            </h3>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--lh-body)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Thanks, {name}! I typically reply within 5 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div className="modal-label">
                Start a project
              </div>
              <h2
                style={{
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--fw-heading)',
                  color: 'var(--foreground)',
                  letterSpacing: 'var(--tracking-heading)',
                  lineHeight: 'var(--lh-heading)',
                }}
              >
                Let's build something memorable.
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--muted)',
                  marginTop: 'var(--space-2)',
                  lineHeight: 'var(--lh-body)',
                }}
              >
                Open to remote contracts & creative collaborations worldwide.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <label className="modal-label">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div>
                <label className="modal-label">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div>
                <label className="modal-label">
                  PROJECT BRIEF
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your product, timeline, or design goals..."
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="modal-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: 'var(--space-2)' }}
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
