import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faYoutube, faPaypal, faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"
import logoUrl from './Header.jsx'

function Footer(){
    return(
        <footer className='stickyFooter'>
            <ul className='footerPages'>
                <li><a href="/legalstuff">Legal Stuff</a></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
                <li><a href="/security">Security</a></li>
            </ul>
            <a className='brand' id='twitter' href='https://twitter.com/signalnetworkio' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
            <a className='brand' id='telegram' href='https://t.me/+THSBNLRE0fdkOGY0' target='_blank'><FontAwesomeIcon icon={faTelegram} /></a>
            <a className='brand' id='youtube' href='https://www.youtube.com/channel/UCMa0fXnG0AKNk5_SqXzPNmQ' target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
            <p>Copyright &copy; {new Date().getFullYear()} SignalNetwork.io</p>
        </footer>
    )
}

export default Footer