import React from 'react'
import { Link } from 'react-router-dom'

const Galary = () => {
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
                        <div className="col-10 mx-auto">
                            <div className="row justify-content-around">
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