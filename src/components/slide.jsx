import React from 'react'
import './components.css'

import comida from '../assets/comida.jpg'

const Slide = () => {
  return (
    <>
    <div className="horarios-container">
      <img src={comida} alt="comida"/>
      <div className="horarios-txt">
        <h1 id='bold'>Horários</h1>
        <div className="horarios">
          <h3>seg, qua e qui</h3>
          <h3>-</h3>
          <h3>12h às 23h</h3>
        </div>
        <div className="horarios">
          <h3>sexta e sábado</h3>
          <h3>-</h3>
          <h3>12h às 01h</h3>
        </div>
        <div className="horarios">
          <h3>domingo</h3>
          <h3>-</h3>
          <h3>12h às 18h</h3>
        </div>
        <div className="horarios">
          <h3>terça-feira</h3>
          <h3>-</h3>
          <h3 id='semibold'>fechado</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slide