// import React, { useState } from 'react'

import { Link } from "react-router-dom"

const CatalogCards = ({ category }) => {
    // let num = 10000
    // const [change, setChange] = useState(10000)

    // const handleClick = (n) => {
        // let m = num / 1000 * n
    //     setChange(num / 1000 * n)
    // }

    return (
        <>

            <div className="catalogCards">
                <div className="container">
                    <div className="row">

                        {category?.map((item, index) => (

                            <Link to={`/see-catalog/${item.id}`} key={index} className="col-lg-4 mb-4">
                                <div className="cards">
                                    <div className="img">
                                        <img src={`${item.image}`} alt="" className="w-100" />
                                    </div>
                                    <div className="text">
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </Link>

                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default CatalogCards