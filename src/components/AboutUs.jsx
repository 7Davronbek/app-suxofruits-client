import React from 'react'

const AboutUs = () => {
    return (
        <>

            <div className="aboutUs">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5">
                            <div className="d-flex align-items-end">
                                <img className='me-3 first' src="/assets/image/aboutUs/1.jpg" alt="" />
                                <img className='second' src="/assets/image/aboutUs/4.jpg" alt="" />
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <img className='me-3 third' src="/assets/image/aboutUs/2.jpg" alt="" />
                                <img className='fourth' src="/assets/image/aboutUs/3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h1 className='bold'>О нас</h1>
                            <h2>Основные продукции экспорта – это сушеный виноград разных сортов, сушеный абрикос разных сортов, сушеный чернослив, смесь сушеных плодов, сушеное яблоко, сушеные дыни, бобовые культуры как фасоль, маш (чечевица) и другие.</h2>
                            <p className='mt-3'>На сегодняшний день более 500 жителей наших областей заняты на наших агропредприятиях. Кроме выращивания и производства наши соотечественники также реализуют на рынки наши продукты по приемлемым ценам и высокого качества.</p>
                            <p className='mt-3'>Наша компания за 2020 год по реализацию сухофруктов и фруктов вторичного производства достигла <b>больше чем 12 000 тонн</b> экспорта.</p>
                            <p className='mt-3'>А за прошлый 2021 год по реализацию сухофруктов и фруктов вторичного производства достигла <b>более чем 13 500 тонн</b> экспорта.</p>
                            <p className="mt-3"><b>Страны экспортов:</b> Казахстан, Россия, Кыргызстан, Таджикистан, Украина, Польша, Беларусь, Израиль, Ирак, Китай, Турция, Арабские страны, страны Европы и другие.</p>
                        </div>
                    </div>
                </div>

                <div className="left"><img src="/assets/image/secondary/5.png" alt="" /></div>
                <div className="right"><img src="/assets/image/secondary/1.png" alt="" /></div>
            </div>

        </>
    )
}


export default AboutUs