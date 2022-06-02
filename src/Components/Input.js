import React,{useState} from 'react'

const Input = () => {
  const [value,setValue]=useState("Uzbekistan Shop Managment System Info");

  return (
      <>
    <h2 className='text-center text-primary'>{value}</h2>
    
        <input 
      className='form-control'
      type="text" 
      // value={value}
      onChange={(e)=>setValue(e.target.value)}
      />
    </>
  )
}

export default Input