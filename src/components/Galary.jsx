import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'
import { API_PATH, LANGUAGE } from '../tools/constants'

const Galary = () => {
    const [allCategory, setAllCategory] = useState([])

    const getAllCategory = async () => {
        await axios.get(API_PATH + 'category')
            .then((res) => {
                console.log(res);
                setAllCategory(res.data)
            })
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    return (
        <>

            <div className="galary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="bold">{getText("catalog")}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row justify-content-around">

                                {allCategory?.map((item, index) => (


                                    <Link to={`/catalog/${item.id}`} key={index} className="col-lg-4 col-md-6 mb-5">

                                        <div className="cards">
                                            <div className="img">
                                                <img src={`${item.image}`} className='w-100' alt="" />
                                            </div>

                                            {localStorage.getItem(LANGUAGE) === "uz" ? <h2 className="">{item.name_uz}</h2> : <h2 className="">{item.name}</h2>}

                                        </div>

                                    </Link>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="leftBottom"><img src="/assets/image/secondary/4.png" alt="" /></div>
            </div>

        </>
    )
}

export default Galary