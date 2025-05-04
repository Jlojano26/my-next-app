"use client";
import { useState } from "react" //use this to add state to component

function HomePage(){

    //create some state keeping track of changing count
    const [count, setCount] = useState(0)

    return (
        <div> 
            <h1>Counter: {count}</h1>
            <button onClick={()=>{
                //write some javascript for this function to call
                setCount(count +1)
            }}> Add One </button>
        </div>


    )
}
export default HomePage