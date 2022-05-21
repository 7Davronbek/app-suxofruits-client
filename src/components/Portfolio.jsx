import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_PATH } from '../tools/constants'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([])

    const getPortfolio = async () => {
        await axios.get(API_PATH + 'images')
            .then((res) => {
                setPortfolio(res.data)
            })
            .catch((err) => { console.log(err); })
    }

    useEffect(() => {
        getPortfolio()
    }, [])

    return (
        <>   <div className="portfolio ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 bold">Галерея работ</h2>
                    </div>
                </div>
                <div className="image-gallary">
                    {portfolio?.map((item, index) => (
                        <div key={index} className="image-box">
                            <img src={`${item.image}`} alt="" />
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-10 mx-auto">
                        <h1 className="light">Страны экспортов:</h1>
                        <h3>Казахстан, Россия, Кыргызстан, Таджикистан, Украина, Польша, Беларусь, Израиль, Ирак, Китай, Турция, Арабские страны, страны Европы и другие.</h3>
                    </div>
                </div>


                <div className="image-gallary mt-5">
                    <div className="image-box">
                        <img src="/assets/image/car/1.jpg" alt="" />
                    </div>
                    <div className="image-box">
                        <img src="/assets/image/car/2.jpg" alt="" />
                    </div>
                    <div className="image-box">
                        <img src="/assets/image/car/3.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>


        </>
    )
}

export default Portfolio