import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    {/* Gallary <FontAwesomeIcon icon={faCoffee} FontAwesomeIcon/> */}
        <div className="navBar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-1">
                        <div className="img"><img src="/assets/image/logo.png" className='w-100' alt="" /></div>
                    </div>
                    <div className="col-6 offset-2">
                        <ul>
                            <li><Link to='/' className='active'>Home</Link></li>
                            <li><Link to='/' >History</Link></li>
                            <li><Link to='/' >Service</Link></li>
                            <li><Link to='/' >Gallary</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 ml-auto">
                        <button className="btn btnGradient d-flex align-items-center"><span className="me-2"> <FontAwesomeIcon icon={faPhone} /> </span>Appointment me</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar