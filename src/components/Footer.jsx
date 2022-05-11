import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <div className="logo"><img src="/assets/image/logo.png" alt="" /></div>
                            <div className="d-flex align-items-center">
                                <div className="icon icon-fb"></div>
                                <div className="icon icon-insta"></div>
                                <div className="icon icon-tg"></div>

                            </div>
                        </div>

                        <div className="col-4">
                            <ul>
                                <h5 className="">Меню</h5>
                                <li><Link to='/'>Главная</Link></li>
                                <li><Link to='/'>Продукция</Link></li>
                                <li><Link to='/'>O компании</Link></li>
                                <li><Link to='/'>Контакты</Link></li>
                            </ul>
                        </div>

                        <div className="col-4">
                        </div>

                    </div>
                </div>
            </div>


            <div className="vh-100"></div>
        </>
    )
}

export default Footer