import React from 'react'
import { getText } from '../locales'

const WhyWe = () => {
    return (
        <>

            <div className="whyWe">
                <div className="container">
                    <div className="row">
                        <div className="col-12 zed">
                            <h1 className="bold">{getText("why1")}</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 zed h-100">
                            <div className="cards topCards">
                                <div className="top">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/qhviklyi.json"
                                        delay="1500"
                                        trigger='loop'
                                        colors="primary:#333,secondary:#fff"
                                        style={{ width: '200px', height: '200px' }}>
                                    </lord-icon>
                                </div>
                                <h5>{getText("why2")}</h5>
                            </div>
                        </div>
                        <div className="col-md-4 zed h-100">
                            <div className="cards topCards">
                                <div className="top">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/yyecauzv.json"
                                        delay="1500"
                                        trigger='loop'
                                        colors="primary:#333,secondary:#fff"
                                        style={{ width: '200px', height: '200px' }}>
                                    </lord-icon>
                                </div>
                                <h5>{getText("why3")}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-sm-6 col-md-4 col-lg-3 zed h-100">
                            <div className="cards bot-1">
                                <div className="top">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/zhxxdohn.json"
                                        trigger="loop"
                                        delay="2000"
                                        colors="primary:#333,secondary:#fff"
                                        style={{ width: '200px', height: '200px' }}>
                                    </lord-icon>
                                </div>
                                <h5>{getText("why4")}</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 zed h-100">
                            <div className="cards">
                                <div className="top">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/itmmouju.json"
                                        delay="2500"
                                        trigger='loop'
                                        colors="primary:#333,secondary:#fff"
                                        style={{ width: '200px', height: '200px' }}>
                                    </lord-icon>
                                </div>
                                <h5>{getText("why5")}</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 zed h-100">
                            <div className="cards">
                                <div className="top">

                                    <lord-icon
                                        src="https://cdn.lordicon.com/qrbokoyz.json"
                                        delay="2000"
                                        colors="primary:#333,secondary:#fff"
                                        trigger="loop"
                                        style={{ width: '200px', height: '200px' }}>
                                    </lord-icon>

                                </div>
                                <h5>{getText("why6")}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right"><img src="/assets/image/secondary/3.png" alt="" /></div>
                <div className="blur"></div>
            </div>

        </>
    )
}

export default WhyWe