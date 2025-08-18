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
      <div className="container-fluid logo">
        <a className="navbar-brand fs-4" href="/"><img src="/images/logo.png" alt="nexadvent" style={{width:'15vw'}} /></a>
      </div>
    </nav>
  );
}
