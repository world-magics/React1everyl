import React,{useState} from 'react'

const Button = () => {
    const [count,setCount]=useState(0);
  function minus(){
    // setCount(count-=1)
    setCount(prev=>prev-1)
    // count+=1;
  }
  function plus(){
    setCount(prev=>prev+1)
  }
  return (
    <div>
      <button onClick={plus} className='btn btn-success mx-4 my-4'>plus number</button>
      <button onClick={minus} className='btn btn-danger my-4'>minus number</button>
      {/* <span className='text-success'>{count}</span> */}
    </div>
  )
}

export default Button