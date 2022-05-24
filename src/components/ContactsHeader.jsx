import axios from 'axios'
import React, { useState } from 'react'
import { getText } from '../locales'
import { API_PATH } from '../tools/constants'

const ContactsHeader = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')

    const handleClick = async () => {
        await axios.post(API_PATH + 'message', {
            name,
            number,
            text
        })
            .then((res) => {
                // console.log(res);  
                setName('');
                setNumber('')
                setText('')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>

            <div className="contactsHeader headerTop">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <h1 className="bold">{getText("contact1")}</h1>
                        </div>
                        <div className="col-md-10 col-lg-5 mb-5">
                            <div className="wrap ">
                                <a href='tel: +998998190007 ' className="d-flex align-items-center phone ">
                                    <i className='me-4'><img src="/assets/icon/phone.png" alt="" /></i>
                                    <span>+998 (99) 819-00-07 </span>
                                </a>
                                <a href='tel: +998979287878 ' className="d-flex align-items-center phone mt-2">
                                    <i className='me-4'><img src="/assets/icon/phone.png" alt="" /></i>
                                    <span>+998 (97) 928-78-78 </span>
                                </a>
                                <a href='urgut.agrofirma@inbox.ru' className="d-flex align-items-center  mt-3">
                                    <i className='me-4'><img src="/assets/icon/email.png" alt="" /></i>
                                    <span>urgut.agrofirma@inbox.ru</span>
                                </a>
                                <a href='#!' className="d-flex align-items-center mt-3 ">
                                    <i className='me-4'><img src="/assets/icon/location.png" alt="" /></i>
                                    <span>{getText("footer3")}</span>
                                </a>

                                <div className="d-flex align-items-center mt-4 ms-3 socialsWrap">

                                    <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100009057463429'><i className="icon cursor icon-fb"></i></a>
                                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/ekofrukt.uz/' ><i className="icon cursor mx-5 icon-insta"></i></a>
                                    <a target="_blank" rel="noreferrer" href='https://t.me/uavsoffice/'><i className="icon cursor icon-tg"></i></a>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-10 col-lg-5 mb-5">
                            <div className="wrap secondary">
                                <h3>{getText("contact2")}</h3>

                                <form onSubmit={e => e.preventDefault()}>
                                    <input
                                        name='name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required type="text" className='form-control' placeholder={getText('contact3')} />
                                    <input
                                        name='number'
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        required type="text" className='form-control' placeholder={getText('contact4')} />
                                    <textarea
                                        name='name'
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                        required type="text" className='form-control' placeholder={getText('contact5')} />

                                    <button onClick={handleClick}>{getText("contact6")}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactsHeader