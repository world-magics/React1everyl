import React,{useState,useRef} from 'react'
import '../src/style/style.css'
import Button from './Components/Button';
import InformForm from './Components/InformForm';
import Input from './Components/Input';
import TableHeader from './Components/TableHeader';
import TableItem from './Components/TableItem';
import TableList from './Components/TableList';
import ToggleBtn from './Components/ToggleBtn';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
function App() {
  
  const [informs,setInforms]=useState([
  {id:1, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:2, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:3, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:4, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:5, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:6, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:7, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:8, firstname:'Ali',surname:"valiyev",jobs:"Data Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"} 
  ])
  // const [firstname,setName]=useState("");
  // const [surname,setSurname]=useState("");
  // const [jobs,setJobs]=useState("");
  // const [years,setYears]=useState("");
  // const [address,setAddress]=useState("");
  // const [emailAddress,setEmailAddress]=useState("");
  // object sifatifa berb yuborish usestatga
 
  const createInform=(newInform)=>{
    setInforms([...informs,newInform])
  }
  const removeInform=(inform)=>{
      setInforms(informs.filter(s=>s.id!==inform.id))
  }

  // const addPost=(e)=>{
  //   e.preventDefault();
  //   const newPost={
  //     id:Date.now(),
  //     firstname,
  //     surname,
  //     jobs,
  //     years,
  //     address,
  //     emailAddress
  //   }
    // setFirstname("");
    // setSurname("");
    // setJobs("");
    // setYears("");
    // setAddress(""); //input ichidagini uchirib tashash un qushiladi
    // setEmailAddress("");
    // console.log(name);
  // }
  return (
    <>
    <div className="app px-3 my-5">
      <InformForm createInform={createInform}/>
      <TableList remove={removeInform} informse={informs} title={"Uzbekistan, Tashkent Shop Managment System Info"}/>
    </div>
  
    </>
  );
  }

export default App;
