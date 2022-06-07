import React from 'react'
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
    <table className='table table-striped'>
        <thead>
      <TableHeader/>
        </thead>
        <tbody>
      {/* <TableItem firstname={"Azim"} 
       surname={"Fozilov"}
       jobs={"Assistent"}
       years={"35"}
       address={"Uzbekistan, Samarkand Ulugbek Street, 25"} 
       emailAddress={"office1grayasoft@gmail.com"}/>
       <TableItem name={"Karim"} 
       surname={"Azizov"} 
       jobs={"Assistent"} 
       years={"35"} 
       address={"Uzbekistan, Samarkand Ulugbek Street, 25" } 
       emailAddress={"office1grayasoft@gmail.com"}/>
       <TableItem name={"Farrux"} 
       surname={"Davidov"}
       jobs={"Assistent"}
       years={"35"}
       address={"Uzbekistan, Samarkand Ulugbek Street, 25"} 
       emailAddress={"office1grayasoft@gmail.com"}/>
       <TableItem name={"Davron"} 
       surname={"Xalikov"}
       jobs={"Assistent"}
       years={"35"}
       address={"Uzbekistan, Samarkand Ulugbek Street, 25"} 
    emailAddress={"office1grayasoft@gmail.com"}/> */}
      {/* Object send another js begin */}
      {/* <TableItem 
      inform={{
          id:1,
          name:"Durdona",
          surname:"Salimova",
          jobs:"Merchandayzer",
          years:14,
          address:"Uzbekistan, Navai city memors Street 35 home",
          emailAddress:"rayaSoftOffice2@gmail.com"}}
        /> */}
        {/* Object send another js end */}

        {informse.map((inform,index)=>(
            <TableItem remove={remove} number={index+1} inform={inform} key={inform.id}/>
            
            ))}
        </tbody>

      </table>

            </>
  )
}

export default TableList