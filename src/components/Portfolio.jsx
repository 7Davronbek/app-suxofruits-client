import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_PATH } from '../tools/constants'
import { getText } from '../locales'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([])
    // const [file, setFile] = useState(null)

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

    // const onFormSubmit = (e) => {
    //     e.preventDefault()

    //     const formData = new FormData()
    //     formData.append("image", file)

    //     const config = {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         },
    //     }

    //     axios.post(API_PATH + 'images', formData, config)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    // const onInputChange = (e) => {
    //     setFile(e.target.files[0])
    // }

    return (
        <>

            {/* <form onSubmit={onFormSubmit}>
                <h1>Simple upload</h1>
                <input onChange={onInputChange} type="file" name='image' />
                <button type='submit'>Upload</button>
            </form> */}

            <div className="portfolio ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="h2 bold">{getText("photoGalary2")}</h2>
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
                            <h1 className="light">{getText("photoGalary3")}</h1>
                            <h3>{getText("photoGalary4")}</h3>
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