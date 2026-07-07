import { useState, useEffect } from 'react';
import RippleGrid from '../RippleGrid/RippleGrid';

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  padding: '2rem',
  borderRadius: '12px',
  textAlign: 'left',
  transition: 'transform 0.3s, border-color 0.3s',
  cursor: 'pointer'
};

export default function FeaturesPage({ onBack }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box',
      padding: isMobile ? '1.5rem' : '2rem',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#5227FF"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction
          mouseInteractionRadius={0.8}
          opacity={1}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.1}
          gridRotation={0}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4rem',
          paddingTop: '1rem'
        }}>
          <div style={{ fontWeight: '600', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>markelxvv</div>
          <button 
            onClick={onBack}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            ← Back
          </button>
        </header>

        <main style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', margin: '0 0 1rem 0', letterSpacing: '-0.03em' }}>
              Cyber-Infrastructure
            </h2>
            <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>
              Next-gen tactical tools engineered for complete anonymity and routing control.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: '1.5rem',
            marginTop: '1rem'
          }}>
            
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#5227FF';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>SNI Rotation</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Dynamic bypass technology via automated SNI host rotation. Seamlessly evades deep packet inspection (DPI) filters.
              </p>
            </div>

            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#5227FF';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>Quantum Tunneling</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Custom wire-protocol layers for secure networking. Zero logs, heavily obfuscated metadata payloads, fast delivery.
              </p>
            </div>

            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#5227FF';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>Traffic Matrix</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Real-time dashboard processing inside telemetry tunnels. Tracks throughput speeds with zero client-side footprint.
              </p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}