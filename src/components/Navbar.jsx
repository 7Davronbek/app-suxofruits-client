import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <>
            {/* Gallary <FontAwesomeIcon icon={faCoffee} FontAwesomeIcon/> */}
            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className="img"><img src="/assets/image/logo.png" className='w-100' alt="" /></div>
                        </div>
                        <div className="col-6 offset-2">
                            <ul>
                                <li><Link to='/' className={`${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                                <li><Link to='/qwe' className={`${location.pathname === '/qwe' ? 'active' : ''}`} >History</Link></li>
                                <li><Link to='/qwe2' className={`${location.pathname === '/qwe2' ? 'active' : ''}`} >Service</Link></li>
                                <li><Link to='/qwe3' className={`${location.pathname === '/qwe3' ? 'active' : ''}`} >Gallary</Link></li>
                            </ul>
                        </div>
                        <div className="col-2 ml-auto">
                            <button className="btn btnGradient2 d-flex align-items-center"><span className="me-2"> <FontAwesomeIcon icon={faPhone} /> </span>Appointment me</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar