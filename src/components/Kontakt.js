import React from 'react'
import '../App.css'
import Vector8 from '../Vector8.png'
import Vector9 from '../Vector9.png'
import Vector10 from '../Vector10.png'
import Vector11 from '../Vector11.png'
import Vector12 from '../Vector12.png'

import Ima from '../image1.png'

const Kontakt = () => {
  return (
    <div>
        <div className="Kontakt">
    <div className="Frame35">
      <label>Kontakt</label>
      <div className="Frame19">
        <h2>Możesz się z nami skontaktować na różne sposoby</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
    <div className="Frame42">
      <div className="Frame41">
        <div className="Frame39">
          <div className="Frame36">
            <img src={Vector8} alt="" className='y1'/>
            <h3>605 560 605</h3>
          </div>
          <div className="Frame37">
          <img src={Vector9} alt="" className='y2'/>
            <h3>przykladowy@mail.com</h3>
          </div>
          <div className="Frame38">
          <img src={Vector10} alt="" className='y3'/>
            <h3>ul. Dododania 4
              00-000 Miasto</h3>
          </div>
        </div>
        <div className="Frame40">
        <img src={Vector11} alt="" className='y4'/>
        <img src={Vector12} alt="" className='y5'/>
        </div>
      </div>
      <img src={Ima} alt="" className='sa'/>
    </div>
  </div>
    </div>
  )
}

export default Kontakt