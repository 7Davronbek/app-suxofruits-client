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
                            <Link to='/' className="img"><h6 className=""><span className='bolds'>Eko</span>frukt</h6></Link>
                        </div>
                        <div className="col-7 ">
                            <ul>
                                <li><Link to='/' className={`${location.pathname === '/' ? 'active' : ''}`}>Главная</Link></li>
                                <li><Link to='/production' className={`${location.pathname === '/production' ? 'active' : ''}`} >Продукция</Link></li>
                                <li><Link to='/about-company' className={`${location.pathname === '/about-company' ? 'active' : ''}`} >О компании</Link></li>
                                {/* <li><Link to='/about-company' className={`${location.pathname === '/about-company' ? 'active' : ''}`} >Польза сухофруктов</Link></li> */}
                                <li><Link to='/photogalary' className={`${location.pathname === '/photogalary' ? 'active' : ''}`} >Фотогаларея</Link></li>
                                <li><Link to='/contacts' className={`${location.pathname === '/contacts' ? 'active' : ''}`} >Контакты</Link></li>
                            </ul>
                        </div>
                        <div className="col-2 ml-auto">
                            <a href='tel: +998998190007 ' className="btn btnGradient2 d-flex align-items-center"><span className="me-3"> <FontAwesomeIcon icon={faPhone} /> </span>Позвонить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar