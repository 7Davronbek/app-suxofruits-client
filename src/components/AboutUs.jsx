import React from 'react'
import { getText } from '../locales'

const AboutUs = () => {
    return (
        <>

            <div className="aboutUs">
                <div className="container">
                    <div className="row flex-wrap-reverse justify-content-center align-items-center">
                        <div className="col-lg-5 myCol">
                            <div className="d-flex align-items-end justify-content-around">
                                <img className='me-3 first' src="/assets/image/aboutUs/1.jpg" alt="" />
                                <img className='second' src="/assets/image/aboutUs/4.jpg" alt="" />
                            </div>
                            <div className="d-flex align-items-start mt-3 justify-content-around">
                                <img className='me-3 third' src="/assets/image/aboutUs/2.jpg" alt="" />
                                <img className='fourth' src="/assets/image/aboutUs/3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h1 className='bold'>{getText("about1")}</h1>
                            <h2>{getText("about2")}</h2>
                            <p className='mt-3'>{getText("about3")}</p>
                            <p className='mt-3'>{getText("about4")}</p>
                            <p className='mt-3'>{getText("about5")}</p>
                            <p className="mt-3">{getText("about6")}</p>
                        </div>
                    </div>
                </div>

                <div className="left"><img src="/assets/image/secondary/5.png" alt="" /></div>
                <div className="right"><img src="/assets/image/secondary/1.png" alt="" /></div>
            </div>

        </>
    )
}


export default AboutUs