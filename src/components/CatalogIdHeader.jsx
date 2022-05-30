import React from 'react'
import { LANGUAGE } from '../tools/constants'

const CatalogIdHeader = ({ categoryTitle }) => {
    return (
        <>
            <div className="catalogHeader headerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 zed">
                            <div className="wrap headerWrap">
                                {localStorage.getItem(LANGUAGE) === "uz" ? <h1 className="bold">{categoryTitle.name_uz}</h1> : localStorage.getItem(LANGUAGE) === "en" ? <h1 className="">{categoryTitle.name_en}</h1> : <h1 className="bold">{categoryTitle.name}</h1>}
                                
                                {/* <p>Сухофрукты содержат больше биологически активных веществ, в сравнении со свежими фруктами. По сути, это концентрат, в котором содержатся кальций, магний, железо и другие ценные вещества. Древние лекари отлично знали, как полезны сухофрукты, и даже прописывали их в качестве лекарственного и профилактического средства от многих заболеваний. В Китае, да и во многих других восточных странах существовала традиция дарить сухофрукты.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blurs"></div>
            </div>
        </>
    )
}

export default CatalogIdHeader