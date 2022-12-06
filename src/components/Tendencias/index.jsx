import React from 'react'
import icon from '../../utilities/icons'
import '../../styles/tendencias.css'


export  function Tendencias() {
  console.log(icon('like'))
  return (
    <>
    <section className='aside-right'>
      <div className="buscador">
          {icon('explorar')}
          <input type="text" placeholder='Buscar en Twitter'/>
      </div>
      <div className="tendencias-container">
        <h4>Que esta pasando</h4>
        <div className='tendencias-items'>
          <span>Tendencias</span>
          <p>Mundial</p>
        </div>
        <div className='tendencias-items'>
          <span>Tendencias</span>
          <p>Mundial</p>
        </div>
        <div className='tendencias-items'>
          <span>Tendencias</span>
          <p>Mundial</p>
        </div>
        <div className='tendencias-items'>
          <span>Tendencias</span>
          <p>Mundial</p>
        </div>
        <p>Mostrar mas</p>
      </div>

    </section>

    </>
  )
}
