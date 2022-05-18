import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_PATH } from '../tools/constants';

const SeeCatalog = () => {
    const [isLoading, setIsLoading] = useState(true);

    const getAll = () => {
        fetch(API_PATH + 'api/category')
            .then(async response => {
                const data = await response.json();
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });

    }

    useEffect(() => {

        axios.get(API_PATH + 'api/category')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

        getAll()


        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>

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

                        <div className="seeCatalog">
                            <div className="container">
                                <div className="row align-items-center  ">
                                    <div className="col-5 leftWrap">
                                        <img src="/assets/image/category/1.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="col-6 rightWrap">
                                        <h2 className="bold"> Абрикосы</h2>
                                        <h5>Яркий аппетитный фрукт желтого цвета, временами – с красными бочками. Имеет характерное углубление во всю длину плода. Вкус – сладкий, насыщенный, мякоть сочная, с чуть заметной кислинкой. Произрастают в субтропиках. Самые вкусные абрикосы выращены в Самарканде и Ферганской долине. Плоды содержат большое количество калия, витаминов, микроэлементов, пектина. Используют для приготовления соков, джема, варенья, компотов. Особенно ценятся в виде сухофруктов.</h5>
                                        <h5>Абрикос употребляют в свежем виде. измельченные плоды добавляют в кисло-сладкие соусы. В десертах хорошо сочетается с ядрами косточек - миндалем.</h5>

                                        <div className="btnWrap">
                                            <a target="_blank" rel="noreferrer" href='tel: +998998190007' className='btnGradient2'>Узнать цену</a>

                                            <a target="_blank" rel="noreferrer" href='https://t.me/uavsoffice/'>
                                                <button className="c-button c-button--gooey"> Написать в телеграм
                                                    <div className="c-button__blobs">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                </button>
                                                <svg style={{ display: "block", height: 0, width: 0 }} version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <filter id="goo">
                                                            <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
                                                            <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
                                                            <feBlend in2="goo" in="SourceGraphic"></feBlend>
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                }
            </>

        </>
    )
}

export default SeeCatalog