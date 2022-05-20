import React from 'react'

const CatalogIdHeader = ({categoryTitle}) => {
  return (
    <>
        <div className="catalogHeader headerTop">
            <div className="container">
                <div className="row">
                    <div className="col-12 zed">
                        <div className="wrap headerWrap">
                        <h1 className="bold">{categoryTitle.name}</h1>
                        <p>Сухофрукты содержат больше биологически активных веществ, в сравнении со свежими фруктами. По сути, это концентрат, в котором содержатся кальций, магний, железо и другие ценные вещества. Древние лекари отлично знали, как полезны сухофрукты, и даже прописывали их в качестве лекарственного и профилактического средства от многих заболеваний. В Китае, да и во многих других восточных странах существовала традиция дарить сухофрукты.</p>
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