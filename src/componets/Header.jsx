import React, { useEffect } from 'react';
import './header.css';

const logoUrl = './src/assets/logo.png';

export default function Header() {
  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector(".navbar")

    const handleClick = () => {
      menuBtn.classList.toggle('active');
      navigation.classList.toggle('active');
    };

    if (menuBtn) {
      menuBtn.addEventListener('click', handleClick);
      navigation.addEventListener('click', handleClick);

      // Cleanup the event listener when the component is unmounted
      return () => {
        menuBtn.removeEventListener('click', handleClick);
        navigation.removeEventListener('click', handleClick);
        
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return (
    <>
      <header className='header'>
        <a href="/"><img src={logoUrl} alt="Logo" height={60} /></a>
        <div className="menu-btn"></div>
        <nav className='navbar'>
          <a href="/about">About</a>
          <a href="/options">AnalizeApp</a>
          <a href="/course">Course</a>
          <a href="/pricing">Pricing</a>
        </nav>
        {/* <input type="text" />&nbsp;
        <a onClick={null}>
          <FontAwesomeIcon icon={faSearch} />
        </a> &nbsp; */}
      </header>
    </>
  );
}
