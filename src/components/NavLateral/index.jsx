import React from 'react'
import twitterLogo  from "../../assets/twitter-icon.svg";
import '../../styles/navLateral.css'
import icon from "../../icons"


export  function NavLateral() {
  return (
    <>
    <nav>
      {icon('twitterLogo')}
      <div className='links-nav'>{icon('inicio')}<p>Inicio</p></div>
      <div className='links-nav'>{icon('explorar')}<p>Explorar</p></div>
      <div className='links-nav'>{icon('notificaciones')}<p>Notificaciones</p></div>
      <div className='links-nav'>{icon('mensajes')}<p>Mensajes</p></div>
      <div className='links-nav'>{icon('guardados')}<p>Guardados</p></div>
      <div className='links-nav'>{icon('listas')}<p>Listas</p></div>
      <div className='links-nav'>{icon('perfil')}<p>Perfil</p></div>
      <div className='links-nav'>{icon('masOpciones')}<p>Mas Opciones</p></div>

    </nav>
    </>
  )
}
