import React from 'react'
import NavBar from './NavBar'
import Presentation from './Presentation'

const Inicio = () => {

  return (
    <div style={{backgroundImage: "url(/fondo2.jpeg)", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
      <NavBar />
      <Presentation />
    </div>
  )
}

export default Inicio