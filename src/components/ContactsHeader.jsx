import React from 'react'

const ContactsHeader = () => {
    return (
        <>

            <div className="contactsHeader headerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="bold">Контакты</h1>
                        </div>
                        <div className="col-12">
                            <div className="wrap headerWrap">
                                <a href='tel: +998998190007 ' className="d-flex align-items-center phone ">
                                    <i className='me-4'><img src="/assets/icon/phone.png" alt="" /></i>
                                    <span>+998 (99) 819-00-07 </span>
                                </a>
                                <a href='urgut.agrofirma@inbox.ru' className="d-flex align-items-center  mt-3">
                                    <i className='me-4'><img src="/assets/icon/email.png" alt="" /></i>
                                    <span>urgut.agrofirma@inbox.ru</span>
                                </a>
                                <a href='#!' className="d-flex align-items-center mt-3 ">
                                    <i className='me-4'><img src="/assets/icon/location.png" alt="" /></i>
                                    <span>Тошкент шахри Сергели  тумани,  Қорасув МФЙ, Янги турмуш кўчаси 4-уй</span>
                                </a>

                                <div className="d-flex align-items-center mt-4 ms-3">

                                    <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100009057463429'><i className="icon cursor icon-fb"></i></a>
                                    <a  target="_blank" rel="noreferrer" href='https://www.instagram.com/ekofrukt.uz/' ><i className="icon cursor mx-5 icon-insta"></i></a>
                                    <a target="_blank" rel="noreferrer" href='https://t.me/uavsoffice/'><i className="icon cursor icon-tg"></i></a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactsHeader