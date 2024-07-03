import React from 'react'

function Textfield({textItem,settextItem}) {
 
  return (
    <div className='textfield'>
       <div className='color'>
        <input type='text'
               placeholder='Enter color Name'
               onChange={(e)=>(settextItem(e.target.value))}
               />
       </div>
       <div className='toggle'>
        <button>Toggle Text Color</button>
       </div>
    </div>
  )
}

export default Textfield;