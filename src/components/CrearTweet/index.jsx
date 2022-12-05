import React from 'react'
import '../../styles/crearTweet.css'
import paisaje from '../../assets/paisaje-icon.svg'
import gif from '../../assets/gif-icon.svg'
import encuesta from '../../assets/encuesta-icon.svg'
import emoji from '../../assets/emoji-icon.svg'
import calendario from '../../assets/calendario-icon.svg'
import ubicacion from '../../assets/ubicacion-icon.svg'

export  function CrearTweet() {
  return (
    <>
    <section className='crear-tweet-container'>
        <div className='inicio-container'>
          <h3>Inicio</h3>
        </div>
      <div className='crear-tweet'>
        <img src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg" alt="" />
        <input type="text" placeholder='¿Que esta pasando?'/>
      </div>
      <div className='iconos'>
        <img src={paisaje} alt="paisaje" />
        <img src={gif} alt="gif" />
        <img src={encuesta} alt="encuesta" />
        <img src={emoji} alt="emoji" />
        <img src={calendario} alt="calendario" />
        <img src={ubicacion} alt="ubicacion" />
      </div>
      <button className='btn-twittear'>Twittear</button>
    </section>
    </>
  )
}
