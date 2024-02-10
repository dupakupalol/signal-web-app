import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./header.css"

const logoUrl = "./src/assets/logo.png"

export default function Header(){
    return(
        <header className='header'>
            <a href="/">
                    <img src={logoUrl} alt="Logo" height={90}/>
            </a>
            <nav className='navbar'>
                <a href="/about">About Us</a>
                <a href="/system">Our System</a>
                <a href="/pricing">Pricing</a>
            </nav>
         {/* <input type="text" />&nbsp;
            <a onClick={null}>
                <FontAwesomeIcon icon={faSearch} />
            </a> &nbsp; */}
        </header>
    )
}