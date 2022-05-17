import React, { useEffect, useState } from 'react'

const SeeCatalog = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
                                <div className="row">
                                    <div className="col-5 offset-1">
                                        <img src="/assets/image/category/1.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="col-5">
                                        <h2 className="bold">АБРИКОСЫ</h2>
                                        <h3>Сум 1 450.00 – Сум 14 500.00</h3>
                                        <h5>Яркий аппетитный фрукт желтого цвета, временами – с красными бочками. Имеет характерное углубление во всю длину плода. Вкус – сладкий, насыщенный, мякоть сочная, с чуть заметной кислинкой. Произрастают в субтропиках. Самые вкусные абрикосы выращены в Самарканде и Ферганской долине. Плоды содержат большое количество калия, витаминов, микроэлементов, пектина. Используют для приготовления соков, джема, варенья, компотов. Особенно ценятся в виде сухофруктов.</h5>
                                        <h5>Абрикос употребляют в свежем виде. измельченные плоды добавляют в кисло-сладкие соусы. В десертах хорошо сочетается с ядрами косточек - миндалем.</h5>
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