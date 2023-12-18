import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./components.css"

const Header = () => {

  const nav = useNavigate()


  return (
    <>
    <div className="header-container">
        <h1 className='logo' id='regular' onClick={nav('/')}>preto</h1>
        <div className="header-links">
            <div className="sub-links">
                <h2 id='thin'>endereço</h2>
                <h2 id='light'>·</h2>
                <h2 id='thin' onClick={nav('/menu')}>menu</h2>
            </div>
            <h2 className='reservar' id='light'>reservar</h2>
        </div>
    </div>
    </>
  )
}

export default Header;
