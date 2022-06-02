import React from 'react'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const TableList = ({posts,title}) => {
  return (
      <>
      <h2 className='text-center text-primary my-4'>{title}</h2>
    <table className='table table-striped'>
        <thead>
      <TableHeader/>
        </thead>
        <tbody>
      {/* <TableItem name={"Azim"} 
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
      post={{
          id:1,
          name:"Durdona",
          surname:"Salimova",
          jobs:"Merchandayzer",
          years:14,
          address:"Uzbekistan, Navai city memors Street 35 home",
          emailAddress:"rayaSoftOffice2@gmail.com"}}
        /> */}
        {/* Object send another js end */}

        {posts.map(post=>(
            <TableItem post={post} key={post.id}/>
            
            ))}
        </tbody>

      </table>

            </>
  )
}

export default TableList