import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'
import { API_PATH, LANGUAGE } from '../tools/constants'

const Galary = () => {
    const [allCategory, setAllCategory] = useState([])

    // const [name, setName] = useState(null)
    // const [nameUz, setNameUz] = useState(null)
    // const [nameEn, setNameEn] = useState(null)
    // const [file, setFile] = useState(null)

    // const config = {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'multipart/form-data'
    //     },
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     const formData = new FormData()
    //     formData.append("name", name)
    //     formData.append("name_uz", nameUz)
    //     formData.append("name_en", nameEn)
    //     formData.append("image", file)

    //     console.log(formData);

    //     axios.post(API_PATH + 'category', formData, config)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    const getAllCategory = async () => {
        await axios.get(API_PATH + 'category')
            .then((res) => {
                setAllCategory(res.data)
            })
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    return (
        <>

            {/* <form onSubmit={handleSubmit}>
                <input onChange={e => setName(e.target.value)} type="text" name='name' placeholder='Name ru' />
                <input onChange={e => setNameUz(e.target.value)} type="text" name='name_uz' placeholder='Name uz' />
                <input onChange={e => setNameEn(e.target.value)} type="text" name='name_en' placeholder='Name en' />
                <input onChange={e => setFile(e.target.files[0])} type="file" name='image' />

                <button type='submit'>Submit</button>
            </form> */}

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

                                            {localStorage.getItem(LANGUAGE) === "uz" ? <h2 className="">{item.name_uz}</h2> : localStorage.getItem(LANGUAGE) === "en" ? <h2 className="">{item.name_en}</h2> : <h2 className="">{item.name}</h2>}

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