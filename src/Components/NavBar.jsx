import React from 'react'
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md py-2" data-bs-theme="dark" style={{backgroundColor: "#043050"}}>
      <div class="container " >
        <a class="navbar-brand fs-4" href="/">Perfil</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav" >
            <li class="nav-item">
              <a class="nav-link fs-5" aria-current="page" href="#presentacion">Presentación</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle fs-5" role="button" href='/' data-bs-toggle="dropdown" aria-expanded="false">
                Conocimientos
              </a>
              <ul class="dropdown-menu" data-bs-theme="light">
                <li><a class="dropdown-item" href="#conocimiento_fullstack">Conocimiento Full-Stack</a></li>
                <li><a class="dropdown-item" href="#lenguajes">Lenguajes de Programación</a></li>
                <li><a class="dropdown-item" href="#servidores">Gestión de Servidores</a></li>
                <li><a class="dropdown-item" href="#tools">Herramientas Software</a></li>
                <li><a class="dropdown-item" href="#versions_control">Sistema de Control De Versiones</a></li>
                <li><a class="dropdown-item" href="#web_tools">Tecnologías de Desarrollo Web</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5" aria-current="page" href="/CV_Carlos_Becerra.pdf" target='_blank'>Hoja de Vida</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar