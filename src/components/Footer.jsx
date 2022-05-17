import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="row justify-content-">
                        <div className="col-2 offset-1">
                            <div className="logo"><h6 className=""><span className='bolds'>Eko</span>frukt</h6></div>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <a target="_blank" rel="noreferrer" href='https://t.me/uavsoffice/' className=""> <i className="icon icon-tg"></i></a>
                                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/ekofrukt.uz/' className=""><i className="icon cursor mx-3 icon-insta"></i></a>
                                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100009057463429' className=""><i className="icon cursor icon-fb"></i></a>

                            </div>
                        </div>

                        {/* <div className="col-3 offset-1">
                            <ul className='footerLeft'>
                                <h5 className="">Меню</h5>
                                <li><Link to='/'>Главная</Link></li>
                                <li><Link to='/'>Продукция</Link></li>
                                <li><Link to='/'>O компании</Link></li>
                                <li><Link to='/'>Контакты</Link></li>
                            </ul>
                        </div> */}

                        <div className="col-4 ms-auto">
                            <ul className='footerRight'>
                                <h5>Контактная информация</h5>
                                <li><a href='#!'>Тошкент шахри Сергели  тумани,  Қорасув МФЙ, Янги турмуш кўчаси 4-уй</a></li>
                                <li><a href="tel: +998998190007">+998 (99) 819-00-07</a></li>
                                <li><a className='green' href="urgut.agrofirma@inbox.ru">urgut.agrofirma@inbox.ru</a></li>
                            </ul>
                        </div>

                        <div className="col-1"></div>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <a className='lastA' href="https://kokoagency.uz/">Created with   <i className="icon mx-1 icon-love"></i>   by  kOkO digital agency. All rights reserved 	</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer