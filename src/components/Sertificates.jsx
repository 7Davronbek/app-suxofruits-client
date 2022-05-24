import React from 'react'
import { getText } from '../locales'

const Sertificates = () => {
    return (
        <>

            <div className="sertificates">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="bold">{getText("sertificates")}</h1>
                        </div>
                        <div className="col-lg-4 col-mb-6 mb-4">
                            <img src="/assets/image/sertificates/1.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-mb-6 mb-4">
                            <img src="/assets/image/sertificates/2.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-mb-6 mb-4">
                            <img src="/assets/image/sertificates/3.jpg" alt="" className="w-100" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Sertificates