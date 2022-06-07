import React from 'react'

export const FilterAndSearch = () => {
  return (
    <div className='d-flex justify-content-between align-items-center my-3 text-right'>
        <MyInput 
        placeholder="Search for type..."
        value={search}
        onChange={e=>setSearch(e.target.value)}

        />
         <MySelect 
         value={select}
         onChange={sortSelect}
         defaultValues="Sorted by"
         options={[
           {value:"firstname",name:'Firstnames'},
           {value:"jobs",name:'Jobs'}
         ]}
         />
      </div>
  )
}
