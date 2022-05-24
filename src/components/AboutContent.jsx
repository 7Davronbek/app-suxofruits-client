import React from 'react'
import { getText } from '../locales'

const AboutContent = () => {
    return (
        <>

            <div className="aboutContent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-xs-10 col-lg-10 mx-auto">
                            <h1 className='light mt-0'>{getText("aboutContent1")}</h1>
                            <h2>{getText("aboutContent2")}</h2>
                            <h2 className='mt-4'>{getText("aboutContent3")}</h2>
                            <h2 className="mt-4">{getText("aboutContent4")}</h2>
                            <h2 className="mt-4">{getText("aboutContent5")} </h2>
                            <h2 className="mt-4">{getText("aboutContent6")}</h2>
                            <h2 className="mt-4">{getText("aboutContent7")}</h2>


                        </div>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <h1 className="light">{getText("aboutContent8")} </h1>
                        </div>
                        <div className="col-md-10 col-lg-5">
                            <div className="img"><img src="/assets/image/director.jpg" className='w-100' alt="" /></div>
                        </div>
                        <div className="col-md-10 col-lg-5">

                            <h2 className='mt-3'><b>{getText("aboutContent9")}</b></h2>
                            <h2 className="mt-3">{getText("aboutContent10")}</h2>
                            <h2 className="mt-3">{getText("aboutContent11")}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h1 className="light">{getText("aboutContent12")}</h1>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-center flex-column-reverse flex-lg-row">
                        <div className="col-md-10 col-lg-5">

                            <h2><b>{getText("aboutContent13")}</b></h2>
                            <h2 className="mt-3">{getText("aboutContent14")}</h2>
                            <h2 className="mt-3 mb-3">{getText("aboutContent15")}</h2>
                        </div>
                        <div className="col-md-10 col-lg-5">
                            <div className="img"><img src="/assets/image/director2.jpg" className='w-100' alt="" /></div>
                        </div>
                    </div>
                </div>


                <div className="right"><img src="/assets/image/secondary/2.webp" alt="" /></div>
            </div>

        </>
    )
}

export default AboutContent