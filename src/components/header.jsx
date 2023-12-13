import React from 'react'
import "./components.css"

const Header = () => {
  return (
    <>
    <div className="header-container">
        <h1 className='logo' id='regular'>preto</h1>
        <div className="header-links">
            <div className="sub-links">
                <h2 id='thin'>endereco</h2>
                <h2 id='light'>·</h2>
                <h2 id='thin'>menu</h2>
            </div>
            <h2 className='reservar' id='light'>reservar</h2>
        </div>
    </div>
    </>
  )
}

export default Header;
