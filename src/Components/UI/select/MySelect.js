import React from 'react'

const MySelect = ({options,defaultValues,onChange,value}) => {
  return (

      <select 
      className='form-control my-3 w-25'
    value={value}
    onChange={e=>onChange(e.target.value)}
    >
            <option disabled value="">{defaultValues}</option>
            {options.map(opt=>( 
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            ))}
    </select>
  )
}

export default MySelect