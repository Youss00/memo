import React, { useState } from 'react'
import './FrmMemo.scss'
import SendIcon from '@mui/icons-material/Send';
import Pinguin from '../video/pinguin.gif'
import Maxwell from '../video/maxwell.gif'
import SonMaxwell from '../video/MaxwellCat.mp3'
import { motion, useDragControls } from "framer-motion"


function FrmMemo({ ajouterMemo }) {

  const [titre, setTitre] = useState('')
  console.log("titre ", titre);

  function envoieTache(evt){
    evt.preventDefault()
    ajouterMemo(titre)
    setTitre('')
  }
  const sonMaxwell = new Audio(SonMaxwell);



  return (
    <div className='FrmMemo' >
      <div className="images">
      <motion.img 
        layout 
        drag 
        dragConstraints={{ 
          top: -50, 
          left: -300, 
          right: 300, 
          bottom: 500 
        }}
        src={Pinguin} 
        alt="Logo"
      />
      <motion.img 
        layout 
        drag 
        dragConstraints={{ 
          top: -50, 
          left: -300, 
          right: 300, 
          bottom: 500 
        }}
        src={Maxwell} 
        alt="Logo"
        onClick={() => {
          sonMaxwell.volume = 0.3;
          sonMaxwell.play();
      
          setTimeout(() => {
            sonMaxwell.pause();
            sonMaxwell.currentTime = 0;
          }, 6000);
        }}
      />
      </div>
      <div className='form-input'>
        <form onSubmit={envoieTache}>
          <input
            
            className='input-memo'
            type="text"
            value={titre}
            placeholder='Ajoutez une tâche...'
            onChange={(evt) => setTitre(evt.target.value) }
            
          />
        </form>
        <button className='btn-ajout' onClick={() => ajouterMemo(titre)} ><SendIcon /></button>
      </div>
    </div>
  )
}

export default FrmMemo;