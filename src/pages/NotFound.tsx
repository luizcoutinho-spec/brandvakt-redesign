import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 300px)' }}>
      <div style={{ textAlign: 'center' }}>
          <h1 className="heading-display text-teal" style={{ fontSize: '8rem', marginBottom: '1rem' }}>404</h1>
          <p className="heading-secondary" style={{ marginBottom: '2rem' }}>Page Not Found</p>
          <p className="body-large" style={{ marginBottom: '2rem' }}>The requested asset could not be located in our active directory.</p>
          <Link to="/" className="button-primary">Return to Command Center</Link>
      </div>
    </div>
  );
};

export default NotFound;
