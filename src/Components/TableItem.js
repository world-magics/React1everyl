import React from 'react'

const TableItem = (props) => {
  return (
     
    
        //   <tr>
        //     <td>1</td>
        //     <td>{props.firstname}</td>
        //     <td>{props.surname}</td>
        //     <td>{props.jobs}</td>
        //     <td>{props.years}</td>
        //     <td>{props.address}</td>
        //     <td>{props.emailAddress}</td>
        //     <td>{props.emailAddress}</td>
            
        //     <td>
        //       <button className='btn btn-outline-danger'>Delete</button>
        //       <button className='btn btn-outline-success mx-3'>Edit</button>
        //     </td>
        //   </tr>
        <div className='d-flex justify-content-between p-2 my-2'>
         
            <p className='td'>{props.number}</p>
            <p className='td'>{props.inform.firstname}</p>
            <p className='td'>{props.inform.surname}</p>
            <p className='td'>{props.inform.jobs}</p>
            <p className='td'>{props.inform.years}</p>
            <p className='td'>{props.inform.address}</p>
            <p className='td'>{props.inform.emailAddress}</p>
            
            <p className='td'>
              <button onClick={()=>props.remove(props.inform)}  className='btn btn-outline-danger'>Delete</button>
              <button disabled className='btn btn-outline-success mx-3'>Edit</button>
            </p>
         
        </div>

   
   
  )
}

export default TableItem