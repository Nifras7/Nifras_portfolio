import React, { Component, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('CRITICAL REACT ERROR:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: '#1A1818',
            color: '#E8E4E0',
            fontFamily: 'monospace',
          }}
        >
          <div
            style={{
              maxWidth: '640px',
              width: '100%',
              background: '#252121',
              border: '1px solid #302A2A',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <h2 style={{ color: '#F87171', marginBottom: '1rem', fontSize: '1.25rem' }}>
              Application Render Error
            </h2>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.875rem' }}>
              {this.state.error?.stack || this.state.error?.message || String(this.state.error)}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '1.5rem',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                background: '#E8E4E0',
                color: '#1A1818',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </StrictMode>
  );
}
