import React from 'react'
import MyButton from './UI/button/MyButton'
const TableItem = (props) => {
  return (
     
    
        <div className='d-flex justify-content-between p-2 my-2'>
         
            <p>{props.number}</p>
            <p>{props.inform.firstname}</p>
            <p>{props.inform.surname}</p>
            <p>{props.inform.jobs}</p>
            <p>{props.inform.years}</p>
            <p>{props.inform.address}</p>
            <p>{props.inform.emailAddress}</p>
            
            <p>
              <MyButton onClick={()=>props.remove(props.inform)}  className='btn btn-outline-danger'>Delete</MyButton>
              <MyButton disabled className='btn btn-outline-success mx-3'>Edit</MyButton>
            </p>
         
        </div>

   
   
  )
}

export default TableItem