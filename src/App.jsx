import { useState, useEffect } from 'react';
import LetterGlitch from './components/BackgroundGlitch/BackgroundGlitch'; 
import AuthPage from './components/AuthPage/AuthPage'; 
import AboutPage from './components/AboutPage/AboutPage';
import FeaturesPage from './components/FeaturesPage/FeaturesPage';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [visiblePage, setVisiblePage] = useState('landing');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changePage = (targetPage) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(targetPage);
      setVisiblePage(targetPage);
      setIsLoading(false);
    }, 400);
  };

  if (visiblePage === 'features') {
    return <FeaturesPage onBack={() => changePage('landing')} />;
  }

  if (visiblePage === 'about') {
    return <AboutPage onBack={() => changePage('landing')} />;
  }

  if (visiblePage === 'auth') {
    return <AuthPage onBack={() => changePage('landing')} />;
  }

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#000', 
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#fff'
    }}>

      {isLoading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderTopColor: '#8b55f7',
            borderRadius: '50%',
            animation: 'spin 0.6s linear infinite'
          }} />
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes contentAppear {
          from { opacity: 0; transform: scale(0.99) translateY(4px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          speed={10}
          colors={["#2a135c", "#8b55f7", "#431855"]} 
        />
      </div>

      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        boxSizing: 'border-box',
        animation: 'contentAppear 0.5s ease-out'
      }}>
        
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '0.75rem 1rem' : '1.25rem 2rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          margin: isMobile ? '0.5rem 0.5rem 0 0.5rem' : '1rem 2rem 0 2rem',
          borderRadius: '12px',
          boxSizing: 'border-box'
        }}>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontWeight: '600', 
            fontSize: isMobile ? '0.95rem' : '1.1rem', 
            whiteSpace: 'nowrap' 
          }}>
            markelxvv
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? '1rem' : '2rem'
          }}>
    
            {!isMobile && (
              <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#b3b3b3' }}>
                <span style={{ color: 'inherit', cursor: 'pointer' }} onClick={() => changePage('features')}>Features</span>
                <span style={{ color: 'inherit', cursor: 'pointer' }} onClick={() => changePage('about')}>About</span>
              </nav>
            )}
            
            <button 
              onClick={() => changePage('auth')} 
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                padding: isMobile ? '0.4rem 0.9rem' : '0.5rem 1.25rem', 
                borderRadius: '8px', 
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                whiteSpace: 'nowrap',
                WebkitAppearance: 'none',
                appearance: 'none' 
              }}
            >
              Sign up
            </button>
          </div>
        </header>

        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1rem',
          gap: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.3rem 0.8rem',
            borderRadius: '20px',
            fontSize: '0.8rem'
          }}>
            <span style={{ 
              backgroundColor: '#fff', 
              color: '#000', 
              padding: '0.1rem 0.4rem', 
              borderRadius: '10px', 
              fontWeight: 'bold',
              fontSize: '0.7rem'
            }}>NEW</span>
            <span>Check out the new features!</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            maxWidth: '800px',
            margin: 0,
            letterSpacing: '-0.02em'
          }}>
            Am I finally a real hacker<br />now, mom?
          </h1>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button 
              onClick={() => changePage('auth')} 
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                padding: '0.75rem 1.75rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Get started
            </button>
            <button 
              onClick={() => changePage('about')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '0.75rem 1.75rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem',
                backdropFilter: 'blur(4px)'
              }}
            >
              Learn more
            </button>
          </div>
        </main>

        <footer style={{ height: '2rem' }}></footer>
      </div>

    </div>
  );
}

export default App;