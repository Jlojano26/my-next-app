import {useState} from 'react'

function Form(props){

    //state - a way to set and reference data that changes in component
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")

    function handleClick(){
        
        //console.log(name, URL)

        //take last value and put into table

        props.submitFavLink({name, URL})

    }
    

    function handleNameInputChange(event){
        console.log(event.target.value)

        setName(event.target.value)
    }

    function handleURLInputChange(event){
        console.log(event.target.value)

        setURL(event.target.value)
    }


    return (
        <div>
            {/* form for use to input data */}
            <form>
                <label> Name </label>
                <input type="text" onChange={handleNameInputChange} />

                <label> URL </label>
                <input type="text" onChange={handleURLInputChange} />
            </form>

            <button onClick={handleClick}> Submit </button>

        </div>
    )
}

export default Form