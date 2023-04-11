import React ,{useState,useEffect} from 'react'
import "../App.css"

function Counter() {
    const [state,setState]=useState(0)
    
   
    const newvalue=(e)=>{
       clearTimeout()
        setState(parseInt(e.target.value))
    }
    const Down=()=>{
        
       setInterval(() => {
            setState(state => state!==0?state-1:state);
            }, 1000);
         
    }
   
  return (
    <div className='container'>
        <div>
            time:{state} sec
        </div>
        <label id='time'>Enter value</label>
        <div>
            <input type='number'  id="time" placeholder='time'  onChange={newvalue}/>
        </div>
        <div>
            <button onClick={Down}>Enter</button>
        </div>
      
    </div>
  )
}

export default Counter
