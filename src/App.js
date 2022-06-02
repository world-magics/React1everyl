import React,{useState} from 'react'


function App() {
  const [count,setCount]=useState(0);
  function minus(){
    // setCount(count-=1)
    setCount(prev=>prev-1)
    // count+=1;
  }
  function plus(){
    setCount(prev=>prev+1)
  }
  return (
    <React.Fragment>
      <div className="container">
      <h3>Count: {count}</h3>
      <button onClick={plus} className='btn btn-success mx-4'>plus number</button>
      <button onClick={minus} className='btn btn-danger'>minus number</button>
      </div>
    </React.Fragment>
  );
}

export default App;
