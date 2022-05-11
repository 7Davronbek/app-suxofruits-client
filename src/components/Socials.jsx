import React, { useState } from 'react'

const Socials = () => {
    const [socials, setSocials] = useState(false);

    const changeSocials = () => {
        if (window.scrollY >= 640) {
            setSocials(true);
        } else {
            setSocials(false)
        }
    }

    window.addEventListener('scroll', changeSocials);
    return (
        <>
            <div className={` socials ${socials ? 'active' : ''}`}>
                <div className="i"><img className='w-100' src="/assets/image/socials/facebook.png" alt="" /></div>
                <div className="i"><img className='w-100' src="/assets/image/socials/instagram.png" alt="" /></div>
                <div className="i"><img className='w-100' src="/assets/image/socials/youtube.png" alt="" /></div>
                <div className="i"><img className='w-100' src="/assets/image/socials/twitter.png" alt="" /></div>
            </div>
        </>
    )
}

export default Socials