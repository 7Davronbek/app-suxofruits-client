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
                            <Link to='/' className="img"><img src="/assets/image/logo.png" className='w-100' alt="" /></Link>
                        </div>
                        <div className="col-7 offset-1">
                            <ul>
                                <li><Link to='/' className={`${location.pathname === '/' ? 'active' : ''}`}>Главная</Link></li>
                                <li><Link to='/qwe' className={`${location.pathname === '/qwe' ? 'active' : ''}`} >Продукция</Link></li>
                                <li><Link to='/about-company' className={`${location.pathname === '/about-company' ? 'active' : ''}`} >О компании</Link></li>
                                <li><Link to='/qwe3' className={`${location.pathname === '/qwe3' ? 'active' : ''}`} >Контакты</Link></li>
                            </ul>
                        </div>
                        <div className="col-2 ml-auto">
                            <a href='tel: +998979287878' className="btn btnGradient2 d-flex align-items-center"><span className="me-2"> <FontAwesomeIcon icon={faPhone} /> </span>Appointment me</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar