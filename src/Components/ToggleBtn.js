import React,{useState} from 'react'

const ToggleBtn = () => {
  const [toggle,setToggle]=useState(false);

  return (
    <div>
         <button onClick={()=>setToggle(!toggle)} className='btn btn-primary mx-4'>Youtube Comment</button>
      {toggle?<div>   <p className='px-3 text'>
       Many of our components require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
      <p className='px-3 text'>
        Many  of our components  require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
      <p className='px-3 text'>
        Many of our components require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
      <p className='px-3 text'>
        Many of our components require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
      <p className='px-3 text'>
        Many of our components require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
      <p className='px-3 text'>
        Many of our components require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
      <p className='px-3 text'>
        Many of our components require the use of JavaScript to function.
         Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. 
         Place the following  near the end of your pages, right before the closing 
        tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.
        </p>
        </div>:null}    
    </div>
  )
}

export default ToggleBtn