import LetterGlitch from './components/BackgroundGlitch/BackgroundGlitch'; // Поправьте путь, если папка называется иначе

function App() {
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
        boxSizing: 'border-box'
      }}>
        

        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 2rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          margin: '1rem 2rem 0 2rem',
          borderRadius: '12px'
        }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', fontSize: '1.1rem' }}>
            <span style={{ fontSize: '1.3rem' }}></span> markelxvv
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#b3b3b3' }}>
              <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
              <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            </nav>
            <button style={{
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}>Sign up</button>
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
            <button style={{
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              padding: '0.75rem 1.75rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>
              Get started
            </button>
            <button style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.75rem 1.75rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.95rem',
              backdropFilter: 'blur(4px)'
            }}>
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