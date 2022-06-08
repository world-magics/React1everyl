import React from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const TableList = ({informse,title,remove}) => {
  if(!informse.length){
    return (
      <h2 className='text-center my-5 text-danger'>Worker inform don't found!.</h2>
    )
  }
  return (
      <>
      <h2 className='text-center text-primary my-4'>{title}</h2>
        {/* <TableHeader className="w-75"/> */}
      <TransitionGroup>
            {informse.map((inform,index)=>(
              <CSSTransition
              key={inform.id}
              timeout={500}y
              classNames="item"
              >
            <TableItem remove={remove} number={index+1} inform={inform} key={inform.id}/>
            </CSSTransition>
            ))}

      </TransitionGroup>
   
       
      

            </>
  )
}

export default TableList