import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="row justify-content-">
                        <div className="col-2 offset-1">
                            <div className="logo"><h6 className=""><span className='bold'>Eko</span>frukt</h6></div>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <div className="icon cursor icon-tg"></div>
                                <div className="icon cursor mx-3 icon-insta"></div>
                                <div className="icon cursor icon-fb"></div>

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
                                <li><a href='#!'>Республика Узбекистан, Самаркандская область, район Ургут, улица Почвон-22</a></li>
                                <li><a href="tel: +998889305353">+998 88 930 53 53</a></li>
                                <li><a className='green' href="urgut.agrofirma@inbox.ru">urgut.agrofirma@inbox.ru</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <a className='lastA' href="https://kokoagency.uz/">Created with   <i className="icon mx-1 icon-love"></i>   by  kOkO digital agency. All rights reserved 	</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <div id="wifi-loader">
                <svg class="circle-outer" viewBox="0 0 86 86">
                    <circle class="back" cx="43" cy="43" r="40"></circle>
                    <circle class="front" cx="43" cy="43" r="40"></circle>
                    <circle class="new" cx="43" cy="43" r="40"></circle>
                </svg>
                <svg class="circle-middle" viewBox="0 0 60 60">
                    <circle class="back" cx="30" cy="30" r="27"></circle>
                    <circle class="front" cx="30" cy="30" r="27"></circle>
                </svg>
                <svg class="circle-inner" viewBox="0 0 34 34">
                    <circle class="back" cx="17" cy="17" r="14"></circle>
                    <circle class="front" cx="17" cy="17" r="14"></circle>
                </svg>
            </div> */}
        </>
    )
}

export default Footer