import { useState, useEffect } from 'react';
import Dither from '../Dither/Dither';

const inputStyle = {
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '8px',
  padding: '0.85rem 1rem',
  color: '#fff',
  fontSize: '0.95rem',
  marginBottom: '1rem',
  outline: 'none',
  boxSizing: 'border-box',
};

export default function ResetPasswordPage({ onBack, onLoginClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#0a0a0c',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      
      {!isMobile && (
        <div style={{
          flex: '1 1 auto',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <Dither
              waveColor={[0.6588235294117647, 0.3333333333333333, 0.9686274509803922]}
              disableAnimation={false}
              enableMouseInteraction={true}
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
              pixelSize={2}
            />
          </div>

          <button 
            onClick={onBack}
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              zIndex: 10,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
          >
            ← Back to site
          </button>
        </div>
      )}

      <div style={{
        width: isMobile ? '100%' : '550px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '2.5rem 1.5rem' : '3rem',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}>
        
        <div style={{ flex: 1 }} />

        <div style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          {isMobile && (
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span 
                onClick={onBack} 
                style={{ 
                  color: '#666', 
                  cursor: 'pointer', 
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.2rem 0'
                }}
              >
                ← Back
              </span>
            </div>
          )}
          
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem', marginTop: 0 }}>
            Reset password
          </h2>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem', marginTop: 0 }}>
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <input type="email" placeholder="Email address" style={inputStyle} />

          <button style={{
            backgroundColor: '#7c4dff',
            color: '#fff',
            border: 'none',
            padding: '0.85rem',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            marginTop: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            Send Reset Link
          </button>

          <p style={{ 
            fontSize: '0.85rem', 
            color: '#555558', 
            margin: '0.5rem 0',
            letterSpacing: '-0.01em'
          }}>
            Remember your password?{' '}
            <span onClick={onLoginClick} style={{ color: '#9a9a9f', textDecoration: 'underline', transition: 'color 0.2s', cursor: 'pointer' }}
               onMouseEnter={(e) => e.target.style.color = '#fff'}
               onMouseLeave={(e) => e.target.style.color = '#9a9a9f'}>
              Log In
            </span>
          </p>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ fontSize: '0.75rem', color: '#444', textAlign: 'center', marginTop: '2rem', lineHeight: '1.4' }}>
          By continuing, you agree to our{' '}
          <a href="#terms" style={{ color: '#666', textDecoration: 'underline' }}>Terms of Service</a> and{' '}
          <a href="#privacy" style={{ color: '#666', textDecoration: 'underline' }}>Privacy Policy</a>.
        </div>

      </div>
    </div>
  );
}