import React from 'react'
import { getText } from '../locales'
// import { Background, Parallax } from 'react-parallax';
const Header = () => {
    return (
        <>
            {/* 
            <Parallax bgImage="/assets/image/galary/1.webp" className='w-100 vh-100 d-flex align-items-center justify-content-center' bgImageAlt="the cat" strength={400}>
                Content goes here. Parallax height grows with content height.
                Content goes here. Parallax height grows with content height.
                Content goes here. Parallax height grows with content height.
            </Parallax>

            <Parallax bgImage="/assets/image/galary/1.webp" className='w-100 vh-100 d-flex align-items-center justify-content-center' bgImageAlt="the cat" strength={500}>
                Content goes here. Parallax height grows with content height.
                Content goes here. Parallax height grows with content height.
                Content goes here. Parallax height grows with content height.
            </Parallax>

            <Parallax bgImage="/assets/image/galary/1.webp" className='w-100 vh-100 d-flex align-items-center justify-content-center' bgImageAlt="the cat" strength={600}>
                Content goes here. Parallax height grows with content height.
                Content goes here. Parallax height grows with content height.
                Content goes here. Parallax height grows with content height.
            </Parallax>

            <Parallax
                bgImage="/path/to/another/image"
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
                <p>... Content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima tenetur quasi! Aut nam repudiandae deleniti fuga nisi! Molestiae, repellat exercitationem doloremque ullam consequuntur sint quis adipisci ratione aliquam vel!</p>
            </Parallax>
 */}


            <div className="header">
                <div className="contaienr">
                    <div className="row">
                        <div className="col-12 zed">
                            <div className="wrap">
                                <h1 className='bold'>
                                    {getText("header1")}
                                    {/* ?????????????????? - ???????? ?????????? */}
                                </h1>
                                <h4>{getText("header2")}</h4>
                                <h5>
                                    {getText("header3")}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="svg zed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e5e5" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,96C840,85,960,107,1080,128C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                {/* 
                <lord-icon
                    src="https://cdn.lordicon.com/stbcbpfl.json"
                    trigger="loop-on-hover"
                    colors="primary:#fff,secondary:#45b39c"
                    stroke="70"
                    style={{ width: '350px', height: '250px', right: 0, bottom: '20px', transform: 'translateX(80px)', position: 'absolute' }}>
                </lord-icon> */}

                <div className="blurs"></div>
            </div>

        </>
    )
}

export default Header