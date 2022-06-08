import React from 'react'
import '../button/MyButton.css'
const MyButton = ({children,...props}) => {
  return (
   <button {...props} >
       {children}
   </button>
  )
}

export default MyButton