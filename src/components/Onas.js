import React from 'react'
import '../App.css'
import Rectangle1 from '../Rectangle (1).png'
import Rectangle2 from '../Rectangle (2).png'
import Rectangle3 from '../Rectangle (3).png'
const Onas = () => {
  return (
    <div><div className="O-nas">
    <div className="Group1">
<img src={Rectangle3} alt="" className="i3"/>
<img src={Rectangle2}alt="" className="i2"/>
<img src={Rectangle1} alt="" className="i1"/>
    </div>
    <div className="Frame14">
      <span>Kim jesteśmy</span>
      <div className="Frame13">
        <p className="pa1">Dowiedz się więcej o nas</p>
        <p className="pa2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <p className="pa2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <p className="pa2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
     <button className="b3"><span className="s1">Nasze usługi</span></button>
      </div>
    </div>
  </div></div>
  )
}

export default Onas