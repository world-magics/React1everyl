import React,{useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const InformForm = ({createInform}) => {
  const [inform,setInform]=useState({name:'',username:'',phone:'',website:'',email:''});
  const addInforms=(e)=>{
    e.preventDefault();
    // setInforms([...informs,{...inform,id:Date.now()}])
    const newInform={
        ...inform,
        id: Date.now(),

    }
    createInform(newInform)
    setInform({name:'',username:'',phone:'',website:'',email:''});

  }
  return (
    <form className='d-grid'>
    <h3 className='text-center text-primary my-3'>Create Worker Info </h3>
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the name.'
    value={inform.name}
    onChange={e=>setInform({...inform,name: e.target.value})}
    
    />
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the username.'
    value={inform.username}
    onChange={e=>setInform({...inform,username:e.target.value})}
    />
    <MyInput 
    type="text"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the phone'
    value={inform.phone}
    onChange={e=>setInform({...inform,phone:e.target.value})}
    />
    <MyInput 
    type="text"
    className='form-control mt-3 mr-3' 
    placeholder='Enter the website.'
    value={inform.years}
    onChange={e=>setInform({...inform,website:e.target.value})}
    />
    <MyInput 
    type="email"  
    className='form-control mt-3 mr-3' 
    placeholder='Enter the email.'
    value={inform.email}
    onChange={e=>setInform({...inform,email:e.target.value})}
    />
   
    <MyButton className='btn btn-outline-success w-100 '  onClick={addInforms} >Add Worker Information</MyButton>  
    </form>
  )
}

export default InformForm