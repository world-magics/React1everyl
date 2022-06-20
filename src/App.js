import axios from 'axios';
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
import MyModal from './Components/UI/modal/MyModal';
import MySelect from './Components/UI/select/MySelect';
import { useInforms } from './hooks/useCreateInform';
function App() {
  
  const [informs,setInforms]=useState([
  {id:1, name:'dwAli',username:"valiyev",phone:"+98961818841",website:27,email:"rayaSoft12OfficeConnect@gmail.com"},
  {id:2, name:'vfAli',username:"valiyev",phone:"+98961818841",website:27,email:"rayaSoft12OfficeConnect@gmail.com"},
  {id:3, name:'vsAli',username:"valiyev",phone:"+98961818841",website:27,email:"rayaSoft12OfficeConnect@gmail.com"},
  {id:4, name:'rAli',username:"valiyev",phone:"+98961818841",website:27,email:"rayaSoft12OfficeConnect@gmail.com"},
  {id:5, name:'dAli',username:"valiyev",phone:"+98961818841",website:27,email:"rayaSoft12OfficeConnect@gmail.com"},
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
    setModal(false)
  }
  async function fetchInform(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response);
  } 
  const removeInform=(inform)=>{
      setInforms(informs.filter(s=>s.id!==inform.id))
  }
  const [select,setSelect]=useState('');
  const [search,setSearch]=useState('');
  const [filter,setFilter]=useState({sort:'',query:''})
  const [modal,setModal]=useState(false);
  const sortedAndSearchInforms=useInforms(informs,filter.sort,filter.query)
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
  // const  SortedInform=useMemo(()=>{
  //   // console.log("first")
  //   if(filter.sort){
  //     return [...informs].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  //   }
  //   return informs
  // },[filter.sort,informs])
  // const sortedSearchAndInform=useMemo(()=>{
  //     return SortedInform.filter(inform=>inform.firstname.toLowerCase().includes(filter.query.toLowerCase()))
  // },[filter.query,SortedInform])
  // const sortSelect=(sort)=>{
  //   setSelect(sort);
  //   // console.log(sort);
  //   setInforms([...informs].sort((a,b)=>a[sort].localeCompare(b[sort])))
  //   // setInforms([...informs].sort((a,b)=>a[sort].localeCompare(b[sort])))

  // }
  return (
    <>
    <div className="app px-3 my-5 py-3 ">
      <MyButton onClick={()=>setModal(true)} className="btn btn-outline-success w-100">Add Inform Workers</MyButton>
      <button onClick={fetchInform}>daw</button>
      <MyModal modal={modal} setModal={setModal}>
      <InformForm createInform={createInform}/>
      </MyModal>
      <FilterAndSearch filter={filter} setFilter={setFilter}/>
      <TableList remove={removeInform} informse={sortedAndSearchInforms} title={"Uzbekistan, Tashkent Shop Managment System Info"}/>
      
      
    </div>
  
    </>
  );
  }

export default App;
