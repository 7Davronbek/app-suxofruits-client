import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_PATH } from '../tools/constants'

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
                            <h1 className="bold">Каталог</h1>
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
                                            <h2 className="">{item.name}</h2>
                                        </div>
                                    </Link>

                                ))}

                                <Link to='/catalog/1' className="col-lg-4 col-md-6 mb-5">
                                    <div className="cards">
                                        <div className="img">
                                            <img src="/assets/image/galary/1.jpg" className='w-100' alt="" />
                                        </div>
                                        <h2 className="">Сухофрукты</h2>
                                    </div>
                                </Link>

                                <Link to='/catalog/1' className="col-lg-4 col-md-6 mb-5">
                                    <div className="cards">
                                        <div className="img second">
                                            <img src="/assets/image/galary/2.jpg" className='w-100' alt="" />
                                        </div>
                                        <h2 className="">Орехи</h2>
                                    </div>
                                </Link>

                                <Link to='/catalog/1' className="col-lg-4 col-md-6 mb-5">
                                    <div className="cards">
                                        <div className="img third">
                                            <img src="/assets/image/galary/3.jpg" className='w-100' alt="" />
                                        </div>
                                        <h2 className="">Бобовые</h2>
                                    </div>
                                </Link>

                                <Link to='/catalog/1' className="col-lg-4 col-md-6 mb-5 mt-5">
                                    <div className="cards">
                                        <div className="img fourth">
                                            <img src="/assets/image/galary/4.jpg" className='w-100' alt="" />
                                        </div>
                                        <h2 className="">	Фрукты</h2>
                                    </div>
                                </Link>

                                <Link to='/catalog/1' className="col-lg-4 col-md-6 mb-5 mt-5">
                                    <div className="cards">
                                        <div className="img fifth">
                                            <img src="/assets/image/galary/5.jpg" className='w-100' alt="" />
                                        </div>
                                        <h2 className="">Овощи</h2>
                                    </div>
                                </Link>

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