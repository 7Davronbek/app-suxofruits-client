// import React, { useState } from 'react'

import { Link } from "react-router-dom"

const CatalogCards = ({category}) => {
    console.log(category);
    // let num = 10000
    // const [change, setChange] = useState(10000)

    // const handleClick = (n) => {
    //     // let m = num / 1000 * n
    //     setChange(num / 1000 * n)
    // }

    return (
        <>

            <div className="catalogCards">
                <div className="container">
                    <div className="row">
                        <Link to='/see-catalog/1' className="col-lg-4 mb-4">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/1.jpg" alt="" className="w-100" />
                                </div>
                                <div className="text">
                                    <h2>Абрикос</h2>
                                    <p>10000 сум</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/see-catalog/1' className="col-lg-4 mb-4">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/2.jpg" alt="" className="w-100" />
                                </div>
                                <div className="text">
                                    <h2>Абрикос</h2>
                                    <p>10000 сум</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/see-catalog/1' className="col-lg-4 mb-4">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/3.jpg" alt="" className="w-100" />
                                </div>
                                <div className="text">
                                    <h2>Абрикос</h2>
                                    <p>10000 сум</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/see-catalog/1' className="col-lg-4 mb-4">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/4.jpg" alt="" className="w-100" />
                                </div>
                                <div className="text">
                                    <h2>Абрикос</h2>
                                    <p>10000 сум</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/see-catalog/1' className="col-lg-4 mb-4">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/5.jpg" alt="" className="w-100" />
                                </div>
                                <div className="text">
                                    <h2>Абрикос</h2>
                                    <p>10000 сум</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/see-catalog/1' className="col-lg-4 mb-4">
                            <div className="cards">
                                <div className="img">
                                    <img src="/assets/image/category/6.jpg" alt="" className="w-100" />
                                </div>
                                <div className="text">
                                    <h2>Абрикос</h2>
                                    <p>10000 сум</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CatalogCards