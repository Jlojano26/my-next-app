"use client";
import { useState } from "react" //use this to add state to component

import Form from "./Components/Form"
import Table from "./components/Table"
function HomePage(){

    //create some state keeping track of changing count
    const [count, setCount] = useState(0)

    return (
        <div> 
            <h1> FavLinks </h1>

            <Form />

            <Table />

        </div>
    )
}
export default HomePage