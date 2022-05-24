import React from 'react'
import { getText } from '../locales'

const ProductionHeader = () => {
    return (
        <>

            <div className="productionHeader headerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 zed">
                            <div className="wrap headerWrap w-100">
                                <h1 className="bold">{getText("production1")}</h1>
                                <p>{getText("production2")}</p>
                                <p className='mt-2'>{getText("production3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blurs"></div>
            </div>

        </>
    )
}

export default ProductionHeader