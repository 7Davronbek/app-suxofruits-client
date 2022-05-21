import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    const [burger, setBurger] = useState(false)

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
                        <div className="col-lg-2 col-4">
                            <Link to='/' className="img"><h6 className=""><span className='bolds'>Eko</span>frukt</h6></Link>
                        </div>
                        <div className="col-10 mobileWrap ">
                            <ul className={`${burger ? 'active' : ''}`}>
                                <li><Link onClick={() => setBurger(false)} to='/' className={`${location.pathname === '/' ? 'active' : ''}`}>Главная</Link></li>
                                <li><Link onClick={() => setBurger(false)} to='/production' className={`${location.pathname === '/production' ? 'active' : ''}`} >Продукция</Link></li>
                                <li><Link onClick={() => setBurger(false)} to='/about-company' className={`${location.pathname === '/about-company' ? 'active' : ''}`} >О компании</Link></li>
                                {/* <li><Link to='/about-company' className={`${location.pathname === '/about-company' ? 'active' : ''}`} >Польза сухофруктов</Link></li> */}
                                <li><Link onClick={() => setBurger(false)} to='/photogalary' className={`${location.pathname === '/photogalary' ? 'active' : ''}`} >Фотогаларея</Link></li>
                                <li><Link onClick={() => setBurger(false)} to='/contacts' className={`${location.pathname === '/contacts' ? 'active' : ''}`} >Контакты</Link></li>
                                <a href='tel: +998998190007 ' className="btn btnGradient2 ml-auto d-flex align-items-center"><span className="me-3"> <FontAwesomeIcon icon={faPhone} /> </span>Позвонить</a>
                            </ul>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar