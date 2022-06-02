import React from 'react'

const TableItem = (props) => {
  return (
     
    
        //   <tr>
        //     <td>1</td>
        //     <td>{props.name}</td>
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
            <td>{props.post.id}</td>
            <td>{props.post.name}</td>
            <td>{props.post.surname}</td>
            <td>{props.post.jobs}</td>
            <td>{props.post.years}</td>
            <td>{props.post.address}</td>
            <td>{props.post.emailAddress}</td>
            
            <td>
              <button className='btn btn-outline-danger'>Delete</button>
              <button className='btn btn-outline-success mx-3'>Edit</button>
            </td>
          </tr>
   
   
  )
}

export default TableItem