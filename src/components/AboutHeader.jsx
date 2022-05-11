import React from 'react'

const AboutHeader = () => {
    return (
        <>

            <div className="aboutHeader headerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrap headerWrap">
                                <h1 className="bold">О компании</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor commodi quisquam, eligendi corporis magni aspernatur eaque. Pariatureligendi corporis magni aspernatur eaque. Pariatur ipsa reiciendis enim quam molestiae temporibus blanditiis sapiente consequatur odio eaque, assumenda consequuntur?</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e5e5" fill-opacity="1" d="M0,256L120,261.3C240,267,480,277,720,234.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
                <div className="leftBottom"><img src="/assets/image/nuts.png" alt="" /></div>

            </div>

        </>
    )
}

export default AboutHeader