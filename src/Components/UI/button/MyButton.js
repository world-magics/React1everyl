import React from 'react'
import '../button/MyButton.css'
const MyButton = ({children,...props}) => {
  return (
   <button {...props} className='btn btn-success w-100'>
       {children}
   </button>
  )
}

export default MyButton