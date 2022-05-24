import React from 'react'
import { getText } from '../locales'

const Benefits = () => {
    return (
        <>

            <div className="benefits">
                <div className="container">
                    <div className="row">
                        <div className="col-11 mx-auto zed" >
                            <h2 className='bold'>{getText("benefit1")}</h2>

                            <p className='mb-4'>{getText("benefit2")}</p>

                            <h2 className='bold'>{getText("benefit3")}</h2>
                            <p>{getText("benefit4")}</p>
                            <p>{getText("benefit5")}</p>
                            <p>{getText("benefit6")}</p>
                            <p>{getText("benefit7")}</p>
                            <p>{getText("benefit8")}</p>
                            <p className='mb-4'>{getText("benefit9")}</p>

                            <h2 className='bold'>{getText("benefit10")}</h2>
                            <p>{getText("benefit11")}</p>
                            <p>{getText("benefit12")}</p>
                            <p>{getText("benefit13")}</p>
                            <p>{getText("benefit14")}</p>
                            <p>{getText("benefit15")}</p>
                            <p>{getText("benefit16")}</p>
                            <p>{getText("benefit17")} </p>
                        </div>
                    </div>
                </div>

                <div className="myBlur"></div>
            </div>

        </>
    )
}

export default Benefits