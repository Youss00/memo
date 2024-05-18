import './Memos.scss';
import React, { useState } from 'react'
// import FrmMemo from './FrmMemo'
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { motion } from "framer-motion"



function Memos({ id, couleur, titre, completee, dateMemo, effaceMemo, completeMemo }) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // console.log(isComplete, true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <motion.div layout className={completee ? 'todo-row complete' : 'todo-row'}
      key={id}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      >

      <div >
        {couleur}
        {titre}
        <p>{dateMemo}</p>
      </div>



      <motion.div layout className='buttons'>

        {/* <button onClick={() => setEdit(true)}className='btn-edit'> <EditIcon/> </button> */}
        <Checkbox layout
          {...label}
          checked={completee}
          sx={{
            color: pink[100],
            '&.Mui-checked': {
              color: pink[200],
            },
          }} onClick={() => completeMemo(id)} />
        <button onClick={() => effaceMemo(id)} className='btn-effacer'> <DeleteIcon /> </button>
      </motion.div>
    </motion.div>
  )

}


export default Memos;