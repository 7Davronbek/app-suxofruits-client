import React, { useState } from 'react'

const CatalogCards = () => {
    let num = 10000
    const [change, setChange] = useState(10000)

    const handleClick = (n) => {
        // let m = num / 1000 * n
        setChange(num / 1000 * n)
    }

    return (
        <>

            <div className="catalogCards">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/1.jpg" alt="" className="w-100" />
                                </div>
                                <h2>Абрикос</h2>
                                <p>{change} сум</p>
                                <div className="btnWrap">
                                    <button onClick={(n) => { handleClick(100) }} className="btn myBtns">100 г</button>
                                    <button onClick={(n) => { handleClick(300) }} className="btn myBtns">300 г</button>
                                    <button onClick={(n) => { handleClick(500) }} className="btn myBtns">500 г</button>
                                    <button onClick={(n) => { handleClick(1000) }} className="btn myBtns">1 кг</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CatalogCards