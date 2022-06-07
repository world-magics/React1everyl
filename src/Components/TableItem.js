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
          <tr>
            <td>{props.number}</td>
            <td>{props.inform.firstname}</td>
            <td>{props.inform.surname}</td>
            <td>{props.inform.jobs}</td>
            <td>{props.inform.years}</td>
            <td>{props.inform.address}</td>
            <td>{props.inform.emailAddress}</td>
            
            <td>
              <button onClick={()=>props.remove(props.inform)}  className='btn btn-outline-danger'>Delete</button>
              <button disabled className='btn btn-outline-success mx-3'>Edit</button>
            </td>
          </tr>
   
   
  )
}

export default TableItem