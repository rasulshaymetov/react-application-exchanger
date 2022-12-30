import React from 'react'
import loader from '../assets/loader.svg'
const Loader = () => {
  return (
    <div className="loader">
              <div className="loader__wrapper">
                <img src={loader} alt="Loader" />
              </div>
            </div>
  )
}

export default Loader