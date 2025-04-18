import NavbarComponent from './components/NavbarComponent';

import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h1>

      <p style={{ marginBottom: '1rem' }}>
        Hello! I'm Juan Sanjaya, a passionate developer dedicated to creating seamless and efficient web applications. My focus is on integrating advanced technologies to enhance user experience and functionality.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        I'm always eager to connect with fellow professionals and explore new opportunities. Feel free to reach out to me through LinkedIn.
      </p>

      <a
        href="https://www.linkedin.com/in/juan-sanjaya"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0A66C2',
          color: '#ffffff',
          borderRadius: '0.375rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#004182')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0A66C2')}
      >
        Connect on LinkedIn
      </a>
    </div>
  );
}