import React,{useState,useRef, useMemo} from 'react'
import '../src/style/style.css'
import Button from './Components/Button';
import { FilterAndSearch } from './Components/FilterAndSearch';
import InformForm from './Components/InformForm';
import Input from './Components/Input';
import TableHeader from './Components/TableHeader';
import TableItem from './Components/TableItem';
import TableList from './Components/TableList';
import ToggleBtn from './Components/ToggleBtn';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import MySelect from './Components/UI/select/MySelect';
function App() {
  
  const [informs,setInforms]=useState([
  {id:1, firstname:'dwAli',surname:"valiyev",jobs:"hData Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:2, firstname:'vfAli',surname:"valiyev",jobs:"fData Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:3, firstname:'vsAli',surname:"valiyev",jobs:"jData Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:4, firstname:'rAli',surname:"valiyev",jobs:"vData Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
  {id:5, firstname:'dAli',surname:"valiyev",jobs:"bData Analayzer",years:27,address:"Uzbekistan, Tashkent city Amir Temur Street 104 home",emailAddress:"rayaSoft12OfficeConnect@gmail.com"},
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
  const [select,setSelect]=useState('');
  const [search,setSearch]=useState('');
  const [filter,setFilter]=useState({sort:'',query:''})
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
  const  SortedInform=useMemo(()=>{
    // console.log("first")
    if(filter.sort){
      return [...informs].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return informs
  },[filter.sort,informs])
  const sortedSearchAndInform=useMemo(()=>{
      return SortedInform.filter(inform=>inform.firstname.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query,SortedInform])
  // const sortSelect=(sort)=>{
  //   setSelect(sort);
  //   // console.log(sort);
  //   setInforms([...informs].sort((a,b)=>a[sort].localeCompare(b[sort])))
  //   // setInforms([...informs].sort((a,b)=>a[sort].localeCompare(b[sort])))

  // }
  return (
    <>
    <div className="app px-3 my-5 ">
      <InformForm createInform={createInform}/>
      <FilterAndSearch filter={filter} setFilter={setFilter}/>
      <TableList remove={removeInform} informse={sortedSearchAndInform} title={"Uzbekistan, Tashkent Shop Managment System Info"}/>
      
      
    </div>
  
    </>
  );
  }

export default App;
