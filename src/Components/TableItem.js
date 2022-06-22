import React from 'react'
import MyButton from './UI/button/MyButton'
const TableItem = (props) => {
  return (
     
    
        <div className='d-flex justify-content-between p-2 my-2'>
         
            <p>{props.inform.id}</p>
            <p>{props.inform.name}</p>
            <p>{props.inform.username}</p>
            <p>{props.inform.phone}</p>
            <p>{props.inform.website}</p>
            <p>{props.inform.email}</p>
           
            
            <p>
              <MyButton onClick={()=>props.remove(props.inform)}  className='btn btn-outline-danger'>Delete</MyButton>
              <MyButton disabled className='btn btn-outline-success mx-3'>Edit</MyButton>
            </p>
         
        </div>

   
   
  )
}

export default TableItem