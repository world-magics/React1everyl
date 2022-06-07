import React,{useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const InformForm = ({createInform}) => {
  const [inform,setInform]=useState({firstname:'',surname:'',jobs:'',years:'',address:'',emailAddress:''});
  const addInforms=(e)=>{
    e.preventDefault();
    // setInforms([...informs,{...inform,id:Date.now()}])
    const newInform={
        ...inform,
        id: Date.now(),

    }
    createInform(newInform)
    setInform({firstname:' ',surname:'',jobs:'',years:'',address:'',emailAddress:''});

  }
  return (
    <form className='d-grid'>
    <h3 className='text-center text-primary my-3'>Create Worker Info </h3>
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the name.'
    value={inform.firstname}
    onChange={e=>setInform({...inform,firstname: e.target.value})}
    
    />
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the surname.'
    value={inform.surname}
    onChange={e=>setInform({...inform,surname:e.target.value})}
    />
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the jobs.'
    value={inform.jobs}
    onChange={e=>setInform({...inform,jobs:e.target.value})}
    />
    <MyInput 
    type="number"
    className='form-control mt-3 mr-3' 
    placeholder='Enter the years.'
    value={inform.years}
    onChange={e=>setInform({...inform,years:e.target.value})}
    />
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the address.'
    value={inform.address}
    onChange={e=>setInform({...inform,address:e.target.value})}
    />
    <MyInput 
    type="text"  
    className='form-control mt-3 mb-3 mr-3' 
    placeholder='Enter the email address.'
    value={inform.emailAddress}
    onChange={e=>setInform({...inform,emailAddress:e.target.value})}
    />
  
    <MyButton  onClick={addInforms} >Add Worker Information</MyButton>  
    </form>
  )
}

export default InformForm