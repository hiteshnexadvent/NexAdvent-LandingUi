import React, { useEffect, useState } from 'react';
import './Style.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : 'transparent-nav'}`}>
      <div className="container-fluid">
        <a className="navbar-brand ms-5 fs-4" href="/">NexAdvent</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item"><a className="nav-link me-2" href="/">Features</a></li>
            <li className="nav-item"><a className="nav-link me-2" href="/">Pricing</a></li>
            <li className="nav-item"><a className="nav-link me-2" href="/">FAQ</a></li>
            <li className="nav-item"><a className="nav-link me-2" href="/">Blog</a></li>
            <li className="nav-item"><a className="nav-link me-5" href="/">Use Template</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
