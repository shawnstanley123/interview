import React from 'react'
import '../App.css'
import R1 from '../R1.png'
import R2 from '../R2.png'
import R3 from '../R3.png'
import Rectangleo1 from '../Rectangle 1.png'
import Rectangleo2 from '../Rectangle 2.png'
import Rectangleo3 from '../Rectangle 3.png'
const Galeria = () => {
  return (
    <div>
         <div className="Galeria">
    <div className="Frame31">
      <label>Galeria</label>
      <div className="Frame19">
        <h2>Sprawdź nasze przykładowe prace</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
  <div className="Frame34">
  <div className="Frame32">
<img src={R1} alt="" className="g1"/>
<img src={R2} alt="" className="g2"/>
<img src={R3} alt="" className="g3"/>
    </div>
    <div className="Frame33">
<img src={Rectangleo2} alt="" className="z2"/>
<img src={Rectangleo1} alt="" className="z1"/>
<img src={Rectangleo3} alt="" className="z3"/>
    </div>
    <div className="button1">
      <h4>Sprawdź pozostałe</h4>
    </div>
  </div>

    
  </div>
    </div>
  )
}

export default Galeria