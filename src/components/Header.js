import React from 'react'
import '../App.css'
import Vector1 from '../Vector.png'
import Vector2 from '../Vector1.png'
import Rectangle from '../Rectangle.png'
const Header = () => {
  return (
    <div>
             <div className="Header">
      
      <div className="Frame7">

        <div className="Frame3">
        <img src={Vector1} className="Vector" alt=""/>
       <div className="Frame2">
        
        <h1 className="Diana">Diana</h1>
<div className="BeautySalon">Beauty Salon</div>
       </div>
        </div>
        <div className="Frame6">
           <div className="Frame4">
<h1>O Nas</h1>
<h1>Uslugi</h1>
<h1>Zespół</h1>
<h1>Galeria</h1>
<h1>Kontakt</h1>            
           </div>
           <div className="Frame5">
           <img src={Vector2} className="Vector2" alt=""/>
           <h1>555 000 918</h1>
           </div>
        </div>
      </div>
      <div className="Frame10">
        <div className="Frame9">
          <label>Salon kosmetyczny we Wrocławiu</label>
          <div className="Frame8">
            <h1 >Zapraszamy do naszego pięknego Salonu kosmetycznego</h1>
            <p className="p1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="Frame12">
              <button className="b1"><span>Poznaj nas</span></button>
              <button className="b2"><span className="t2">Nasze uslugi</span></button>
            </div>
          </div>
        </div>
      </div>
<img src={Rectangle} className="Rectangle" alt=""/>
    </div>
    </div>
  )
}

export default Header