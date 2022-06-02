import React,{useState} from 'react'
import '../src/style/style.css'
import Button from './Components/Button';
import Input from './Components/Input';
import TableHeader from './Components/TableHeader';
import TableItem from './Components/TableItem';
import TableList from './Components/TableList';
import ToggleBtn from './Components/ToggleBtn';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
function App() {
  
  const [posts,setPosts]=useState([
  {id:1, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:2, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:3, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:4, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:5, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:6, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:7, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:8, name:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"} 
  ])
  const [posts2,setPosts2]=useState([
  {id:1, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:2, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:3, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:4, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:5, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:6, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:7, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:8, name:'Davron',surname:"Salimov",jobs:"Architector",years:31,address:"Uzbekistan, Samarkand city Zulfihonim Street 65 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  ])
  
  return (
    <>
    <div className="app px-3 my-5">
      <form className='d-grid'>
      <h3 className='text-center text-primary my-3'>Create Worker Info </h3>
      <MyInput type="text" className='form-control mt-3 mr-3' placeholder='Enter the name.'/>
      <MyInput type="text" className='form-control mt-3 mr-3' placeholder='Enter the surname.'/>
      <MyInput type="text" className='form-control mt-3 mr-3' placeholder='Enter the jobs.'/>
      <MyInput type="number" className='form-control mt-3 mr-3' placeholder='Enter the years.'/>
      <MyInput type="text" className='form-control mt-3 mr-3' placeholder='Enter the address.'/>
      <MyInput type="text" className='form-control mt-3 mb-3 mr-3' placeholder='Enter the email address.'/>
    
      <MyButton >Add Worker Information</MyButton>  
      </form>
      <TableList posts={posts} title={"Uzbekistan, Tashkent Shop Managment System Info"}/>
    </div>
  
    </>
  );
}

export default App;
