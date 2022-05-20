import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CatalogCards from '../components/CatalogCards'
import CatalogIdHeader from '../components/CatalogIdHeader'
import { API_PATH } from '../tools/constants';

const CatalogId = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState([])
  const [categoryTitle, setCategoryTitle] = useState([])

  const getCategory = async () => {
    await axios.get(API_PATH + `category/${props.match.params.id}`)
      .then((res) => {
        setCategory(res.data.products)
        setCategoryTitle(res.data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getCategory()
  }, [])


  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1500);
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
          <CatalogIdHeader categoryTitle={categoryTitle} />
          <CatalogCards category={category} />
        </>
      }
    </>
  )
}

export default CatalogId