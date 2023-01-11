import React from 'react'
import Header from './Header'
import exchangerLogo from "../assets/exchanger-logo.png"
import star from "../assets/star.svg"
import russia from "../assets/rus.svg"
const Exchanger = () => {
  return (
    <>
      <Header />
      <div className="main__wrapper">
        <div className="main__container">
          <div className="aside">
            <div style={{ padding: '30rem', overflow:'hidden' }} className="aside__wrapper">
              <p style={{ color: 'black', opacity: '0.6', fontSize: '16rem', marginBottom: '20rem' }}>Визитка</p>
              <div style={{ display: 'flex', fontSize: "16rem", marginBottom:'28rem'}}>
                <img style={{ marginRight: '20rem' }} src={exchangerLogo} alt="Exchanger logo" />
                <div>
                  <p>Обменный пункт Change Project</p>
                  <p style={{ marginTop: '8rem' }}>4,8 <span><img src={star} alt="rate" /></span></p>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <img style={{ marginRight: '8rem', alignItems: 'baseline' }} src={russia} alt="country" />
                <p>Россия</p>
                </div>
                <hr style={{width:'275rem', height:'0rem', marginTop:'20rem'}} />
            </div>
          </div>

          <div style={{ marginLeft: '40px' }} className="info">
            <div className="info__wrapper">

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Exchanger