import './Services.css'; // Reusing established container layout

const Contact = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="container">
          <span className="overline">Initiate Engagement</span>
          <h1 className="heading-display">Secure Your Defenses</h1>
          <p className="body-large header-subtitle">
            Connect with our architecture team to discuss your security posture, requirements, and compliance challenges.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="glass-panel" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem' }}>
           <div>
              <h2 className="heading-secondary">Global Hubs</h2>
              <ul style={{ listStyle: 'none', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                 <li>
                    <strong style={{ color: 'var(--color-teal)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>London, UK</strong>
                    <div className="body-large" style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Global Command Center</div>
                 </li>
                 <li>
                    <strong style={{ color: 'var(--color-teal)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>São Paulo, BR</strong>
                    <div className="body-large" style={{ marginTop: '0.5rem', fontSize: '1rem' }}>LATAM Operations</div>
                 </li>
                 <li>
                    <strong style={{ color: 'var(--color-teal)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Dubai, UAE</strong>
                    <div className="body-large" style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Middle East Hub</div>
                 </li>
                 <li>
                    <strong style={{ color: 'var(--color-teal)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Kinshasa, CD</strong>
                    <div className="body-large" style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Africa Headquarters</div>
                 </li>
              </ul>
           </div>
           
           <div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                       <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>First Name</label>
                       <input type="text" style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                       <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Last Name</label>
                       <input type="text" style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                    </div>
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Corporate Email</label>
                    <input type="email" style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Inquiry Details</label>
                    <textarea rows={5} style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                 </div>
                 <button type="button" className="button-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Submit Communication</button>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
