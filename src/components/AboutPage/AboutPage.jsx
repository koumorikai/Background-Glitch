import { motion } from 'framer-motion';
import TrueFocus from '../Focus/Focus';

export default function AboutPage({ onBack }) {
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      <header style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4rem'
      }}>
        <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>markelxvv</div>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
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

      <main style={{
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '3rem'
      }}>
        
        <div>
          <TrueFocus 
            sentence="We focus on digital shadows"
            borderColor="#8b55f7"
            glowColor="rgba(139, 85, 247, 0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'window.innerWidth < 768 ? "1fr" : "1fr 1fr"',
          gap: '2rem',
          textAlign: 'left',
          marginTop: '2rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '12px'
          }}>
            <h3 style={{ color: '#8b55f7', marginTop: 0, fontSize: '1.3rem' }}>The Mission</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
              We build high-performance, minimalist digital infrastructure. From secure data tunnels and rotating SNI layers to immersive web matrix environments. Privacy isn't an option — it's the core architecture.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '12px'
          }}>
            <h3 style={{ color: '#8b55f7', marginTop: 0, fontSize: '1.3rem' }}>The Vector</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
              Combining strict aesthetic dark design with complex logic. We focus on lightweight applications, automated scripts, and advanced cybersecurity web hubs that process operations instantly.
            </p>
          </div>
        </div>

        <div style={{
          width: '100%',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '1.5rem',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <div>Next-Gen VPN Tech</div>
          <div>Zero-Knowledge</div>
          <div>Modern Web UI</div>
        </div>

      </main>
    </div>
  );
}