// import React, { useState } from 'react'

// import axios from "axios"
// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LANGUAGE } from "../tools/constants"

const CatalogCards = ({ category }) => {

    // const [file, setFile] = useState(null)

    // const postImage = () => {
    //     axios.post(API_PATH + 'images')
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    // }

    // const changeInput = (e) => {
    //     const data = new FormData();
    //     data.append("file", e.target.files[0]);
    //     setFile(data)
    // };


    // const saveFile = () => {
    //     axios.post(API_PATH + "images", file)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.log(err))

    // };


    return (
        <>

            <div className="catalogCards">
                <div className="container">
                    {/* 
                    <div className="row py-5">
                        <div className="col-4 m-auto">
                            <input type="file" accept=".png, .svg, .jpg, .jpeg" onChange={changeInput} />
                            <button
                                onClick={saveFile}
                            >SUMBIT</button>
                        </div>
                    </div> */}

                    <div className="row">

                        {category?.map((item, index) => (

                            <Link to={`/see-catalog/${item.id}`} key={index} className="col-lg-4 mb-4">
                                <div className="cards">
                                    <div className="img">
                                        <img src={`${item.image}`} alt="" className="w-100" />
                                    </div>
                                    <div className="text">
                                        {localStorage.getItem(LANGUAGE) === "uz" ? <h2 className="">{item.title_uz}</h2> : localStorage.getItem(LANGUAGE) === "en" ? <h2 className="">{item.title_en}</h2> : <h2 className="">{item.title}</h2>}
                                        {/* <h2>{item.title}</h2> */}
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