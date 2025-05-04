"use client";
import { useState } from "react" //use this to add state to component

import Form from "./Components/Form"
import Table from "./components/Table"
function HomePage(){

    const[newFavLink, setNewFavLink] = useState({})

    function handleNewFavLink(favLink){
        //favLink is an object containing (name, url)

        console.log(favLink, "in homePage")

        setNewFavLink(favLink)
    }

    return (
        <div> 
            <h1> FavLinks </h1>

            <Form submitFavLink={handleNewFavLink}/>

            <Table data={newFavLink}/>

        </div>
    )
}
export default HomePage