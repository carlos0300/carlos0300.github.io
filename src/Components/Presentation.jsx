import React from 'react'

import '../Styles/style.css'

const Presentation = () => {

  return (
    <div>
        <br />
        <br />
        {/**Firts topic */}
        <div class="container">
            <div id='presentacion' class="row justify-content-center py-4">
            <h4 class="mb-3 text-white">Presentación</h4>
                <div class="col-md-4 col-lg-3 col-xl-3 py-2 align-self-center" >
                    <img alt='Carlos Becerra' src='/perfil2.png' class="card-img-top mx-auto my-3" style={{width: 230, background: "white", borderRadius: "100%"}} />
                </div>
                <div class="col-md-8 col-lg-9 col-xl-9 my-auto fs-5 text-white" style={{textAlign: "justify"}} >
                    <p class="text-white">Carlos Eduardo Becerra Lizarazo
                        <br /> Ingeniero de Sistemas
                        <br /> Desarrollador Full-Stack
                    </p>
                        Ingeniero de sistemas, con conocimientos en desarrollo de software y bases de datos.
                        con enfasis enel desarrollo web, poseo habilidades tanto para el frontend utilizando 
                        tecnologías como ReactJs, asícomo también, para el backend usando frameworks como lo son NodeJs
                        y Springboot, tambiéntengo conocimiento en el diseño e implementación de bases de datos
                        relacionales SQL y norelacionales NOSQL, manejo de servidores sobre infraestructura Linux
                        y servicios computacionales enla nube con Microsoft Azure. Para finalizar, soy una persona
                        proactiva, dispuesta a aprender nuevascosas y a enfrentar nuevos retos que me permitan
                        crecer profesionalmente y mejorar cada día.
                </div>
            </div>
            {/**Second topic */}
            <div id='conocimiento_fullstack' class="row mt-5 py-4" >
            <h4 class="mb-4 text-white">Conocimientos Full-Stack</h4>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3">
                        <img src="nodejs.webp" class="card-img-top mx-auto " alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Backend - NodeJs.</p>
                            <p>Es una plataforma de programación en JavaScript que permite ejecutar sentencias de código y desarrollar aplicaciones web del lado del servidor.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="react.png" class="card-img-top mx-auto my-2" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Frontend - ReactJs.</p>
                            <p>Librería JavaScript de front-end que permite crear
                                 experiencias de interfaz de usuario (UIX) atractivas por programación basada en componentes.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="sql.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">BD Relacionales SQL</p>
                            <p>Se basan en la organización de la información en partes pequeñas que se integran mediante identificadores, algunas de ellas son: MySQL, PosgreSQL, MariaDB.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Third topic */}
            <div id='lenguajes' class="row mt-5 py-4">
                <h4 class="mb-4 text-white">Lenguajes de programación</h4>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3">
                        <img src="javascript.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">JavaScript.</p>
                            <p>Lenguaje de programación interpretado. Se define como orientado a objetos, 
                                basado en prototipos, imperativo, débilmente tipado y dinámico.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="python.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 140}} />
                        <div class="card-body">
                            <p class="card-text">Python.</p>
                            <p>Lenguaje de alto nivel interpretado, cuya filosofía hace hincapié en la legibilidad
                                 de su código, se utiliza para desarrollar aplicaciones de todo tipo.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="java.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 320, height: 150}} />
                        <div class="card-body">
                            <p class="card-text">Java</p>
                            <p>Lenguaje de programación orientado a objetos y una plataforma informática muy confiable para el desarrollo servicios y aplicaciones.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Fourth topic */}
            <div id='servidores' class="row mt-5 py-4 ">
                <h4 class="mb-4 text-white">Gestión de Servidores</h4>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3">
                        <img src="ubuntu.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Ubuntu Server.</p>
                            <p>Es una versión del sistema operativo Ubuntu, de código abierto, 
                                desarrollado y optimizado principalmente para ser usado en la implementación de servidores.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="vm_azure.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Azure Virtual Machine.</p>
                            <p>Entorno virtual que funciona como sistema informático, con su propia CPU, memoria, almacenamiento e interfaz de red, todo dentro de la plataforma de azure.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="apache.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 350, height: 150}} />
                        <div class="card-body">
                            <p class="card-text">Apache Server</p>
                            <p>Servidor HTTP de código abierto, disponible para los sistemas operativos modernos,
                                 entre los que se encuentran Unix y Windows.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Fiveth topic */}
            <div id='tools' class="row mt-5 py-4 ">
                <h4 class="mb-4 text-white">Herrramientas Software</h4>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3">
                        <img src="vscode.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 120}} />
                        <div class="card-body">
                            <p class="card-text">VS Code.</p>
                            <p>Editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS
                                 y Web. Incluye extensiones que permiten personalizar el ambiente de desarrollo.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="postman.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 135}} />
                        <div class="card-body">
                            <p class="card-text">Postman.</p>
                            <p>Plataforma API que permite a los desarrolladores diseñar, construir, probar e iterar 
                                APIs, cuenta con más de 25 millones de usuarios registrados.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="mysqlworkbench.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 118}} />
                        <div class="card-body">
                            <p class="card-text">MySQL WorkBench.</p>
                            <p>Herramienta visual de diseño de bases de datos que integra 
                                administración, diseño, gestión y mantenimiento 
                                para el sistema de base de datos MySQL.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3 mx-auto">
                        <img src="phpmyadmin.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 185}} />
                        <div class="card-body">
                            <p class="card-text">PhpMyAdmin.</p>
                            <p>Herramienta escrita en PHP con la intención de manejar la administración de MySQL a través de páginas web, utilizando un navegador web.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="word.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 160}} />
                        <div class="card-body">
                            <p class="card-text">Microsoft Word.</p>
                            <p>Software informático procesador de texto, uno de los más utilizados a la hora de trabajar con 
                                documentos digitales, muy util para generar informes.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="excel.png" class="card-img-top mx-auto" alt="Img" style={{ maxWidth: 107}} />
                        <div class="card-body">
                            <p class="card-text">Microsoft Excel.</p>
                            <p> Hoja de cálculo que permite manipular datos numéricos y 
                                de texto en tablas formadas por la unión de filas y columnas,
                                muy util para generar graficos y reportes.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Sixth topic */}
            <div id='versions_control' class="row mt-5 py-4 ">
                <h4 class="mb-4 text-white">Sistema de Control de Versiones</h4>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3">
                        <img src="git.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 140}} />
                        <div class="card-body">
                            <p class="card-text">Git.</p>
                            <p>Software de control de versiones que mejora la eficiencia, la confiabilidad y
                                compatibilidad de aplicaciones por medio del código fuente.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="github.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 140}} />
                        <div class="card-body">
                            <p class="card-text">GitHub.</p>
                            <p>Portal creado para alojar el código de las aplicaciones de cualquier desarrollador.
                                utiliza el sistema de gestión de versiones de git.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="gitlab.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">GitLab</p>
                            <p>herramienta de ciclo de vida y repositorio de Git. 
                                Permite a los profesionales gestionar y realizar diversas tareas del proyecto.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Seventh topic */}
            <div id='web_tools' class="row mt-5 py-4 ">
                <h4 class="mb-4 text-white">Tecnologías de Desarrollo Web</h4>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3">
                        <img src="html5.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">HTML 5.</p>
                            <p>lenguaje con el que se define el contenido de los sitios web. 
                                Se trata de un conjunto de etiquetas que sirven para definir el texto y 
                                otros elementos que compondrán un sitio web.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="css3.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">CSS 3.</p>
                            <p>lenguaje basado en reglas: cada usuario define las reglas que especifican los grupos
                                de estilos que van a aplicarse a elementos particulares o grupos de elementos de 
                                un sitio web.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="javascript_web.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">JavaScript.</p>
                            <p>Robusto lenguaje de programación que se puede aplicar a un documento HTML 
                                y usarse para crear interactividad dinámica en los sitios web.</p>
                                <br />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5 ">
                    <div class="card py-3 mx-auto">
                        <img src="bootstrap.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Bootstrap.</p>
                            <p>Libreria multiplataforma o conjunto de herramientas de código
                                 abierto para diseño de sitios y aplicaciones web.</p>  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3   ">
                        <img src="mui.png" class="card-img-top mx-auto" alt="Img" style={{maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Material UI.</p>
                            <p>Libreria de componentes de interfaz de usuario para React, diseñada 
                                para ayudar a construir aplicaciones web modernas.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 my-4 fs-5">
                    <div class="card py-3">
                        <img src="figma.png" class="card-img-top mx-auto" alt="Img" style={{ maxWidth: 150}} />
                        <div class="card-body">
                            <p class="card-text">Figma.</p>
                            <p>Editor de gráficos vectorial y una herramienta de generación de 
                                prototipos, principalmente basada en la web.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Eighth topic */}
            <div id='contact' class="row mt-5 py-4">
                <h4 class="mb-4 text-white">Información de Contacto</h4>
                <div class="col-md-12 col-lg-12 col-xl-12 my-4 fs-5 text-white">
                    <table cellPadding={5} class="mx-auto">
                        <tr>
                            <td align='left'> Correo: </td>
                            <td align='left'> caedbeli@gmail.com - cbecerrali@hotmail.com </td>
                        </tr>
                        <tr>
                            <td align='left'> Perfil web:</td>
                            <td align='left'> <a href='https://carlos0300.github.io/'>https://carlos0300.github.io/</a> </td>
                        </tr>
                        <tr>
                            <td align='left'> LinkedIn:</td>
                            <td align='left'> <a href='https://www.linkedin.com/in/carlos-eduardo-becerra-lizarazo/' target='_blank' rel='noreferrer' >https://www.linkedin.com/in/
                            carlos-eduardo-becerra-lizarazo/</a> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p class="text-secondary"> Copyright © {new Date().getFullYear()} Todos los derechos reservados. </p>
        <br /> <br /> 
    </div>
  )
}

export default Presentation