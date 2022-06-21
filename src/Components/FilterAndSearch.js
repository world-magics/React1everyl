import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export const FilterAndSearch = ({filter,setFilter}) => {
  return (
    <div className='d-flex justify-content-between align-items-center my-3 text-right'>
        <MyInput 
        placeholder="Search for type..."
        value={filter.query}
        onChange={e=>setFilter({...filter,query:e.target.value})}

        />
         <MySelect
         value={filter.sort}
         onChange={selected=>setFilter({...filter,sort:selected})}
         defaultValues="Sorted by"
         options={[
           {value:"name",name:'Name'},
           {value:"phone",name:'Phone'}
         ]}
         />
      </div>
  )
}
