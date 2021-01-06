import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className = 'navbar'>
                <div className='navbar-container'>
                    <Link to ='/' className='navbar-logo' onClick ={closeMobileMenu}>
                        Chrome Chemical Industries<i className='fab fa-typo3' /> 
                        {/* for imageLOGO insertion */}
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}  >
                        < i className = {click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to = '/' className='nav-links' onClick ={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/company' className='nav-links' onClick ={closeMobileMenu}>
                                Company
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/product' className='nav-links' onClick ={closeMobileMenu}>
                                Product
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/contact' className='nav-links' onClick ={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar
