import { useState, useEffect } from 'react';
import Dither from '../Dither/Dither';
import RegisterPage from './RegisterPage';
import ResetPasswordPage from './ResetPasswordPage';

const socialButtonStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.6rem',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '8px',
  color: '#fff',
  padding: '0.65rem',
  fontSize: '0.9rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

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

export default function AuthPage({ onBack }) {
  const [authStep, setAuthStep] = useState('login');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleStep, setVisibleStep] = useState('login');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeStep = (targetStep) => {
    setIsLoading(true);
    setTimeout(() => {
      setAuthStep(targetStep);
      setVisibleStep(targetStep);
      setIsLoading(false);
    }, 400); 
  };

  if (visibleStep === 'register') {
    return <RegisterPage onBack={onBack} onLoginClick={() => changeStep('login')} />;
  }

  if (visibleStep === 'reset') {
    return <ResetPasswordPage onBack={onBack} onLoginClick={() => changeStep('login')} />;
  }

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
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        
        {isLoading && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#0a0a0c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderTopColor: '#7c4dff',
              borderRadius: '50%',
              animation: 'spin 0.6s linear infinite'
            }} />
          </div>
        )}

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes contentAppear {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
        <div style={{ flex: 1 }} />

        <div style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          animation: 'contentAppear 0.4s ease-out'
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
            Welcome back
          </h2>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem', marginTop: 0 }}>
            Please log in to continue.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button style={socialButtonStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="21.17" y1="8" x2="12" y2="8"/>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
              </svg>
              Google
            </button>
            <button style={socialButtonStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              GitHub
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', color: '#444', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
            <span style={{ padding: '0 1rem' }}>OR</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
          </div>

          <input type="email" placeholder="Email" style={inputStyle} />
          
          <div style={{ position: 'relative', width: '100%' }}>
            <input type="password" placeholder="Password" style={inputStyle} />
            <span style={{ position: 'absolute', right: '1rem', top: '35%', color: '#666', cursor: 'pointer', fontSize: '0.9rem', userSelect: 'none' }}>👁</span>
          </div>

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
            Continue
          </button>

          <p style={{ 
            fontSize: '0.85rem', 
            color: '#555558', 
            margin: '0.5rem 0 0.25rem 0',
            letterSpacing: '-0.01em'
          }}>
            Forgot your password?{' '}
            <span 
              onClick={() => changeStep('reset')} 
              style={{ color: '#9a9a9f', textDecoration: 'underline', transition: 'color 0.2s', cursor: 'pointer' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#9a9a9f'}
            >
              Reset Your Password
            </span>
          </p>

          <p style={{ 
            fontSize: '0.85rem', 
            color: '#555558', 
            margin: '0.25rem 0 0.5rem 0',
            letterSpacing: '-0.01em'
          }}>
            Don't have an account?{' '}
            <span 
              onClick={() => changeStep('register')} 
              style={{ color: '#9a9a9f', textDecoration: 'underline', transition: 'color 0.2s', cursor: 'pointer' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#9a9a9f'}
            >
              Register
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