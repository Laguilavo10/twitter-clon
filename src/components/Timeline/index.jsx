import React from 'react'
import '../../styles/timeline.css'
import coment from "../../assets/coment-icon.svg";
import retweet from "../../assets/retweet-icon.svg";
import like from "../../assets/like-icon.svg";
import compartir from "../../assets/compartir-icon.svg";






export  function Timeline() {
  return (
    <>
      <div className='timeline-item'>
        <img src="https://i.pinimg.com/originals/79/4f/c2/794fc2b1eecc34caaf3fa7f92de6c1b9.jpg" alt="" />
        <h4>Andres Laguilavo <span>@laguilavo16</span></h4>
        <p>Este es un texto de prueba para mirar como queda en twitetr clonsdashjdfjhasgfdjdhjkgasjkhdgasjhdghdgjkasjhdgashjkgdkshjadhjkgasdjgsadhjkasgdjhagsdkjh</p>
        <div className='interacciones-container'>
          <button><img src={coment} alt="coment" /></button>
          <button><img src={retweet} alt="retweet" /></button>
          <button><img src={like} alt="like" /></button>
          <button><img src={compartir} alt="compartir" /></button>
        </div>
      </div>
    </>
  )
}
