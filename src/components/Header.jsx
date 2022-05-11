import React from 'react'

const Header = () => {
    return (
        <>

            <div className="header">
                <div className="contaienr">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrap">
                                <h1 className='bold'>
                                    Сухофрукт - тоже фрукт 
                                </h1>
                                <h5>
                                Агрофирма поставить свежую плодоовощную продукцию, бахчи и виноград, сушенных овощей и фруктов и бобовых культур выращенных в Республике Узбекистан (2021-2022)
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e5e5" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,96C840,85,960,107,1080,128C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>

                <lord-icon
                    src="https://cdn.lordicon.com/stbcbpfl.json"
                    trigger="loop-on-hover"
                    colors="primary:#fff,secondary:#45b39c"
                    stroke="70"
                    style={{ width: '350px', height: '250px', right: 0, bottom: '20px', transform: 'translateX(80px)', position: 'absolute' }}>
                </lord-icon>

            </div>

        </>
    )
}

export default Header