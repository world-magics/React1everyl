import React from 'react'
import { getPageArray } from '../../../utils/pages'
import MyButton from '../button/MyButton'

const MyPagination = ({totalPage,page,changePage}) => {
  const pageArray=getPageArray(totalPage)

  return (
    <>
    {pageArray.map(item=>(
        <MyButton
        className= {page===item?'btn btn-primary mx-1':'btn btn-outline-primary mx-1'} 
        key={item}
        onClick={()=>changePage(item)}
        >{item}</MyButton>
       ))}
    </>
  )
}

export default MyPagination