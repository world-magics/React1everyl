import axios from 'axios';
import React,{useState,useRef, useMemo, useEffect} from 'react'
import '../src/style/style.css'
import InformServiceApi from './API/InformServiceApi';
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
import MyLoader from './Components/UI/loader/MyLoader';
import MyModal from './Components/UI/modal/MyModal';
import MySelect from './Components/UI/select/MySelect';
import { useInforms } from './hooks/useCreateInform';
function App() {
  
  const [informs,setInforms]=useState([])
  // const [firstname,setName]=useState("");
  // const [surname,setSurname]=useState("");
  // const [jobs,setJobs]=useState("");
  // const [years,setYears]=useState("");
  // const [address,setAddress]=useState("");
  // const [emailAddress,setEmailAddress]=useState("");
  // object sifatifa berb yuborish usestatga
  const [isLoading,setIsLoading]=useState(false)
 
  const createInform=(newInform)=>{
    setInforms([...informs,newInform])
    setModal(false)
  }
  useEffect(()=>{
    fetchInform()
  },[])
  async function fetchInform(){

    setIsLoading(true)
        const informs=await InformServiceApi.getAllInforms()
    // // console.log(response);
    setInforms(informs);
    setIsLoading(false)
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
      <MyModal modal={modal} setModal={setModal}>
      <InformForm createInform={createInform}/>
      </MyModal>
      <FilterAndSearch filter={filter} setFilter={setFilter}/>
      
      {isLoading
      ?
      <div className='loadercenter'><MyLoader/></div> 
      :
      <TableList remove={removeInform} informse={sortedAndSearchInforms} title={"Uzbekistan, Tashkent Shop Managment System Info"}/>
      }
      
    </div>
  
    </>
  );
  }

export default App;
