import React,{useState} from 'react'
import '../src/style/style.css'
import Button from './Components/Button';
import Input from './Components/Input';
import TableHeader from './Components/TableHeader';
import TableItem from './Components/TableItem';
import TableList from './Components/TableList';
import ToggleBtn from './Components/ToggleBtn';
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
      <form>
      <input className='form-control'/>
      </form>
      <TableList posts={posts} title={"Uzbekistan, Tashkent Shop Managment System Info"}/>
    </div>
    <div className="app px-3 my-5">
      <TableList posts={posts2} title={"Uzbekistan, Samarkand Shop Managment System Info"}/>
    </div>
    </>
  );
}

export default App;
