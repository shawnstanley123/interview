import React from 'react'
import '../App.css'
import Vector7 from '../Vector7.png'
import Rectangle4 from '../Rectangle4.png'
const Cooferujemy = () => {
  return (
    <div>
         <div className="Co-oferujemy">
<div className="Frame20">
  <label>Nasze usługi</label>
  <div className="Frame19">
    <h2 >Zobacz, co możemy zaoferować</h2>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
  </div>
</div>
<div className="Frame21">
  <h4>Makijaż okolicznościowy</h4>
  <img src={Vector7} alt="" className='v8'/>
</div>
<div className="Frame23">
<img src={Rectangle4} alt="" className="r4"/>
<div className="Frame22">
  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
    do amet sint. Velit officia consequat duis enim velit mollit.<br/> Exercitation veniam consequat sunt nostrud amet.</p>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
    do amet sint. Velit officia consequat duis enim velit mollit.<br/> Exercitation veniam consequat sunt nostrud amet.</p>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
    do amet sint. Velit officia consequat duis enim velit mollit.<br/> Exercitation veniam consequat sunt nostrud amet.</p>
</div>
</div>
<div className="Frame24">
  <h4>Stylizacja paznokci</h4>
  <img src={Vector7} alt="" className='v7'/>
</div>
<div className="Frame25">
  <h4>Podologia</h4>
  <img src={Vector7} alt="" className='v7'/>
</div>
<div className="Frame26">
  <h4>Zabiegi na twarz</h4>
  <img src={Vector7} alt="" className='v7'/>
</div>
<div className="Frame27">
  <h4>Masaże</h4>
  <img src={Vector7} alt="" className='v7'/>
</div>
<div className="Frame28">
  <h4>Henna</h4>
  <img src={Vector7} alt="" className='v7'/>
</div>
<button className='us'><span className='usb'>Sprawdź wszystkie usługi</span></button>
  </div>
    </div>
  )
}

export default Cooferujemy