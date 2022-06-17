import React from 'react'
import '../App.css'
import Vector3 from '../Vector2.png'
import Vector4 from '../Vector4.png'
import Vector5 from '../Vector5.png'
import Vector6 from '../Vector6.png'
const Why = () => {
  return (
    <div>
        <div className="Why">
      <div className="Frame15">
<img src={Vector3} alt="" className="image"/>
<h1>Szybkie terminy</h1>
      </div>
      <div className="Frame16">
<img src={Vector4} alt="" className="image1"/>
<h1>Najlepsi fachowcy</h1>
      </div>
      <div className="Frame17">
<img src={Vector5} alt="" className="image2"/>
<h1>Znakomite wyposażenie</h1>
      </div>
      <div className="Frame18">
<img src={Vector6} alt="" className="image3"/>
<h1>Dobra lokalizacja</h1>
      </div>
    </div>
    </div>
  )
}

export default Why