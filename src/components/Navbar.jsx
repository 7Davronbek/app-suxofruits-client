import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar