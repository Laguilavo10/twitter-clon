import { useState } from 'react'
import  './index.css'
import { CrearTweet } from "./components/CrearTweet";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <>
     <main className='main-section'>
      <CrearTweet></CrearTweet>
      <Timeline></Timeline>
     </main>
    
    </>
  )
}

export default App
