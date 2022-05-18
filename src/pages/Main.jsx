import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AboutUs from '../components/AboutUs';
import Benefits from '../components/Benefits';
import Galary from '../components/Galary';
import Header from '../components/Header';
// import Sertificates from '../components/Sertificates';
import WhyWe from '../components/WhyWe';
import { API_PATH } from '../tools/constants';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    // const getAll = () => {
    //     fetch(API_PATH + 'api/category')
    //         .then(async response => {
    //             const data = await response.json();
    // console.log(data);
    //         })
    //         .catch(error => {
    // console.log(error);
    //         });

    // }

    useEffect(() => {

        fetch("http://ekofrukt.uz/api/product")
            .then(response => response.json())
        // .then(json => console.log(json))

        // axios.get("http://ekofrukt.uz/api/product")
        //     .then((res) => {
        //         console.log(res);
        //     })

        // axios.get(API_PATH + 'api/category')
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        // getAll()





        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

    }, []);

    return (
        <>
            {isLoading ?
                <>
                    <div className="loader">
                        <div className="img"><h6 className=""><span className='bolds'>Eko</span>frukt</h6></div>
                        <div id="wifi-loader">
                            <svg className="circle-outer" viewBox="0 0 86 86">
                                <circle className="back" cx="43" cy="43" r="40"></circle>
                                <circle className="front" cx="43" cy="43" r="40"></circle>
                                <circle className="new" cx="43" cy="43" r="40"></circle>
                            </svg>
                            <svg className="circle-middle" viewBox="0 0 60 60">
                                <circle className="back" cx="30" cy="30" r="27"></circle>
                                <circle className="front" cx="30" cy="30" r="27"></circle>
                            </svg>
                            <svg className="circle-inner" viewBox="0 0 34 34">
                                <circle className="back" cx="17" cy="17" r="14"></circle>
                                <circle className="front" cx="17" cy="17" r="14"></circle>
                            </svg>
                        </div>
                    </div>
                </>
                :
                <>
                    <Header />
                    <AboutUs />
                    <Galary />
                    <WhyWe />
                    <Benefits />
                    {/* <Sertificates /> */}
                </>
            }
        </>
    )
}

export default Main